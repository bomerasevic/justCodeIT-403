import React, { Component, Fragment } from "react";
import TableTK from "../Table/Table";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Grid, Button, Container } from "@material-ui/core";
import "./TableView.css";

function TableView(props) {
  const { title, table, handleClickOpen, handleClickDelete, backgroundImage } = props;
  console.log("TABle view props", props);
  return (
    <Fragment>
      <div className="crud-top" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h2>{title}</h2>
      </div>
      <Container fixed maxWidth="xl" className="crud-table mb-3">
        <Grid container justify="center">
          <Grid item xs={12}>
            {/* <TableTK head={this.state.head} rows={this.state.rows}/> */}
            <TableTK
              {...table}
              handleClickOpen={handleClickOpen}
              handleClickDelete={handleClickDelete}
            />
          </Grid>
        </Grid>
      </Container>

      <Fab
        color="primary"
        aria-label="add"
        className="fab-position"
        onClick={() => handleClickOpen(null)}
      >
        <AddIcon />
      </Fab>
    </Fragment>
  );
}
export default TableView;
