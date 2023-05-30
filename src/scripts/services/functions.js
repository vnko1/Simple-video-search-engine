import { searchVideo } from "./Search";

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

      if (el.pagemap.videoobject)
        pagemap = {
          desciption: el.pagemap.videoobject[0].desciption,
          duration: el.pagemap.videoobject[0].duration,
          interactioncount: el.pagemap.videoobject[0].interactioncount,
          name: el.pagemap.videoobject[0].name,
          url: el.pagemap.videoobject[0].url,
          thumbnailurl: el.pagemap.videoobject[0].thumbnailurl,
          embedurl: el.pagemap.videoobject[0].embedurl,
        };

      return {
        displayLink: el.displayLink,
        formattedUrl: el.formattedUrl,
        pagemap,
      };
    });

  searchVideo.setSearchData(formattedData);
}

export { formatData };
