import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/Modal/ErrorModal";
import "./AddUsers.css";

const AddUsers = (props) => {
  const [userValue, setUserValue] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState(null);

  const userValueHandler = (e) => {
    setUserValue(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userValue.trim().length === 0 || userAge.trim().length === 0) {
      setError(`Invalid Input! You have to provide input`);
      return;
    }

    if (userValue.length < 4 || userValue.length > 50) {
      setError(`Invalid Age! Name length should atleast be (6-50)`);
      return;
    }

    if (isNaN(userAge) || +userAge < 1 || +userAge > 99) {
      setError("Please enter a valid Age (1-99)");
      return;
    }

    const symbolRegex = /^[A-Za-z\s]+$/;
    if (!symbolRegex.test(userValue)) {
      setError(`Invalid Input! Name should not contain numbers.`);
      return;
    }

    const upperCasedValue = userValue
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    props.onAddUser(upperCasedValue, userAge);
    setUserValue("");
    setUserAge("");
  };

  const closeModal = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal content={error} onClose={closeModal} />}
      <Card className="form">
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="name">Name (6-50 Characters)</label>
            <input
              id="name"
              type="text"
              min={6}
              max={50}
              value={userValue}
              onChange={userValueHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={userAge}
              onChange={userAgeHandler}
            />
            <Button onClick={submitHandler}>Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
