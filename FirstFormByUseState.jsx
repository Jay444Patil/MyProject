import React, { useState } from "react";

const FirstForm = () => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const uNameChange = (event) => {
    setUserName(event.target.value);
  };

  const lNameChange = (event) => {
    setLastName(event.target.value);
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Name:", userName);
    console.log("Last Name:", lastName);
    console.log("email:", email);
  };

  return (
    <div>
      <h1>Enter The detail in the Form</h1>
      <form onSubmit={submitForm}>
        <div>
          <label> First Name: </label>
          <input type="text" value={userName} onChange={uNameChange} />
        </div>
        <div>
          <label> Last Name: </label>
          <input type="text" value={lastName} onChange={lNameChange} />
        </div>
        <div>
          <label> Email: </label>
          <input type="text" value={email} onChange={emailChange} />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default FirstForm;
