import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./MobileNavigation.css";
import "../Navigation/Navigation.css";

class Menu extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            let instances = M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <ul>
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
                    <a className="waves-effect waves-light btn">Login</a>
                </li>
            </ul >
        );
    }
}

export default Menu;