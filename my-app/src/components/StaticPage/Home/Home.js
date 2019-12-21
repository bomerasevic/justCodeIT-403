
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
                <h1>StuDingo</h1>
                <h2>
                    Vodič za studente
				</h2>
                <a className="btn btn-full" href="#" >Nađi novi DOM</a>
                <a className="btn btn-full" href="#" >Vrati me KUĆI</a>
            </div>
        </div>
    );
}
export default Home;
