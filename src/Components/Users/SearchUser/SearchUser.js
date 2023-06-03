import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./SearchUser.css";

const SearchUser = (props) => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const filteredItems = props.onSearch.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredItems, "filteredItems");

  const submitSearchHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search-form" onSubmit={submitSearchHandler}>
      <label>Search User</label>
      <input type="text" value={search} onChange={searchHandler} />
      <Button>Search</Button>
    </form>
  );
};

export default SearchUser;
