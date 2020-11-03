import React, { useContext } from "react";
import { StyledInput } from "./styles";
import RowsContext from "../../context/rowsContext";

// && value !== "∞"

export const Cell = ({
  colSpan,
  style,
  readOnly,
  numberOnly,
  value,
  table,
  row,
  column,
}) => {
  const { updateCell } = useContext(RowsContext);

  return (
    <td colSpan={colSpan} style={{ background: "#efefef", ...style }}>
      <div style={{ width: "100%", height: "30px" }}>
        <StyledInput
          onChange={(e, v) => {
            // debugger;
            updateCell(table, row, column, e.target.value);
          }}
          value={value}
          type={numberOnly && "number"}
          min={1}
          readOnly={readOnly}
          r={readOnly}
        />
      </div>
    </td>
  );
};

const readOnly = (cells, index) => {
  const i = index + 1;
  const map = {
    7: "time",
    8: "monthly",
    4: "onetime",
  };

  const monthlyMap = [3, 6, 8];
  const onetimeMap = [2, 4];

  const len = cells["a"].length;

  if (map[len] === "time") {
    return true;
  }

  // if (
  //   (map[len] === "monthly" && monthlyMap.includes(i)) ||
  //   (map[len] === "onetime" && onetimeMap.includes(i))
  // ) {
  //   return true;
  // }

  return false;
};

export const generateCells = (cells, table) => {
  let arr = [];
  let col = [];

  Object.entries(cells).forEach(([key, value]) => {
    value.forEach((n, i) => {
      col.push(
        <Cell
          table={table}
          row={key}
          column={i}
          readOnly={readOnly(cells, i)}
          numberOnly={Number.isInteger(n)}
          value={n}
        />
      );
    });
    const row = <tr style={{ height: "30px" }}>{col.map((e) => e)}</tr>;
    arr.push(row);
    col = [];
  });

  return arr;
};
