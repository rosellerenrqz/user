import React, { useState, useRef } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/Modal/ErrorModal";

import "./AddUsers.css";

const AddUsers = (props) => {
  const [error, setError] = useState(null);

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const eneteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || eneteredAge.trim().length === 0) {
      setError(`Invalid Input! You have to provide input`);
      return;
    }

    if (enteredName.length < 4 || enteredName.length > 50) {
      setError(`Invalid Age! Name length should atleast be (6-50)`);
      return;
    }

    if (isNaN(eneteredAge) || +eneteredAge < 1 || +eneteredAge > 99) {
      setError("Please enter a valid Age (1-99)");
      return;
    }

    const symbolRegex = /^[A-Za-z\s]+$/;
    if (!symbolRegex.test(enteredName)) {
      setError(`Invalid Input! Name should not contain numbers.`);
      return;
    }

    const upperCasedValue = enteredName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    props.onAddUser(upperCasedValue, eneteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const closeModal = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && <ErrorModal content={error} onClose={closeModal} />}
      <Card className="form">
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="name">Name (6-50 Characters)</label>
            <input id="name" type="text" min={6} max={50} ref={nameInputRef} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef} />
            <Button onClick={submitHandler}>Add User</Button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUsers;
