import React, { useState } from "react";
import AddUsers from "../src/Components/Users/AddUsers";
import UserList from "../src/Components/Users/UsersList";

const App = () => {
  const [addUser, setAddUser] = useState([
    // { name: "Roseller", age: 23, id: "1" },
  ]);

  const addUserHandler = (enteredUser, enteredAge) => {
    setAddUser((prevUser) => {
      return [
        ...prevUser,
        { name: enteredUser, age: enteredAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteUserHandler = (userId) => {
    setAddUser((prevUser) => prevUser.filter((user) => user.id !== userId));
  };

  console.log(addUser);

  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={addUser} onDelete={deleteUserHandler} />
    </>
  );
};

export default App;
