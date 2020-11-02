import React from "react";
import "./styles.css";
import { generateCells, Cell } from "../cell";
import { onetimeCalc } from "../../services/calculations";

const OnetimeTable = ({ nums }) => {
  const { expenseSum, incomeSum } = onetimeCalc(nums);

  return (
    <table>
      <tr>
        <table>
          <tr>
            <th colSpan={4}>One Time</th>
          </tr>
          <tr>
            <th colSpan={2}>Expense</th>
            <th colSpan={2}>Income</th>
          </tr>
          <tr>
            <th className={"red"}>Name</th>
            <th className={"red"}>Price</th>
            <th className={"green"}>Name</th>
            <th className={"green"}>Price</th>
          </tr>
          {generateCells(nums, "onetimeNums").map((e) => e)}
          <tr>
            <th colSpan={2} style={{ height: "30px" }}>
              Total
            </th>
            <th colSpan={2} style={{ height: "30px" }}>
              Total
            </th>
          </tr>
          <tr>
            <Cell
              readOnly
              colSpan={2}
              style={{ height: "30px" }}
              value={expenseSum}
            ></Cell>
            <Cell
              readOnly
              colSpan={2}
              style={{ height: "30px" }}
              value={incomeSum}
            ></Cell>
          </tr>
        </table>
      </tr>
    </table>
  );
};

export default OnetimeTable;
