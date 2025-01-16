import React from "react";
import "../App/App.scss";
import CalendarMonth from "../CalendarMonth/CalendarMonth.jsx";

import "./CalendarYear.scss";

const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function CalendarYear({ year, isFirstDayNatasha }) {
  return (
    <>
      {MONTHS.map((month) => (
        <CalendarMonth
          className="calendar-year__month"
          key={`${year}-${month}`}
          year={year}
          month={month}
          isFirstDayNatasha={isFirstDayNatasha}
        />
      ))}
    </>
  );
}

export default CalendarYear;
