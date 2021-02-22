import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.sass";

import Button from "./Button";
import Container from "./Container";
import Navigation from "./Navigation";
import Search from "./Search";

const Header: React.FunctionComponent = () => {
	return (
		<header className="header">
			<Container>
				<div className="navbar">
					<div className="logo">Freelancer.uz</div>
					<Navigation />
					<Search />
					<div className="auth">
						<Link to="/login">
							<Button variant="ghost">Login</Button>
						</Link>
						<Link to="/register">
							<Button variant="primary">Register</Button>
						</Link>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
