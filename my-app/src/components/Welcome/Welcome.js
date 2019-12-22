import React, { Component } from "react";
import Modal from "react-modal";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { withRouter } from "react-router-dom";
import "./Welcome.css"
const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, "Too Short!")
        .required("Required"),
    password: Yup.string().required("Required")
});
class Welcome extends React.Component {
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
            <div className="header-welcome " id="home">


                <div className="container">
                    <h1 style={{fontSize: "60px", padding: "0", margin: "0" }}>Dobrodošli nazad </h1>
                    <h1 style={{ fontSize: "40px", padding: "0", marginTop: "20px" }}>Berina</h1>
                    <a className=" btn login-static modal-trigger" style={{ marginTop: "50px" }}  onClick={this.openModal}>
                        Dodaj oglas
					</a>
                    <br></br>
                    <a className=" btn login-static modal-trigger" style={{ marginTop: "50px" }} href="http://localhost:3000/">
                        LOGOUT
					</a>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                >
                    <div className="row">
                        <a href="#" class="close" onClick={this.closeModal}></a>
                        <Formik
                            initialValues={{
                                username: "",
                                password: ""
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values, { setSubmitting }) => {

                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className="input-field">
                                        <Field
                                            name="username"
                                            id="username"
                                            type="text"
                                        />
                                        {errors.username && touched.username ? (
                                            <div className="errorUsername">
                                                {errors.username}
                                            </div>
                                        ) : null}
                                        <label htmlFor="username">username</label>
                                    </div>

                                    <div className="input-field">
                                        <Field
                                            name="password"
                                            id="password"
                                            type="password"
                                        />
                                        {errors.password && touched.password ? (
                                            <div className="errorPassword">
                                                {errors.password}
                                            </div>
                                        ) : null}
                                        <label htmlFor="password">password</label>
                                    </div>
                                    <div id="loginbtn">
                                        <button type="submit" className=" btn ">
                                            LOGIN
                                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default withRouter(Welcome);










