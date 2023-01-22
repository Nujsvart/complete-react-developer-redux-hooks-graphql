import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ onSearchChange }) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder="search monsters"
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
