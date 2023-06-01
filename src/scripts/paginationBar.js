import { searchVideo } from "./services";

const paginationEl = document.getElementById("pagination");

function renderPaginationBar() {
  const page = searchVideo.getCount() % searchVideo.getPageIndex();
  let markUp = null;

  if (!searchVideo.getSearchData()) return;

  if (page === 1 && searchVideo.getNextPageIndex()) {
    console.log(1);
    markUp = `<div class="pagination-wrapper">
      <button class="next-page-btn pagination-btn">Next</button>
    </div>`;
  }

  if (
    page > 1 &&
    searchVideo.getNextPageIndex() &&
    searchVideo.getPrevPageIndex()
  ) {
    console.log(2);
    markUp = `<div class="pagination-wrapper">
      <button class="prev-page-btn pagination-btn">Prev</button>
      <p class="page">${page}</p>
      <button class="next-page-btn pagination-btn">Next</button>
    </div>`;
  }
  console.log(markUp);
  paginationEl.innerHTML = markUp;
}

export { renderPaginationBar };
