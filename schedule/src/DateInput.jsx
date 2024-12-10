import React from "react";

function DateInput({ handleChange, tableData }) {
  return (
    <>
      <input type="month" onChange={handleChange} />
      <table>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell || ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DateInput;
