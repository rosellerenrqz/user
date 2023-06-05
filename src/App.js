import React, { useState } from "react";
import AddUsers from "../src/Components/Users/AddUsers";
import SearchUser from "./Components/Users/SearchUser/SearchUser";
const App = () => {
  const [addUser, setAddUser] = useState([]);
  const addUserHandler = (enteredUser, enteredAge) => {
    setAddUser((prevUser) => {
      return [
        { name: enteredUser, age: enteredAge, id: Math.random().toString() },
        ...prevUser,
      ];
    });
  };

  const deleteUserHandler = (userId) => {
    setAddUser((prevUser) => prevUser.filter((user) => user.id !== userId));
  };

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
    <React.Fragment>
      <AddUsers onAddUser={addUserHandler} />
      {addUser.length > 0 ? (
        <SearchUser
          onSearch={addUser}
          onDelete={deleteUserHandler}
          noUsers={noUsers}
        />
      ) : (
        noUsers
      )}
    </React.Fragment>
  );
};

export default App;
