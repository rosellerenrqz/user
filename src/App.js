import React, { useState } from "react";
import AddUsers from "../src/Components/Users/AddUsers";
import UserList from "../src/Components/Users/UsersList";

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
      <AddUsers onAddUser={addUserHandler} />
      <UserList onDeleteUser={deleteUserHandler} />
    </>
  );
};

export default App;
