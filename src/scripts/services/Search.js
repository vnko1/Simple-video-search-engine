import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";
axios.defaults.baseURL = BASE_URL;

class Search {
  static fetchParams = {
    API_KEY: "AIzaSyB4K1-z8_pALYP57RqTGdfqADuK2WnSKxw",
    CX: "4532397386d1443d2",
    SITE_SEARCH: "youtube.com/watch",
  };

  constructor() {
    this.query = null;
    this.searchData = [];
    this.pageIndex = 1;
    this.prevPageIndex = null;
    this.nextPageIndex = null;
    this.count = 0;
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

  getCount() {
    return this.count;
  }

  setCount(newCount) {
    this.count = newCount;
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
