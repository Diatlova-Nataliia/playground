import React from "react";
import NumberInput from "../components/NumberInput";
import CalculateButton from "../components/CalculateButton.jsx";

function App() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operation, setOperation] = React.useState("");

  function handleChange(event, setter) {
    setter(event.target.value);
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
      <CalculateButton operation={operation} />
    </>
  );
}

export default App;
