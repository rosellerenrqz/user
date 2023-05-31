import React, { useState } from "react";
import AddUsers from "../src/Components/Users/AddUsers";
import UserList from "../src/Components/Users/UsersList";
import Card from "../src/Components/UI/Card";

import "./App.css";

const App = () => {
  const [addUser, setAddUser] = useState([{ text: "Roseller", age: 23 }]);

  const addUserHandler = (enteredUser, enteredAge) => {
    setAddUser((prevUser) => {
      const updatedUser = [...prevUser];
      updatedUser.unshift({
        text: enteredUser,
        age: enteredAge,
        id: Math.random().toString(),
      });
      return updatedUser;
    });
  };

  const deleteUserHandler = (userId) => {
    setAddUser(addUser.filter((user) => user.id !== userId));
  };

  console.log(addUser);

  return (
    <>
      <Card className="form">
        <AddUsers onAddUser={addUserHandler} />
      </Card>

      <Card className="user-list">
        <UserList onDeleteUser={deleteUserHandler} />
      </Card>
    </>
  );
};

export default App;
