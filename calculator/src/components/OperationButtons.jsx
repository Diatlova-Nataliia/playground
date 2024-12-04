import React from "react";

function OperationButtons({ setOperation }) {
  return (
    <>
      <button onClick={() => setOperation("+")}>+</button>
      <button onClick={() => setOperation("-")}>-</button>
      <br />
      <button onClick={() => setOperation("*")}>*</button>
      <button onClick={() => setOperation("/")}>/</button>
    </>
  );
}

export default OperationButtons;
