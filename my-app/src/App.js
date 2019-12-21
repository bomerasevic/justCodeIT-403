import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./components/StaticPage/Home/Home";

import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
class App extends React.Component {
	
	render() {
		return (
			<Switch>
				<Route exact path="/">
					<div className="App">
						<Home />
					</div>
				</Route>

			</Switch>
		);
	}
}
export default App;
