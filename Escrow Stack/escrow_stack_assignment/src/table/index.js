import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AccountData from "../companyAccount/AccountData";

const TableData = ({ selectedAccount }) => {
  // function createData(date, credit, Ac_Balance, utr_rrn, ac_upi) {

  //   return { date, credit, Ac_Balance, utr_rrn, ac_upi };
  // }

  // const rows = [
  //   createData(
  //     "07/05/2024 01:04 PM",
  //     "$21,337",
  //     "$21,337",
  //     "$21,337",
  //     "AC0CF7RRUY407QHU"
  //   ),
  //   createData(
  //     "04/05/2024 12:38 PM",
  //     "$21,337",
  //     "$21,337",
  //     "CMS4136431811",
  //     "AC0CF7RRUY407QHU"
  //   ),
  //   createData(
  //     "28/03/2024 05:09 PM",
  //     "$21,337",
  //     "$21,337",
  //     "CMS4136431811",
  //     "0104SLNEFTPL"
  //   ),
  //   createData(
  //     "28/05/2024 05:09 PM",
  //     "$5,015.69",
  //     "$5,015.69",
  //     "CMS3956431731",
  //     "ACT861VM9RR67Z5C"
  //   ),
  //   createData(
  //     "19/03/2024 11:33 PM",
  //     "$5,015.69",
  //     "$5,015.69",
  //     "CMS3956431984",
  //     "AC0CF7RRUY407QHU"
  //   ),
  //   createData(
  //     "19/03/2024 11:33 PM",
  //     "$16,000",
  //     "$16,000",
  //     "CMS3956464916",
  //     "ACT861VM9RR67Z5C"
  //   ),
  // ];
  const rows = AccountData[selectedAccount];
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Credit</TableCell>
                <TableCell align="center">A/C Balance</TableCell>
                <TableCell align="center">UTR/RRN</TableCell>
                <TableCell align="center">A/c No/UPI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.date}
                  </TableCell>
                  <TableCell align="center">{row.credit}</TableCell>
                  <TableCell align="center">{row.ac_Balance}</TableCell>
                  <TableCell align="center">{row.utr_rrn}</TableCell>
                  <TableCell align="center">{row.ac_upi}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default TableData;
