import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox1 from "../checkbox/CheckBox";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 310,
      marginLeft: 20,
      marginTop: 180,
      boxShadow: "2px 2px 10px lightgrey"
    }
  }
}));

export default function Textinput1() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        {" "}
        <TextField
          id="outlined-basic"
          label="Add Task..."
          variant="outlined"
        ></TextField>
      </form>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 20, padding: "10px 25px" }}
        size="large"
      >
        Create
      </Button>
      <Button
        variant="contained"
        size="large"
        style={{ marginLeft: 20, padding: "10px 25px" }}
      >
        Cancel
      </Button>
      <Checkbox1 />
      <MoreHorizIcon style={{ marginLeft: 300, marginTop: -500 }} />
      <span>
        <h4 style={{ marginLeft: 60, marginTop: -55 }}>Task1</h4>
      </span>{" "}
    </div>
  );
}
