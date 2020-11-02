import React, { useContext } from "react";
import "./styles.css";
import { generateCells } from "../cell";
import RowsContext from "../../context/rowsContext";

const TimeTable = ({ nums }) => {
  const { rows, updateRows } = useContext(RowsContext);
  return (
    <table>
      <tr>
        <table>
          <tr>
            <th colSpan={7}>Time</th>
          </tr>
          <tr>
            <th>Seconds</th>
            <th>Minutes</th>
            <th>Hours</th>
            <th>Days</th>
            <th>Weeks</th>
            <th>Months</th>
            <th>Years</th>
          </tr>
          {generateCells(nums).map((e) => e)}
        </table>
      </tr>
    </table>
  );
};

export default TimeTable;
