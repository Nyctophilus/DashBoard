import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import classes from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={classes["search-bar"]}>
      <SearchIcon />
      <input type="text" />
    </div>
  );
};

export default SearchBar;
