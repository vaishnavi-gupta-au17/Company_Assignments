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
