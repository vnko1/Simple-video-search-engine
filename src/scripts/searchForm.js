import { renderSearchBar } from './searchBar';
import { searchVideo } from './services';
import { fetchSearch } from '/src/scripts/services';

document
  .getElementById('searchForm')
  .addEventListener('submit', onHandleSubmit);

async function onHandleSubmit(e) {
  e.preventDefault();
  const { search } = e.currentTarget.elements;

  searchVideo.setQuery(search.value.trim());
  const page = searchVideo.getPageIndex();
  await fetchSearch(page);
  renderSearchBar();
  search.value = '';
}
