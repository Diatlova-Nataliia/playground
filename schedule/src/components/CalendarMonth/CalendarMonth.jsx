import React, { useMemo } from "react";
import "../App/App.scss";
import "./CalendarMonth.scss";

const MONTH_NAMES = [
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

const PASTEL_COLORS = [
  "#e5eeff",
  "#d3fdfa",
  "#E8F5E9",
  "#fde2f5",
  "#ffc7c7",
  "#dbffd1",
  "#dbffd1",
  "#ffbfa3",
  "#fbd789",
  "#ff7a7a",
  "#d4ac8c",
  "#dbfffe",
];

function getDayPerson(date, isFirstDayNatasha) {
  if (!date) return null;
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 6) {
    return "Наташа";
  }
  if (dayOfWeek === 0) {
    return "Андрей";
  }
  const year = date.getFullYear();
  const referenceDate = new Date(year, 0, 1);
  const diffInDays = Math.floor((date - referenceDate) / (1000 * 60 * 60 * 24));

  if (isFirstDayNatasha) {
    return diffInDays % 2 === 0 ? "Наташа" : "Андрей";
  } else {
    return diffInDays % 2 === 0 ? "Андрей" : "Наташа";
  }
}

function createCalendarData(year, month) {
  const DAYS_IN_WEEK = 7;
  const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const totalDaysInMonth = lastDayOfMonth.getDate();

  const getIsoDay = (date) => (date.getDay() === 0 ? 7 : date.getDay());

  const startDayOfWeek = getIsoDay(firstDayOfMonth);
  const table = [];

  table.push(WEEK_DAYS);

  let currentDay = 1;
  let currentWeek = Array(DAYS_IN_WEEK).fill(null);

  for (let i = 0; i < DAYS_IN_WEEK; i++) {
    if (i >= startDayOfWeek - 1) {
      currentWeek[i] = new Date(year, month, currentDay++);
    }
  }
  table.push(currentWeek);

  while (currentDay <= totalDaysInMonth) {
    currentWeek = Array(DAYS_IN_WEEK).fill(null);

    for (let i = 0; i < DAYS_IN_WEEK; i++) {
      if (currentDay <= totalDaysInMonth) {
        currentWeek[i] = new Date(year, month, currentDay++);
      }
    }
    table.push(currentWeek);
  }

  const lastWeek = table[table.length - 1];
  if (lastWeek.includes(null)) {
    table[table.length - 1] = [...lastWeek];
  }

  const firstWeek = table[1];
  for (let i = 0; i < DAYS_IN_WEEK; i++) {
    if (!firstWeek[i]) {
      firstWeek[i] = null;
    }
  }

  return table;
}

function CalendarMonth({ year, month, isFirstDayNatasha, className }) {
  const calendarData = useMemo(
    () => createCalendarData(year, month),
    [year, month],
  );

  const [selectedColor, setSelectedColor] = React.useState(
    PASTEL_COLORS[month],
  );

  return (
    <>
      <div className={`calendar-month ${className}`}>
        <h3 className="calendar-month__month-header">{MONTH_NAMES[month]}</h3>
        <div>
          <label htmlFor="color-select">Выбери цвет для дней недели: </label>
          <input
            type="color"
            id="color-select"
            name="color"
            onChange={(event) => setSelectedColor(event.target.value)}
            value={selectedColor}
          />
        </div>
        <table className="calendar-month__table">
          <tbody>
            {calendarData.map((week, rowIndex) => (
              <tr key={rowIndex}>
                {week.map((date, cellIndex) =>
                  typeof date !== "string" ? (
                    <td className="calendar-month__table-cell" key={cellIndex}>
                      <div>
                        {date?.getDate() || ""}
                        <div>{getDayPerson(date, isFirstDayNatasha)}</div>
                      </div>
                    </td>
                  ) : (
                    <th
                      className="calendar-month__table-cell calendar-month__table-cell_header"
                      key={cellIndex}
                      style={{
                        backgroundColor: selectedColor,
                      }}
                    >
                      {date}
                    </th>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CalendarMonth;
