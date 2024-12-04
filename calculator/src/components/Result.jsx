import React from "react";

function Result({ result, showResult }) {
  return (
    <>
      <button onClick={() => showResult()}>Calculate</button>
      <p>{result}</p>
    </>
  );
}

export default Result;
