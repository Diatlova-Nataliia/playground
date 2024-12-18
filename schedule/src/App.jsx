import React from "react";
import DateInput from "./DateInput.jsx";

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function firstDayOfMonth(year, month) {
  if (!year || !month) return null;
  return new Date(year, month - 1, 1).getDay();
}

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function createTable(date) {
  const numberOfDays = [];
  const filledTableCellsArray = [];
  let dayCount = 1;

  for (let i = 0; i < months.length; i++) {
    numberOfDays.push(daysInMonth(date.getFullYear(), months[i]));
    for (let index = 0; index < numberOfDays[i]; index++) {
      filledTableCellsArray.push(dayCount + index);
      filledTableCellsArray.slice(0, numberOfDays[i]);
    }
  }

  const firstDayIndex = [];
  for (let i = 0; i < months.length; i++) {
    firstDayIndex.push(firstDayOfMonth(date.getFullYear(), months[i]));
  }

  const emptyCellsJanuary = (firstDayIndex[0] + 6) % 7;
  const emptyCellsArrayJanuary = Array(emptyCellsJanuary).fill(null);
  let tableArray = [...emptyCellsArrayJanuary, ...filledTableCellsArray];
  console.log(filledTableCellsArray);

  let weeksArray = [];
  let daysOfWeek = ["mon", "tue", "wed", "thu", "fr", "sat", "sun"];
  weeksArray.push(daysOfWeek);
  for (let i = 0; i < tableArray[i].length; i++) {
    for (let index = 0; index < tableArray[i].length; index += 7) {
      weeksArray.push(tableArray[i].slice(index, index + 7));
    }
  }

  return weeksArray;
}

function App() {
  const [date, setDate] = React.useState(new Date());
  const [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    if (date) {
      const table = createTable(date);
      setTableData(table);
    }
  }, [date]);

  const renderYearContent = (year) => {
    const tooltipText = `Tooltip for year: ${year}`;
    return <span title={tooltipText}>{year}</span>;
  };

  return (
    <>
      <DateInput
        setDate={setDate}
        tableData={tableData}
        renderYearContent={renderYearContent}
        months={months}
        date={date}
      />
    </>
  );
}
export default App;
