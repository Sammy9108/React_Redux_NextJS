import Header from "./components/Header";
import React from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 900,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration > 0;

  function handleOnChange(inputIdentifier, inputValue) {
    setUserInput((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: +inputValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput Input={userInput} onChange={handleOnChange} />
      {!isInputValid ? (
        <div className="center">Duration is Invalid</div>
      ) : (
        <Results Input={userInput} />
      )}
    </>
  );
}

export default App;
