import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import UsersList from "../UsersList";
import "./SearchUser.css";

const SearchUser = (props) => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  //Filtering users whenever search input change
  const filteredUsers = props.onSearch.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredUsers, "filteredItems");

  const submitSearchHandler = (e) => {
    e.preventDefault();

    setSearch("");
  };
  return (
    <>
      <form className="search-form" onSubmit={submitSearchHandler}>
        <label>Search Users Name</label>
        <input type="text" value={search} onChange={searchHandler} />
        <Button>Search</Button>
      </form>
      <UsersList users={filteredUsers} onDelete={props.onDelete} />
    </>
  );
};

export default SearchUser;
