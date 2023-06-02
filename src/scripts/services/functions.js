import { searchVideo } from "./Search";
import { parse, serialize } from "tinyduration";
import millify from "millify";
import { nanoid } from "nanoid";
import { renderSearchResults } from "/src/scripts/dataList";
import { renderPaginationBar } from "/src/scripts/paginationBar";

async function fetchSearch(page) {
  try {
    const response = await searchVideo.fetchVideoSearch(page);

    formatData(response);
    renderSearchResults();
    renderPaginationBar();
  } catch (error) {
    console.log(error);
  }
}

function formatData(response) {
  searchVideo.setPageIndex(response.queries.request[0].startIndex);
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
        const interactioncount = millify(
          el.pagemap.videoobject[0].interactioncount,
          { lowercase: true }
        );

        pagemap = {
          description: el.pagemap.videoobject[0].description,
          duration,
          interactioncount: interactioncount || null,
          name: el.pagemap.videoobject[0].name,
          url: el.pagemap.videoobject[0].url,
          thumbnailurl: el.pagemap.videoobject[0].thumbnailurl,
          identifier: el.pagemap.videoobject[0].identifier,
        };
      }

      const str = el.displayLink.replaceAll("www.", "");
      const modifiedString = str[0].toUpperCase() + str.slice(1);

      return {
        displayLink: modifiedString,
        formattedUrl: el.formattedUrl,
        title: el.title,
        pagemap,
        id: nanoid(),
      };
    });

  searchVideo.setSearchData(formattedData);
}

String.prototype.limit = function (limit, userParams) {
  let text = this,
    options = {
      ending: "...",
      trim: true,
      words: true,
    },
    prop,
    lastSpace,
    processed = false;

  if (limit !== parseInt(limit) || limit <= 0) return this;

  if (typeof userParams == "object") {
    for (prop in userParams) {
      if (userParams.hasOwnProperty.call(userParams, prop)) {
        options[prop] = userParams[prop];
      }
    }
  }
  if (options.trim) text = text.trim();

  if (text.length <= limit) return text;
  text = text.slice(0, limit);
  lastSpace = text.lastIndexOf(" ");
  if (options.words && lastSpace > 0) {
    text = text.substr(0, lastSpace);
  }
  return text + options.ending;
};

export { formatData, fetchSearch };
