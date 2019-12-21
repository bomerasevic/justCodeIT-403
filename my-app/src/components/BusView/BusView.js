import React, { Component, Fragment } from "react";
import Navigation from "../StaticPage/Navigation/Navigation";
import MobileNavigation from "../StaticPage/MobileNavigation/MobileNavigation";
import "./BusView.css";
import { MenuItem, TextField } from "@material-ui/core";
class BusView extends Component {
	constructor(props) {
		super(props);
	  }	
	  state = {
		loading: null,
		order: "asc",
		orderBy: "employee",
		selected: [],
		data: [],
        selectedFirstLocation: 1,
        selectedSecondLocation:2,
		inputValue: 100,
		page: 0
	  };  

	  onSelectFirstLocation= location => {
		this.setState({
		  selectedFirstLocation: location
		});
      };
      onSelectSecondLocation= location => {
		this.setState({
		  selectedSecondLocation: location
		});
	  };
	  setValue= value => {
		this.setState({
		  inputValue: value
		});
	  };

	render() {
		return (
			<div className="header2">
				<Navigation />
				<MobileNavigation />
				<h1>
					Pronađi autobus
        </h1>
				<TextField
					style={{
						backgroundColor: "white",
						color: "black",
						width: "200px",
						marginRight: "800px",

						height: "60px"
					}}
					variant="outlined"
					id="grad"
					width="150px"
					select
					label="Odaberi početnu lokaciju"
					value={this.selectedFirstLocation}
					onChange={e => {
						this.onSelectFirstLocation(e.target.value)
					  }}
					color="white"
				>
					<MenuItem key={1} value={1}>
						{"Sarajevo"}
					</MenuItem>
					<MenuItem key={2} value={2}>
						{"Tuzla"}
					</MenuItem>
					<MenuItem key={3} value={3}>
						{"Mostar"}
					</MenuItem>
					<MenuItem key={4} value={4}>
						{"Banja Luka"}
					</MenuItem>
					<MenuItem key={5} value={5}>
						{"Doboj"}
					</MenuItem>
                    <MenuItem key={6} value={6}>
						{"Zenica"}
					</MenuItem>
                    <MenuItem key={7} value={7}>
						{"Bijeljina"}
					</MenuItem>
				</TextField>
                <TextField
					style={{
						backgroundColor: "white",
						color: "black",
						width: "200px",
						height: "60px"
					}}
					variant="outlined"
					id="grad"
					width="120px"
					select
					label="Odaberi početnu lokaciju"
					value={this.selectedSecondLocation}
					onChange={e => {
						this.onSelectSecondLocation(e.target.value)
					  }}
					color="white"
				>
					<MenuItem key={1} value={1}>
						{"Sarajevo"}
					</MenuItem>
					<MenuItem key={2} value={2}>
						{"Tuzla"}
					</MenuItem>
					<MenuItem key={3} value={3}>
						{"Mostar"}
					</MenuItem>
					<MenuItem key={4} value={4}>
						{"Banja Luka"}
					</MenuItem>
					<MenuItem key={5} value={5}>
						{"Doboj"}
					</MenuItem>
                    <MenuItem key={6} value={6}>
						{"Zenica"}
					</MenuItem>
                    <MenuItem key={7} value={7}>
						{"Bijeljina"}
					</MenuItem>
				</TextField>
                

                
				

			</div>
		);
	}
}
export default BusView;
