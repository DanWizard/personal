import React, { useContext } from "react";
import "./styles.css";
import { generateCells, Cell } from "../cell";
import RowsContext from "../../context/rowsContext";
import { monthlyCalc } from "../../services/calculations";

const MonthlyTable = ({ nums }) => {
  const { updateRows } = useContext(RowsContext);

  const { expenseSum, incomeSum, assetsSum } = monthlyCalc(nums, updateRows);

  return (
    <table>
      <tr>
        <table>
          <tr>
            <th colSpan={6}>Monthly</th>
            <th rowSpan={2} colSpan={2}>
              Assets
            </th>
          </tr>
          <tr>
            <th colSpan={3}>Expense</th>
            <th colSpan={3}>Income</th>
          </tr>
          <tr>
            <th className={"red"}>Duration (Months)</th>
            <th className={"red"}>Name</th>
            <th className={"red"}>Price</th>
            <th className={"green"}>Duration (Months)</th>
            <th className={"green"}>Name</th>
            <th className={"green"}>Price</th>
            <th className={"yellow"}>Name</th>
            <th className={"yellow"}>Price</th>
          </tr>
          {generateCells(nums, "monthlyNums").map((e) => e)}
          <tr>
            <th colSpan={3} style={{ height: "30px" }}>
              Total
            </th>
            <th colSpan={3} style={{ height: "30px" }}>
              Total
            </th>
            <th colSpan={3} style={{ height: "30px" }}>
              Total
            </th>
          </tr>
          <tr>
            <Cell
              readOnly
              colSpan={3}
              style={{ height: "30px" }}
              value={expenseSum}
            ></Cell>
            <Cell
              readOnly
              colSpan={3}
              style={{ height: "30px" }}
              value={incomeSum}
            ></Cell>
            <Cell
              readOnly
              colSpan={3}
              style={{ height: "30px" }}
              value={assetsSum}
            ></Cell>
          </tr>
        </table>
      </tr>
    </table>
  );
};

export default MonthlyTable;
