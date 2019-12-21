
import React, { Component } from "react";
import "./Home.css";
import Navigation from "../Navigation/Navigation"
import logo from "../../../assets/images/Rectangle 183.png";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
function Home() {
    return (
        <div className="header " id="home">
            <Navigation />
            <MobileNavigation />
            <div className="container header-text">
                <h1>Study'n'Go</h1>
                <h2>
                    Vodič za studente
				</h2>
                <a className="btn btn-full" href="http://localhost:3000/apartments" >Nađi novi DOM</a>
                <a className="btn btn-full" href="http://localhost:3000/bus" >Vrati me KUĆI</a>
            </div>
        </div>
    );
}
export default Home;
