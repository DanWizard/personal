import React, { useContext } from "react";
import {
  ContentContainer,
  HeaderContainer,
  Header,
  TableContainer,
} from "./styles";
import MonthlyTable from "../../components/monthly-table";
import OnetimeTable from "../../components/onetime-table";
import TimeTable from "../../components/time-table";
import RowsContext from "../../context/rowsContext";

const Home = () => {
  const { rows, updateRows } = useContext(RowsContext);

  const { monthlyNums, onetimeNums, timeNums } = rows;

  return (
    <ContentContainer>
      <HeaderContainer>
        <Header>Time/Money</Header>
      </HeaderContainer>
      <div style={{ padding: "40px" }}>
        <TableContainer>
          <div style={{ width: "800px" }}>
            <MonthlyTable nums={monthlyNums} />
          </div>
          <div style={{ width: "600px" }}>
            <OnetimeTable nums={onetimeNums} />
          </div>
        </TableContainer>
        <div style={{ width: "800px", marginTop: "80px" }}>
          <TimeTable nums={timeNums} />
        </div>
      </div>
    </ContentContainer>
  );
};

export default Home;
