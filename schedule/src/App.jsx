import React from "react";
import DateInput from "./DateInput.jsx";

function App() {
  const users = ["Наташа", "Андрей"];

  const [date, setDate] = React.useState({ year: "", month: "" });

  const [tableData, setTableData] = React.useState([]);

  function handleChange(event) {
    const [year, month] = event.target.value.split("-");
    setDate((prevDate) => ({
      ...prevDate,
      year,
      month,
    }));
    const table = createTable(year, month);
    setTableData(table);
  }

  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function firstDayOfMonth(year, month) {
    if (!year || !month) return null;
    return new Date(year, month - 1, 1).getDay();
  }

  function createTable() {
    const numberOfDays = daysInMonth(date.year, date.month);
    const firstDayIndex = firstDayOfMonth(date.year, date.month);
    const emptyCells = (firstDayIndex + 6) % 7;
    const emptyCellsArray = Array(emptyCells).fill(null);
    let filledTableCellsArray = [];
    let dayCount = 1;
    for (let i = 0; i < numberOfDays; i++) {
      filledTableCellsArray.push(dayCount + i);
    }
    let tableArray = [...emptyCellsArray, ...filledTableCellsArray];
    let daysOfWeek = ["mon", "tue", "wed", "thu", "fr", "sat", "sun"];
    let weeksArray = [];
    weeksArray.push(daysOfWeek);
    for (let i = 0; i < tableArray.length; i += 7) {
      weeksArray.push(tableArray.slice(i, i + 7));
    }
    return weeksArray;
  }

  return (
    <>
      <DateInput handleChange={handleChange} tableData={tableData} />
    </>
  );
}
export default App;
