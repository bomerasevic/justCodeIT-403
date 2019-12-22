import React, { Component, Fragment } from "react";
import Navigation from "../StaticPage/Navigation/Navigation";
import MobileNavigation from "../StaticPage/MobileNavigation/MobileNavigation";
import "./ApartmentView.css";
import { MenuItem, TextField } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import axios from "axios";

import Modal from "react-modal";
let counter = 0;
function createData(
	address,
	description,
	price,
	numberOfRooms,
	flat
) {
	counter += 1;
	return {
		id: counter,
		address,
		description,
		price,
		numberOfRooms,
		flat
	};
}

const rows = [
	{ id: "address", label: "Adresa" },
	{ id: "description", label: "Opis" },
	{ id: "price", label: "Cijena" },
	{ id: "numberOfRooms", label: "Broj soba" },
	{ id: "flat", label: "Sprat" }
];
class ApartmentView extends Component {
	constructor(props) {
		super(props);
		
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	openModal() {
		this.setState({ modalIsOpen: true });
	}
	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	state = {
		selected: [],
		modalIsOpen: false,
		data: [],
		selectedLocation: null,
		inputValue: null,
		page: 0
	};

	onSelectLocation = (location) => {
		this.setState({
			selectedLocation: location,
		});
	};
	setValue = (value) => {
		this.setState({
			inputValue: value,
		});
	};
	componentDidMount() {

		if (
			this.state.selectedLocation == null &&
			this.state.inputValue == null
		) {

			axios("http://localhost:9000/api/apartments/")
				.then(res => {
					let fetchedData = res.data.map(r =>
						createData(
							r.address,
							r.description,
							r.price,
							r.numberOfRooms,
							r.flat
						)
					);
					this.setState({ data: fetchedData });
					console.log(this.state.data);
				})
				.catch(err => this.setState({ loading: false }));
		}
	}
	componentDidUpdate() {
		/*     this.setState({ loading: true });
		 */

		if (
			this.state.selectedLocation != null &&
			this.state.inputValue != null
		) {

			axios("http://localhost:9000/api/apartments/location/" + this.state.selectedLocation + "/" + this.state.inputValue)
				.then(res => {
					let fetchedData = res.data.map(r =>
						createData(
							r.address,
							r.description,
							r.price,
							r.numberOfRooms,
							r.flat
						)
					);
					this.setState({ data: fetchedData });
					console.log(this.state.data);
				})
				.catch(err => this.setState({ loading: false }));
		}
	}

	render() {
		console.log("hi table",this.state.data)
		return (
			<div>
				<div className="header4">
					<Navigation />
					<MobileNavigation />
					<h1>
						Pronađi stan
        </h1>
					<TextField style={{
						backgroundColor: "white",
						marginRight:"15px",
						
						color: "black",
						width: "170px"
					}}
					onChange={e => {
						this.setValue(e.target.value)
					}}
						id="standard-basic" label="Cijena (KM)" />
						<TextField
							style={{
								backgroundColor: "white",
								color: "black",
								width: "170px",
	
								height: "70px"
							}}
							variant="outlined"
							id="grad"
							width="100px"
							color="black"
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
							  onClick={this.openModal}

							  
                            >
                              <TableCell component="th" scope="row">
                                {n.address}
                              </TableCell>
							 
                              <TableCell>{n.description}</TableCell>
                              <TableCell>{n.price}</TableCell>
                              <TableCell>{n.numberOfRooms}</TableCell>
                              <TableCell>{n.flat}</TableCell>
							 

                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
				   <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
									<div className="row">	
										<a href="#" class="close" onClick={this.closeModal} />
										<h2>IZDAJEM</h2>
										<h6>Adresa: Dzemala Bijedica 129</h6>
										<h6>Opis: Uredan stan</h6>
										<h6>Cijena: 350.0</h6>
										<h6>Broj soba: 2</h6>
										<h6>Površina: 40 m2</h6>										
										<h6>Nova gradnja: Da</h6>										
										<h6>Datum objave oglasa: 27.11.2019.</h6>
									</div>
								</Modal>
					
                
				</div>

				
			</div>
		);
	}
}
export default ApartmentView;
