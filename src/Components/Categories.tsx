import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Categories: React.FunctionComponent = () => {
	return (
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
	);
};

export default Categories;
