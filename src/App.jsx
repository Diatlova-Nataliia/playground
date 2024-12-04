import React from "react";
import DateInput from "../components/DateInput.jsx";

function App() {
  const users = [
    { id: 1, name: "Наташа" },
    { id: 2, name: "Андрей" },
  ];

  return (
    <>
      <DateInput />
    </>
  );
}
export default App;
