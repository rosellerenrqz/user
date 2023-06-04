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

  const noUsers = (
    <p
      style={{
        textAlign: "center",
        padding: "1rem",
        fontSize: "1.5rem",
        backgroundColor: "white",
        opacity: "80%",
        width: "40rem",
        maxWidth: "90%",
        margin: "auto",
        borderRadius: "12px",
        lineHeight: "2rem",
      }}>
      No Users Found.
    </p>
  );

  return (
    <>
      <form className="search-form">
        <label>Search Users Name</label>
        <input type="text" value={search} onChange={searchHandler} />
      </form>
      {filteredUsers.length > 0 ? (
        <UsersList users={filteredUsers} onDelete={props.onDelete} />
      ) : (
        noUsers
      )}
    </>
  );
};

export default SearchUser;
