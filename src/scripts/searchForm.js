import { searchVideo, formatData } from "./services";

document
  .getElementById("searchForm")
  .addEventListener("submit", onHandleSubmit);

async function onHandleSubmit(e) {
  e.preventDefault();
  const { search } = e.currentTarget.elements;

  searchVideo.setQuery(search.value.trim());

  try {
    const response = await searchVideo.fetchVideoSearch(
      searchVideo.getPageIndex()
    );

    formatData(response);
  } catch (error) {
    console.log(error);
  } finally {
    search.value = "";
    console.log(searchVideo.getSearchData());
    console.log(searchVideo.getNextPageIndex());
    console.log(searchVideo.getPrevPageIndex());
    console.log(searchVideo.getCount());
  }
}
