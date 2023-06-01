import { searchVideo, formatData } from "./services";
import { renderSearchResults } from "./dataList";
import { renderPaginationBar } from "./paginationBar";

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
    renderSearchResults();
    renderPaginationBar();
  } catch (error) {
    console.log(error);
  } finally {
    // search.value = "";
  }
}
