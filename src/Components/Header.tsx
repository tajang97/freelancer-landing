import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.sass";

import Button from "./Button";
import Container from "./Container";
import Navigation from "./Navigation";

const Header: React.FunctionComponent = () => {
	return (
		<header className="header">
			<Container>
				<div className="navbar">
					<div className="logo-wrap">
						<Link to="/" className="logo">
							Freelancer.uz
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
			<div className="cat-bar">
				<Container>
					<ul className="d-flex">
						<li>
							<Link className="link" to="/">
								Development & IT
							</Link>
						</li>
						<li>
							<Link className="link" to="/">
								Design & Creative
							</Link>
						</li>
						<li>
							<Link className="link" to="/">
								Sales & Marketing
							</Link>
						</li>
						<li>
							<Link className="link" to="/">
								Writing & Translation
							</Link>
						</li>
						<li>
							<Link className="link" to="/">
								Admin & Customer Support
							</Link>
						</li>
						<li>
							<Link className="link" to="/">
								Finance & Accounting
							</Link>
						</li>
					</ul>
				</Container>
			</div>
		</header>
	);
};

export default Header;
