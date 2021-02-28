import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.sass";

import Button from "./Button";
import Container from "./Container";
import Navigation from "./Navigation";

import logo from "../Images/logo.png";

const Header: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<header className="header">
				<Container>
					<div className="navbar">
						<div className="logo-wrap">
							<Link to="/" className="logo flex">
								<span>
									<img className="logo-img" src={logo} alt="freelancer.uz-logo" />
								</span>
								<span className="logo-text">freelancer</span>
							</Link>
						</div>
						<Navigation />
						<div className="auth">
							<Link className="auth-link" to="/login">
								<Button variant="link">Login</Button>
							</Link>
							<Link className="auth-link" to="/register">
								<Button variant="primary">Register</Button>
							</Link>
						</div>
					</div>
				</Container>
			</header>
		</React.Fragment>
	);
};

export default Header;
