import React from "react";

function Form() {
  const [inputData, setInputData] = React.useState({
    firstName: "",
    lastName: "",
    typeOfPerson: "",
  });

  function inputHandler(event) {
    setInputData((value) => {
      return {
        ...value,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <form className="form">
        <h1> Sign Up </h1>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Type of Person"
          name="typeOfPerson"
          onChange={inputHandler}
        />
        <button className=" form-button">Send</button>
      </form>
    </div>
  );
}

export default Form;
