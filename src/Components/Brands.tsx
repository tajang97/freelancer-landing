import React from "react";
import Container from "./Container";

import amazon from "../Images/amazon.svg";
import deloitte from "../Images/deloitte.svg";
import airbus from "../Images/airbus.svg";
import facebook from "../Images/facebook.svg";
import ibm from "../Images/ibm.svg";
import nasa from "../Images/nasa.svg";
import novo from "../Images/novo.svg";

import "../Styles/Brands.sass";

const Brands: React.FunctionComponent = () => {
	return (
		<div className="brands">
			<Container>
				<div className="brands-wrap d-flex">
					<img className="brand-image" src={amazon} alt="amazon-logo" />
					<img className="brand-image" src={deloitte} alt="deloitte-logo" />
					<img className="brand-image" src={facebook} alt="facebook-logo" />
					<img className="brand-image" src={nasa} alt="nasa-logo" />
					<img className="brand-image" src={airbus} alt="airbus-logo" />
					<img className="brand-image" src={ibm} alt="ibm-logo" />
					<img className="brand-image" src={novo} alt="novo-logo" />
				</div>
			</Container>
		</div>
	);
};

export default Brands;
