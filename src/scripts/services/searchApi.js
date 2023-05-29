import axios from "axios";
// const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const API_KEY = "AIzaSyC6JURxa2KjjTgeOgWyyhspeCO_3o31nUs";
const CX = "93fb8775a0c4043c8";
const SITE_SEARCH = "youtube.com/music";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";
// const SITE_SEARCH_FILTER = "SITE_SEARCH_FILTER_I";
axios.defaults.baseURL = BASE_URL;

async function searchData(query, index = 1) {
  const data = await axios({
    params: {
      key: API_KEY,
      cx: CX,
      q: query,
      start: index,

      siteSearch: SITE_SEARCH,
      // sort: "interactionCount",
    },
  });

  console.log(data);
}

export { searchData };
