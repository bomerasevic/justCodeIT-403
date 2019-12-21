import React, { Component, Fragment } from "react";
import Navigation from "../StaticPage/Navigation/Navigation";
import MobileNavigation from "../StaticPage/MobileNavigation/MobileNavigation";
import "./RoommatesView.css";
import { MenuItem, TextField } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
let counter = 0;
function createData(
	firstName,
	lastName,
	address,
	phone,
	email,
	fax
) {
	counter += 1;
	return {
		id: counter,
		firstName,
		lastName,
		address,
		phone,
		email,
		fax
	};
}

const rows = [
	{ id: "firstName", label: "Ime" },
	{ id: "lastName", label: "Prezime" },	
	{ id: "address", label: "Adresa" },
	{ id: "phone", label: "Telefon" },
	{ id: "email", label: "Email" },
	{ id: "fax", label: "Fakultet" }
];
class RoommatesView extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		selected: [],
		data: []
	};
	componentDidMount() {

		axios("http://localhost:9000/api/roommates/")
			.then(res => {
				let fetchedData = res.data.map(r =>
					createData(
						r.firstName,
						r.lastName,
						r.address,
						r.phone,
						r.email,
						r.flat
					)
				);
				this.setState({ data: fetchedData });
				console.log(this.state.data);
			})
			.catch(err => this.setState({ loading: false }));
	}


render() {
	return (
		<div>
			<div className="header3">
				<Navigation />
				<MobileNavigation />
				<h1>
					Pronađi cimera
        </h1>
				
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
										{n.firstName}
									</TableCell>

									<TableCell>{n.lastName}</TableCell>
									<TableCell>{n.address}</TableCell>
									<TableCell>{n.phone}</TableCell>
									<TableCell>{n.email}</TableCell>
									<TableCell>{n.fax}</TableCell>

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
export default RoommatesView;
