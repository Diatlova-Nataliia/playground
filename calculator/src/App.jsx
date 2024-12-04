import React from "react";
import NumberInput from "./components/NumberInput.jsx";
import OperationButtons from "./components/OperationButtons.jsx";
import Result from "./components/Result.jsx";
import Error from "./components/Error.jsx";

function App() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(event, setter) {
    setter(Number(event.target.value));
  }

  function showError() {
    if (num1 === "" || num2 === "") {
      setError("fill");
      return;
    }
    if (operation === "/" || Number(num2) === 0) {
      setError("can't");
    }
  }

  function calculateNumbers() {
    if (operation === "+") {
      return num1 + num2;
    }
    if (operation === "-") {
      return num1 - num2;
    }
    if (operation === "*") {
      return num1 * num2;
    }
    if (operation === "/") {
      return num1 / num2;
    }
  }

  function showResult() {
    showError();
    !error && setResult(calculateNumbers());
  }

  return (
    <>
      <NumberInput
        num1={num1}
        num2={num2}
        setNum1={setNum1}
        setNum2={setNum2}
        handleChange={handleChange}
      />
      <br />
      <OperationButtons setOperation={setOperation} />
      <br />
      <Result result={result} showResult={showResult} />
      <Error error={error} showError={showError} setError={setError} />
    </>
  );
}

export default App;
