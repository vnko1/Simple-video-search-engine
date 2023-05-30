import { searchVideo } from "./Search";
import { parse } from "tinyduration";
import millify from "millify";
import { nanoid } from "nanoid";

function formatData(response) {
  console.log(response);
  if (response.queries.nextPage)
    searchVideo.setNextPageIndex(response.queries.nextPage[0].startIndex);
  else searchVideo.setNextPageIndex(null);

  if (response.queries.previousPage)
    searchVideo.setPrevPageIndex(response.queries.previousPage[0].startIndex);
  else searchVideo.setPrevPageIndex(null);

  searchVideo.setCount(response.queries.request[0].count);

  let formattedData = null;
  if (response.items)
    formattedData = response?.items.map((el) => {
      let pagemap = null;

      if (el.pagemap.videoobject) {
        const duration = parse(el.pagemap.videoobject[0].duration);
        duration.minutes = duration.minutes.toString().padStart(2, "0");
        duration.seconds = duration.seconds.toString().padStart(2, "0");
        // const interactioncount = millify(
        //   el.pagemap.videoobject[0].interactioncount
        //   { lowercase: true }
        // );

        pagemap = {
          desciption: el.pagemap.videoobject[0].description,
          duration,
          interactioncount,
          name: el.pagemap.videoobject[0].name,
          url: el.pagemap.videoobject[0].url,
          thumbnailurl: el.pagemap.videoobject[0].thumbnailurl,
          identifier: el.pagemap.videoobject[0].identifier,
        };
      }

      return {
        displayLink: el.displayLink,
        formattedUrl: el.formattedUrl,
        title: el.title,
        pagemap,
        id: nanoid(),
      };
    });

  searchVideo.setSearchData(formattedData);
}

export { formatData };
