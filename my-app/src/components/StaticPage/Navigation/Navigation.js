import React, { Component } from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import logomodal from "../../../assets/images/logomodal.png";
import hamburger from "../../../assets/images/hamburger.svg";
import Modal from "react-modal";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
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
						<a href="#home" className="left brand-logo">
						</a>
						<a href="#" data-target="mobile-demo" className="sidenav-trigger button-collapse">
							<i className="material-icons">
								<img src={hamburger} />
							</i>
						</a>
                        <a>TRAŽIŠ: </a>
						<ul className="right hide-on-med-and-down">
							<li>
								<a href="#about">stan</a>
							</li>
							<li>
								<a href="#services">prevoz</a>
							</li>
							<li>
								<a href="#staff">hranu</a>
							</li>
							<li>
								<a href="#contact">zabavu</a>
							</li>
                            <li>
								<a href="#contact">savjete</a>
							</li>
							<li>
								<a className=" btn login-static modal-trigger" onClick={this.openModal}>
									Login
								</a>
								<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
									<div className="row">
										<img className="logo-modal" src={logomodal} />

										<h1 className="loginHeader1">Login to your account</h1>

										<h2 className="loginHeader2">Save time for doing great work.</h2>
										<a href="#" class="close" onClick={this.closeModal} />
										<Formik
											initialValues={{
												username: "",
												password: ""
											}}
											validationSchema={SignupSchema}
											onSubmit={(values) => {
												this.props.auth(values)
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
													<div id="loginbtn">
														<button type="submit" className=" btn Login-static "
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
