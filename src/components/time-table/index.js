import React, { useContext } from "react";
import "./styles.css";
import { generateCells } from "../cell";
import RowsContext from "../../context/rowsContext";
import { onetimeCalc, monthlyCalc } from "../../services/calculations";

const TimeTable = ({ nums }) => {
  const { rows, updateRows } = useContext(RowsContext);

  const dilute = (set) => {
    let sum = 0;
    Object.entries(set).forEach(([key, value]) => {
      if (value.months && value.price) {
        sum += value.months * value.price;
      }
    });
    return sum;
  };

  const doMath = () => {
    let fixedAssets = 0;
    let fixedExpense = 0;
    let monthlyIncome = 0;
    let monthlyExpense = 0;
    let monthsCount = 0;
    let monthlyIncomeDiluted = 0;
    let monthlyExpenseDiluted = 0;

    const ot = onetimeCalc(rows.onetimeNums);

    fixedAssets += ot.incomeSum;
    fixedExpense += ot.expenseSum;

    const m = monthlyCalc(rows.monthlyNums);

    fixedAssets += m.assetsSum;
    monthlyIncome += m.incomeSum;
    monthlyExpense += m.expenseSum;

    monthlyExpenseDiluted = dilute(m.durationSet.expense);
    monthlyIncomeDiluted = dilute(m.durationSet.income);
    debugger;
  };

  doMath();
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
