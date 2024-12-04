import React from "react";

function NumberInput({ num1, num2, setNum1, setNum2, handleChange }) {
  return (
    <>
      <input
        type="number"
        value={num1}
        onChange={(e) => handleChange(e, setNum1)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => handleChange(e, setNum2)}
      />
    </>
  );
}

export default NumberInput;
