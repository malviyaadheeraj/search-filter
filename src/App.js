import React from "react";
import Pagination from "./components/pagination/Pagination";
import SearchLoadMore from "./components/SearchLoadMore/SearchLoadMore";
import SearchFilter from "./components/searchFilter/SearchFilter";

const App = () => {
  return (
    <div>
      <SearchFilter />
      <SearchLoadMore />
      <Pagination />
    </div>
  );
};

export default App;
