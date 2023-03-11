import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModel from "./ErrorModel";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInput = useRef();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    const college = collegeInput.current.value;

    if (
      name.trim().length === 0 ||
      age.trim().length === 0 ||
      college.trim().length === 0
    ) {
      setError({
        title: "Invalid Inputs",
        message: "Please enter a valid Name and Age and College",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid Age ( > 0)",
      });
      return;
    }
    props.onAddUsers(name, age, college);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInput.current.value = "";
  };

  const errorhandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModel
          confirm={errorhandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            placeholder="Add User Name"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            placeholder="Add User Age"
            ref={ageInputRef}
          />
          <label htmlFor="age">Add College</label>
          <input
            type="text"
            id="age"
            placeholder="Add User College"
            ref={collegeInput}
          />
          <Button type={"submit"} handleSubmit={handleSubmit}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
