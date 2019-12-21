import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./components/StaticPage/Home/Home";
import ApartmentView from "./components/ApartmentView/ApartmentView"
import RoommatesView from "./components/RoomatesView/RoommatesView"
import BusView from "./components/BusView/BusView"
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
class App extends React.Component {
	componentDidMount(){
		
		const { history } = this.props;
	}
	render() {
		return (
			<Switch>
				<Route exact path="/">
					<div className="App">
						<Home />
					</div>
				</Route>
				<Route exact path="/apartments">
					<div className="App">
						<ApartmentView />
					</div>
				</Route>
				<Route exact path="/bus">
					<div className="App">
						<BusView />
					</div>
				</Route>
				<Route exact path="/roommates">
					<div className="App">
						<RoommatesView />
					</div>
				</Route>


			</Switch>
		);
	}
}
export default App;
