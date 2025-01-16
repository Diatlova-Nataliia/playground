import React, { useCallback } from "react";
import CalendarYear from "../CalendarYear/CalendarYear.jsx";
import DatePicker from "react-datepicker";

function App() {
  const [date, setDate] = React.useState(new Date());
  const [isFirstDayNatasha, setIsFirstDayNatasha] = React.useState(true);
  const year = date.getFullYear();
  const handleDateChange = useCallback((date) => setDate(date), []);

  return (
    <>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        showYearPicker
        dateFormat="yyyy"
      />
      <label htmlFor="isFirstDayNatasha">Первого числа Наташа: </label>
      <input
        name="isFirstDayNatasha"
        type="checkbox"
        checked={isFirstDayNatasha}
        onChange={(event) => setIsFirstDayNatasha(event.target.checked)}
      />

      <CalendarYear year={year} isFirstDayNatasha={isFirstDayNatasha} />
    </>
  );
}
export default App;
