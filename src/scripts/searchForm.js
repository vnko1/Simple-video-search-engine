import { searchVideo } from "./services/Search";

document
  .getElementById("searchForm")
  .addEventListener("submit", onHandleSubmit);

async function onHandleSubmit(e) {
  e.preventDefault();
  const { search } = e.currentTarget.elements;
  console.log(search.value);
  searchVideo.setQuery(search.value.trim());

  try {
    const response = await searchVideo.fetchVideoSearch(
      searchVideo.getPageIndex()
    );
    normalizeData(response);
  } catch (error) {
    console.log(error);
  } finally {
    search.value = "";
  }
}

function normalizeData(response) {
  if (response.queries.nextPage)
    searchVideo.setNextPageIndex(response.queries.nextPage[0].startIndex);
  if (response.queries.previousPage)
    searchVideo.setPrevPageIndex(response.queries.previousPage[0].startIndex);

  const formattedData = response.items.map((el) => {
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
}
