import React from "react";

function Form() {
  const [confirmPanel, setconfirmPanel] = React.useState(false);
  const [inputData, setInputData] = React.useState({
    firstName: "",
    lastName: "",
    typeOfPerson: "",
  });

  function activateConfirmPanel() {
    setconfirmPanel(true);
  }

  function inputHandler(event) {
    setInputData((value) => {
      return {
        ...value,
        [event.target.name]: event.target.value,
      };
    });
  }
  if (confirmPanel === false) {
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

          <button onClick={activateConfirmPanel} className=" form-button">
            Send
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Thank you for signing up.</h2>
        <h3>We will get back to you soon.</h3>
        <p>Your First Name: {inputData.firstName}</p>
        <p>Your Last Name: {inputData.lastName}</p>
        <p>Your Typ of Person: {inputData.typeOfPerson}</p>
      </div>
    );
  }
}

export default Form;
