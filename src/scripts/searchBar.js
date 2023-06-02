import { searchVideo } from './services';

const searchBarEl = document.getElementById('searchBar');

function renderSearchBar() {
  // searchBarEl.removeEventListener('click', onSearchBtnClick);
  const query = searchVideo.getQuery();
  searchBarEl.innerHTML = ``;

  // searchBarEl.addEventListener('click', onSearchBtnClick);
}

async function onSearchBtnClick() {
  const response = await searchVideo.fetchSearch();
  console.log(response);
}

export { renderSearchBar };

// `<div class="searchBar-wrapper">
//       <button type="click" class="searchBar-btn">
//         <p class="searchBar-text-wrapper">
//           <span class="searchBar-text"
//             >Search<span class="searchBar-text-accent" > ${query} </span> on
//             Google</span
//           >
//         </p>
//       </button>
//     </div>`;
