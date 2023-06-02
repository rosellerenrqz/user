import React, { useState } from "react";
import AddUsers from "../src/Components/Users/AddUsers";
import UserList from "../src/Components/Users/UsersList";

const App = () => {
  const [addUser, setAddUser] = useState([
    // { name: "Roseller Enriquez", age: 23, id: "1" },
  ]);

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

  console.log(addUser);
  const noUsers = (
    <p
      style={{
        textAlign: "center",
        padding: "1rem 0",
        fontSize: "1.5rem",
        backgroundColor: "white",
        opacity: "80%",
        width: "40rem",
        maxWidth: "90%",
        margin: "auto",
        borderRadius: "12px",
        lineHeight: "2rem",
      }}>
      No Users found.
    </p>
  );
  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      {addUser.length > 0 ? (
        <UserList users={addUser} onDelete={deleteUserHandler} />
      ) : (
        noUsers
      )}
    </>
  );
};

export default App;
