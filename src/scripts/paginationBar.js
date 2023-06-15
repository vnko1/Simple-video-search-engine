import { searchVideo, fetchSearch } from './services';

const paginationEl = document.getElementById('pagination');

function onHandleClick(e) {
  if (e.target.name === 'nextPage') {
    fetchSearch(searchVideo.getNextPageIndex());
  }

  if (e.target.name === 'prevPage') {
    fetchSearch(searchVideo.getPrevPageIndex());
  }
}

function renderPaginationBar() {
  paginationEl.removeEventListener('click', onHandleClick);
  const page = Math.floor(searchVideo.getPageIndex() / searchVideo.getCount());
  let markUp = null;

  if (!searchVideo.getSearchData()) return (paginationEl.innerHTML = '');

  if (page === 0 && searchVideo.getNextPageIndex()) {
    markUp = `<div class="pagination-wrapper" style="justify-content: center">
      <button class="next-page-btn pagination-btn" name="nextPage">Next</button>
    </div>`;
  }

  if (page > 0) {
    markUp = `<div class="pagination-wrapper" style="justify-content: space-between">
      <button class="prev-page-btn pagination-btn" name="prevPage">Prev</button>
      <p class="page">${page + 1}</p>
      <button class="next-page-btn pagination-btn" name="nextPage">Next</button>
    </div>`;
  }
  paginationEl.innerHTML = markUp;
  paginationEl.addEventListener('click', onHandleClick);
}

export { renderPaginationBar };
