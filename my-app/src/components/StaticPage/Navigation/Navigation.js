import React, { Component } from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import logomodal from "../../../assets/images/logomodal.png";
import hamburger from "../../../assets/images/hamburger.svg";
import Modal from "react-modal";
import * as Yup from "yup";
import logo from "../../../assets/images/logo.png"
import { withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import config from "../../../config";
import axios from "axios";
const SignupSchema = Yup.object().shape({
	username: Yup.string().min(5, "Too Short!").required("Required"),
	password: Yup.string().required("Required")
});
class Navigation extends React.Component {
	constructor() {
		super();
		this.state = {
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	openModal() {
		this.setState({ modalIsOpen: true });
	}
	closeModal() {
		this.setState({ modalIsOpen: false });
	}


	render() {
		return (
			<div className="navbar-fixed">
				<nav className="custom-navbar ">
					<div className="nav-wrapper">
						<a href="http://localhost:3000/" className="left brand-logo">
						<img className="logo-main" id=" time-keeper-logo" src={logo} />
						</a>
						<a href="#" data-target="mobile-demo" className="sidenav-trigger button-collapse">
							<i className="material-icons">
								<img className="mobileLogo" src={hamburger} />
							</i>
						</a>
                        
						<ul className="right hide-on-med-and-down">
                       
							<li>
								<a href="http://localhost:3000/roommates">TRAŽIM CIMERA</a>
							</li>							
							<li>
								<a href="#">HRANU</a>
							</li>
							<li>
								<a href="#">ZABAVU</a>
							</li>
                            <li>
								<a href="#">SAVJETE</a>
							</li>
							<li>
								<a className=" btn login-static modal-trigger" onClick={this.openModal}>
									Login
								</a>
								<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
									<div className="row">
										<img className="logo-modal" src={logo} />
										<a href="#" class="close" onClick={this.closeModal} />
										<Formik
											initialValues={{
												username: "",
												password: ""
											}}
											validationSchema={SignupSchema}
											onSubmit={(values, { setSubmitting }) => {
                                                axios
                                                    .post(`${config.apiUrl}users`, values, {
                                                        headers: {
                                                            "Access-Control-Allow-Origin": "*",
                                                            "Content-Type": "application/json"
                                                        }
                                                    })
                                                    .then(resp => {

                                                        console.log(resp.data);
                                                        config.token = "Baerer " + resp.data.base64;
                                                        console.log(config);
                                                    })
                                                    .catch(err => {
                                                        console.log(err);
                                                        
                                                    });
                                            }}
										>
											{({ errors, touched }) => (
												<Form>
													<div className="input-field">
														<Field name="username" id="username" type="text" />
														{errors.username && touched.username ? (
															<div className="errorUsernameRed">{errors.username}</div>
														) : null}
														<label htmlFor="username">username</label>
													</div>

													<div className="input-field">
														<Field name="password" id="password" type="password" />
														{errors.password && touched.password ? (
															<div className="errorPasswordRed">{errors.password}</div>
														) : null}
														<label htmlFor="password">password</label>
													</div>
														<p>Imaš stan, a nemaš cimera?</p>
													<div id="loginbtn">
														<button type="submit" href="http://localhost:3000/welcome" className=" btn Login-static "
														>
															LOGIN
														</button>
													</div>
												</Form>
											)}
										</Formik>
									</div>
								</Modal>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navigation;
