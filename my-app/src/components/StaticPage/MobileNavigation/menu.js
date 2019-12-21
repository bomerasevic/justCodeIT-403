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
            <p>TRAŽIŠ</p>
            <ul>
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
            </li>
    </ul >
      );
    }
}

export default Menu;