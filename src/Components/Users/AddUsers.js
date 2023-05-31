import React, { useState } from "react";
// import Card from "../UI/Card";
import "./AddUsers.css";

const AddUsers = (props) => {
  const [userValue, setUserValue] = useState("");
  const [userAge, setUserAge] = useState("");

  const userValueHandler = (e) => {
    setUserValue(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onAddUser(userValue, userAge);
    setUserValue("");
    setUserAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Username</label>
        <input type="text" value={userValue} onChange={userValueHandler} />
        <label>Age (Years)</label>
        <input
          type="number"
          step={1}
          min={1}
          max={99}
          value={userAge}
          onChange={userAgeHandler}
        />
        <button>Add User</button>
      </div>
    </form>
  );
};

export default AddUsers;
