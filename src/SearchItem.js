import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="searchForm">
      <label htmlFor="text">search</label>
      <input
        type="text"
        role="searchForm"
        placeholder="Search item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
