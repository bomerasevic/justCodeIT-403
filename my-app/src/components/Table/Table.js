import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./Table.css";

function TableTK(props) {
  const { head, rows, actions, handleClickOpen, handleClickDelete } = props;
  console.log("table.js", props);
  return (
    <Paper elevation={3}>
      <Table className="table-tk">
        <TableHead>
          <TableRow className="table-tk-row-dark">
            {head.map((cell, i) => (
              <TableCell key={i}>{cell}</TableCell>
            ))}
            {actions && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              {Object.keys(row).map((cell, i) => {
                return <TableCell key={i}>{row[cell]}</TableCell>;
              })}
              {actions && (
                <TableCell>
                  <Button onClick={() => handleClickOpen(row.id)} title="Edit">
                    <i className="far fa-edit"></i>
                  </Button>
                  <Button
                    onClick={() => handleClickDelete(row.id)}
                    color="secondary"
                    title="Delete"
                  >
                    <i className="fas fa-ban"></i>
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default TableTK;
