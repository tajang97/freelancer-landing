import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Error from "./Pages/Error";
import Header from "./Components/Header";

const App: React.FunctionComponent = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Profile} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="*" component={Error} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
