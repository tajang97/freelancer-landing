import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navigation.sass";

const Navigation: React.FunctionComponent = () => {
	return (
		<nav className="navigation">
			<ul>
				<li className="navigation-item has-dropdown">
					<Link to="/">Find Talent</Link>
					<ul className="dropdown">
						<li>
							<Link to="/">Link 1</Link>
						</li>
						<li>
							<Link to="/">Link 2</Link>
						</li>
						<li>
							<Link to="/">Link 3</Link>
						</li>
					</ul>
				</li>
				<li className="navigation-item">
					<Link to="/">Find Work</Link>
				</li>
				<li className="navigation-item">
					<Link to="/">How it works</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
