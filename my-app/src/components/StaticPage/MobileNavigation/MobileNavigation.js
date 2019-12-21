import React, { Component } from "react";
import "./MobileNavigation.css";
import "../Navigation/Navigation.css";
import logomodal from "../../../assets/images/logomodal.png";
import Modal from "react-modal";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import M from "materialize-css";
const SignupSchema = Yup.object().shape({
    username: Yup.string().min(5, "Too Short!").required("Required"),
    password: Yup.string().required("Required")
});
class MobileNavigation extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll(".sidenav-trigger");
        M.Sidenav.init(elems, {});
        M.AutoInit();
    }
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
            <ul className="sidenav" id="mobile-demo">
                <p>TRAŽIŠ</p>
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
                    <a className="waves-effect waves-light btn">Login</a>
                    <Modal className="mobile-login" isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
                        <div className="row mobile-row">
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
                                onSubmit={(values, { setSubmitting }) => {
                                   
                                }}
                            >
                            </Formik>
                        </div>
                    </Modal>
                </li>
            </ul>
        );
    }
}

export default MobileNavigation;
