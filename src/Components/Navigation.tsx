import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navigation.sass";

const Navigation: React.FunctionComponent = () => {
	return (
		<nav className="navigation">
			<ul className="navigation-ul d-flex">
				<li className="navigation-item has-dropdown">
					<Link className="link navigation-link" to="/">
						Find Freelancers
					</Link>
				</li>
				<li className="navigation-item has-dropdown">
					<Link className="link navigation-link" to="/">
						Browse Jobs
					</Link>
				</li>
				<li className="navigation-item">
					<Link className="link navigation-link" to="/">
						How it works
					</Link>
				</li>
				<li className="navigation-item">
					<Link className="link navigation-link" to="/">
						Resources
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
