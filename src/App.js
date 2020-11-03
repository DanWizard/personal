import React, { useState } from "react";
import Home from "./containers/home";
import { RowsProvider } from "./context/rowsContext";
import { onetime } from "./components/nums/onetime";
import { monthly } from "./components/nums/monthly";
import { time } from "./components/nums/time";

function App() {
  const [rows, setRows] = useState({
    timeNums: time,
    monthlyNums: monthly,
    onetimeNums: onetime,
  });

  const handleChangeTable = (table, updatedValue) => {
    setRows({
      ...rows,
      [table]: updatedValue,
    });
  };

  const handleChangeCell = (table, row, column, updatedValue) => {
    // debugger;
    setRows({
      ...rows,
      [table]: {
        ...rows[table],
        [row]: [
          ...rows[table][row].slice(0, column),
          updatedValue,
          ...rows[table][row].slice(column + 1),
        ],
      },
    });
  };
  return (
    <RowsProvider
      value={{
        rows,
        updateCell: handleChangeCell,
        updateTable: handleChangeTable,
      }}
    >
      <Home rows={rows} />;
    </RowsProvider>
  );
}

export default App;
