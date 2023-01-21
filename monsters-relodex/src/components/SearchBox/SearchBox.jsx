import React from "react";

import "./search-box.styles.css";

class SearchBox extends React.Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <input
        type="search"
        className="search-box"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchBox;
