import React, { useState } from "react";
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

  return (
    <React.Fragment>
      <form className="search-form">
        <label>Search Users Name</label>
        <input type="text" value={search} onChange={searchHandler} />
      </form>
      {filteredUsers.length > 0 ? (
        <UsersList users={filteredUsers} onDelete={props.onDelete} />
      ) : (
        props.noUsers
      )}
    </React.Fragment>
  );
};

export default SearchUser;
