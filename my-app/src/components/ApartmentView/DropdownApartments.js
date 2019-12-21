import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import classNames from "classnames";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});
let counter = 0;
function createData(name) {
  counter += 1;
  return {
    id: counter,
    name
  };
}

class DropDownMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelWidth: 0,
      selectedMonth: null
    };
    this.onClickDrop = this.onClickDrop.bind(this);
  }

  componentDidMount() { }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onClickDrop = name => event => {
    var value = event.target.value;

    this.setState({
      selectedMonth: value
    });
    this.props.onClickDrop(value);
    console.log(this.state.selectedMonth);
  };

  render() {
    const { classes } = this.props;
    let teams = this.state.teams;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Month</InputLabel>
          <Select
            name="selectOptions"
            onChange={this.onClickDrop("selectOptions")}
            inputProps={{
              name: "age",
              id: "age-simple"
            }}
          >
            <MenuItem key={1} value={1}>
              {"Stari Grad"}
            </MenuItem>
            <MenuItem key={2} value={2}>
              {"Centar"}
            </MenuItem>
            <MenuItem key={3} value={3}>
              {"Novo Sarajevo"}
            </MenuItem>
            <MenuItem key={4} value={4}>
              {"Novi Grad"}
            </MenuItem>
            <MenuItem key={5} value={5}>
              {"Ilidža"}
            </MenuItem>            
          </Select>
        </FormControl>
      </form>
    );
  }
}

DropDownMonth.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(DropDownMonth);