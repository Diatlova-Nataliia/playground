import React from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({ renderYearContent, tableData, date, setDate, months }) {
  const [isFirstDayNatasha, setIsFirstDayNatasha] = React.useState(true);
  const [selectedColor, setSelectedColor] = React.useState("");

  const monthsNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  function handleColorChange(event) {
    setSelectedColor(event.target.value);
  }

  function getPersonDay(dayOfMonth, dayOfWeek) {
    if (!dayOfMonth) return null;
    if (dayOfWeek === 6) {
      return "Наташа";
    }
    if (dayOfWeek === 7) {
      return "Андрей";
    }
    if (isFirstDayNatasha) {
      return dayOfMonth % 2 === 0 ? "Андрей" : "Наташа";
    }

    return dayOfMonth % 2 === 0 ? "Наташа" : "Андрей";
  }

  return (
    <>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        renderYearContent={renderYearContent}
        showYearPicker
        dateFormat="yyyy"
      />
      <br />
      <label htmlFor="user-select">Первого числа Наташа: </label>
      <input
        type="checkbox"
        checked={isFirstDayNatasha}
        onChange={(event) => setIsFirstDayNatasha(event.target.checked)}
      />
      <br />
      <label htmlFor="color-select">Выбери цвет для дней недели: </label>
      <input
        type="color"
        id="color-select"
        name="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      {months.map((month) => (
        <h2 key={month}>{monthsNames[month - 1]}</h2>
      ))}
      <table>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) =>
                typeof cell !== "string" ? (
                  <td key={cellIndex}>
                    <div>
                      {cell || ""}
                      <div>{getPersonDay(cell, cellIndex + 1)}</div>
                    </div>
                  </td>
                ) : (
                  <th
                    key={cellIndex}
                    style={{ backgroundColor: selectedColor }}
                  >
                    {cell}
                  </th>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DateInput;
