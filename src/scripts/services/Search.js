import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";
axios.defaults.baseURL = BASE_URL;

class Search {
  static fetchParams = {
    API_KEY: "AIzaSyC6JURxa2KjjTgeOgWyyhspeCO_3o31nUs",
    CX: "93fb8775a0c4043c8",
    SITE_SEARCH: "youtube.com/watch",
  };

  constructor() {
    this.query = null;
    this.searchData = [];
    this.pageIndex = 1;
    this.prevPageIndex = null;
    this.nextPageIndex = null;
  }

  getQuery() {
    return this.query;
  }

  setQuery(newQuery) {
    this.query = newQuery;
  }

  getSearchData() {
    return this.searchData;
  }

  setSearchData(newSearchData) {
    this.searchData = newSearchData;
  }

  getPageIndex() {
    return this.pageIndex;
  }

  setPageIndex(newPageIndex) {
    this.pageIndex = newPageIndex;
  }

  getPrevPageIndex() {
    return this.prevPageIndex;
  }

  setPrevPageIndex(newPrevPageIndex) {
    this.prevPageIndex = newPrevPageIndex;
  }

  getNextPageIndex() {
    return this.nextPageIndex;
  }

  setNextPageIndex(newNextPageIndex) {
    this.nextPageIndex = newNextPageIndex;
  }

  async fetchVideoSearch(pageIndex) {
    const { data } = await axios({
      params: {
        key: Search.fetchParams.API_KEY,
        cx: Search.fetchParams.CX,
        siteSearch: Search.fetchParams.SITE_SEARCH,
        q: this.getQuery(),
        orTerms: "music",
        start: pageIndex,
        sort: "videoobject-interactioncount",
      },
    });

    return data;
  }

  async fetchSearch(pageIndex) {
    const { data } = await axios({
      params: {
        key: Search.fetchParams.API_KEY,
        cx: Search.fetchParams.CX,
        q: this.getQuery(),
        orTerms: "music",
        start: pageIndex,
      },
    });
    return data;
  }
}

export const searchVideo = new Search();
