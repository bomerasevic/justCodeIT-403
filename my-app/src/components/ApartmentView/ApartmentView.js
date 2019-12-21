import React, { Component, Fragment } from "react";
import Navigation from "../StaticPage/Navigation/Navigation";
import MobileNavigation from "../StaticPage/MobileNavigation/MobileNavigation";
import "./ApartmentView.css";

import { MenuItem, TextField } from "@material-ui/core";
import DropDownApartments from "./DropdownApartments";
import color from "@material-ui/core/colors/amber";
class EmployeesView extends Component {
	constructor(props) {
		super(props);

	  }
	
	  state = {
		loading: null,
		order: "asc",
		orderBy: "employee",
		selected: [],
		data: [],
		selectedLocation: 1,
		inputValue: 100,
		page: 0
	  };  

	  onSelectLocation= location => {
		this.setState({
		  selectedLocation: location
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
					Pronađi stan
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
					width="100px"
					select
					label="Odaberi lokaciju"
					value={this.selectedLocation}
					onChange={e => {
						this.onSelectLocation(e.target.value)
					  }}
					color="white"
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
				</TextField>
				<TextField style={{
					backgroundColor: "white",
					color: "black",
					width: "200px"
				}}
				onChange={this.setValue} 
					id="standard-basic" label="Cijena (KM)" />

			</div>
		);
	}
}
export default EmployeesView;
