import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const API_KEY = "AIzaSyC6JURxa2KjjTgeOgWyyhspeCO_3o31nUs";
const CX = "93fb8775a0c4043c8";
const SITE_SEARCH = "youtube.com/music";
axios.defaults.baseURL = BASE_URL;
// const SITE_SEARCH_FILTER = "SITE_SEARCH_FILTER_I";

async function searchData(query, index = 1) {
  const data = await axios({
    params: {
      key: API_KEY,
      cx: CX,
      q: query,
      sort: "viewCount",
      siteSearch: SITE_SEARCH,
      //   start: index,

      //   siteSearchFilter: SITE_SEARCH_FILTER,
    },
  });
  console.log(data);
}

export { searchData };
