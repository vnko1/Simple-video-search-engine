import { searchVideo } from "./services";

const listEl = document.getElementById("data-list");

function renderSearchResults() {
  const searchData = searchVideo.getSearchData();
  console.log(searchData);
  if (!searchData) return (listEl.innerHTML = renderNullSearchResult());

  const renderData = searchData.reduce((acc, el) => {
    const link = el.displayLink.toLowerCase();
    const isYoutube = link.includes("youtube");
    acc += `<li class="data-item" id="${el.id}">
          <div class="img-wrapper">
            <img
              src="${el.pagemap.thumbnailurl}"
              alt="${el.title}"
              width="132"
              height="74"
              class="img"
            />
            <p class="img-wrapper-duration-text">${
              el.pagemap.duration.minutes
            }:${el.pagemap.duration.seconds}</p>
          </div>
          <div class="content-wrapper">
            <p class="content-text">
             ${el.pagemap.description.limit(40)}
            </p>
            <h2 class="content-title">${el.pagemap.name.limit(30)}</h2>
            <div class="bottom-wrapper">
              <a
                class="bottom-wrapper-link ${isYoutube ? "icon" : ""}"
                href="${el.formattedUrl}"
                target="_blank"
                rel="noreferrer noopener"
                >${el.displayLink}</a
              >
              <p class="bottom-wrapper-text">${
                el.pagemap.interactioncount
              } views</p>
            </div>
          </div>
        </li>`;

    return acc;
  }, "");

  listEl.innerHTML = renderData;
}

function renderNullSearchResult() {
  return `<div ><p class='search-info-text'>Nothing found! Try other search options</p></div>`;
}

export { renderSearchResults };
