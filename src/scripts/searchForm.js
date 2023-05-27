import { searchData } from "./services/searchApi";

document
  .getElementById("searchForm")
  .addEventListener("submit", onHandleSubmit);

async function onHandleSubmit(e) {
  e.preventDefault();
  const { search } = e.currentTarget.elements;
  console.log(search.value);
  searchData(search.value);
}
