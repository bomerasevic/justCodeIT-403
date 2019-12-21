import React, { Component, Fragment } from "react";
import Navigation from "../StaticPage/Navigation/Navigation";
import MobileNavigation from "../StaticPage/MobileNavigation/MobileNavigation";
import "./BusView.css";
import { MenuItem, TextField } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
let counter = 0;
function createData(
	FromLocation,
	ToLocation,
	TimeOfDeparture,
	TimeOfArrival,
	Distance,
	Price,
	Company
) {
	counter += 1;
	return {
		id: counter,
		FromLocation,
		ToLocation,
		TimeOfDeparture,
		TimeOfArrival,
		Distance,
		Price,
		Company
	};
}

const rows = [
	{ id: "FromLocation", label: "Od" },
	{ id: "ToLocation", label: "Do" },
	{ id: "TimeOfDeparture", label: "Vrijeme polaska" },
	{ id: "TimeOfArrival", label: "Vrijeme dolaska" },
	{ id: "Distance", label: "Udaljenost" },
	{ id: "Price", label: "Cijena" },
	{ id: "Company", label: "Prevoznik" }
];
class ApartmentView extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		selected: [],
		data: [],
		selectedFirstLocation: null,
		selectedSecondLocation: null,
		page: 0
	};

	onSelectFirstLocation = location => {
		this.setState({
			selectedFirstLocation: location
		});
	};
	onSelectSecondLocation = location => {
		this.setState({
			selectedSecondLocation: location
		});
	};
	componentDidMount() {
		/*     this.setState({ loading: true });
		 */

		if (
			this.state.selectedFirstLocation == null &&
			this.state.selectedSecondLocation == null
		) {

			axios("http://localhost:9000/api/transport/")
				.then(res => {
					let fetchedData = res.data.map(r =>
						createData(
							r.FromLocation,
							r.ToLocation,
							r.TimeOfDeparture,
							r.TimeOfArrival,
							r.Distance,
							r.Price,
							r.Company
						)
					);
					this.setState({ data: fetchedData });
					console.log(this.state.data);
				})
				.catch(err => this.setState({ loading: false }));
		}
	}
	componentDidUpdate() {
		

		if (
			this.state.selectedFirstLocation != null &&
			this.state.selectedSecondLocation != null
		) {

			axios("http://localhost:9000/api/apartments/location/" + this.state.selectedFirstLocation + "/" + this.state.selectedSecondLocation)
				.then(res => {
					let fetchedData = res.data.map(r =>
						createData(
							r.FromLocation,
							r.ToLocation,
							r.TimeOfDeparture,
							r.TimeOfArrival,
							r.Distance,
							r.Price,
							r.Company
						)
					);
					this.setState({ data: fetchedData });
					console.log(this.state.data);
				})
				.catch(err => this.setState({ loading: false }));
		}
	}

	render() {
		console.log("hi table", this.state.data)
		return (
			<div>
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
							marginRight:"15px",
							height: "70px"
						}}
						variant="outlined"
						id="grad"
						width="200px"
						select
						label="Odaberi početnu lokaciju"
						value={this.selectedFirstLocation}
						onChange={e => {
							this.onSelectFirstLocation(e.target.key)
						}}
						color="white"
					>
						<MenuItem key={6} value={6}>
							{"Sarajevo"}
						</MenuItem>
						<MenuItem key={7} value={7}>
							{"Tuzla"}
						</MenuItem>
						<MenuItem key={8} value={8}>
							{"Mostar"}
						</MenuItem>
						<MenuItem key={9} value={9}>
							{"Banja Luka"}
						</MenuItem>
						<MenuItem key={10} value={10}>
							{"Doboj"}
						</MenuItem>
						<MenuItem key={11} value={11}>
							{"Zenica"}
						</MenuItem>
						<MenuItem key={12} value={12}>
							{"Bijeljina"}
						</MenuItem>
					</TextField>
					<TextField
						style={{
							backgroundColor: "white",
							color: "black",
							width: "200px",

							height: "70px"
						}}
						variant="outlined"
						id="grad"
						width="200px"
						select
						label="Odaberi krajnju lokaciju"
						value={this.selectedSecondLocation}
						onChange={e => {
							this.onSelectSecondLocation(e.target.key)
						}}
						color="white"
					>
						<MenuItem key={6} value={6}>
							{"Sarajevo"}
						</MenuItem>
						<MenuItem key={7} value={7}>
							{"Tuzla"}
						</MenuItem>
						<MenuItem key={8} value={8}>
							{"Mostar"}
						</MenuItem>
						<MenuItem key={9} value={9}>
							{"Banja Luka"}
						</MenuItem>
						<MenuItem key={10} value={10}>
							{"Doboj"}
						</MenuItem>
						<MenuItem key={11} value={11}>
							{"Zenica"}
						</MenuItem>
						<MenuItem key={12} value={12}>
							{"Bijeljina"}
						</MenuItem>
					</TextField>
				</div>
				<div >
					<Table aria-labelledby="tableTitle">
						<TableHead style={{ backgroundColor: "rgb(57, 54, 67, 0.9)" }}>
							<TableRow>
								{rows.map(
									row => (
										<TableCell
											style={{
												color: "white"
											}}
											key={row.id}

										>
											{row.label}

										</TableCell>
									),
									this
								)}
							</TableRow>
						</TableHead>

						<TableBody>

							{this.state.data.map(n => {
								return (
									<TableRow
										hover
										key={n.id}
									>
										<TableCell component="th" scope="row">
											{n.FromLocation}
										</TableCell>

										<TableCell>{n.ToLocation}</TableCell>
										<TableCell>{n.TimeOfDeparture}</TableCell>
										<TableCell>{n.TimeOfArrival}</TableCell>
										<TableCell>{n.Distance}</TableCell>
										<TableCell>{n.Price}</TableCell>
										<TableCell>{n.Company}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>

				</div>


			</div>
		);
	}
}
export default ApartmentView;
