import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
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

    const symbolRegex = /^[A-Za-z][A-Za-z]*$/;
    if (!symbolRegex.test(userValue)) {
      console.log("Error: User input should not contain symbols and a number.");
      return;
    }

    if (userValue.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }

    const upperCasedValue = userValue
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    console.log(upperCasedValue);

    props.onAddUser(upperCasedValue, userAge);
    setUserValue("");
    setUserAge("");
  };

  return (
    <Card className="form">
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userValue}
            onChange={userValueHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            step={1}
            min={1}
            max={99}
            value={userAge}
            onChange={userAgeHandler}
          />
          <Button>Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUsers;
