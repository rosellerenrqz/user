import React from "react";
import Card from "../UI/Card/Card";
import "./UserList.css";

const UsersList = (props) => {
  const handleDelete = (id) => {
    props.onDelete(id);
  };

  return (
    <Card className="users invalid">
      <ul>
        {props.users.map((user) => (
          <li key={user.id} onClick={() => handleDelete(user.id)}>
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
