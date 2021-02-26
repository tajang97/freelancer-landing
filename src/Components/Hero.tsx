import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";

import "../Styles/Hero.sass";

import team from "../Images/seenit.png";

const Hero: React.FunctionComponent = () => {
	return (
		<div className="hero">
			<div className="cirle hc-large"></div>
			<div className="cirle hc-small"></div>
			<Container>
				<div className="hero-content d-flex">
					<div className="hero-content-left d-flex">
						<h1>Hire the best freelancers for any job, online.</h1>
						<h2>
							Engage the largest network of trusted independent professionals to
							unlock the full potential of your business.
						</h2>
						<div className="cta-wrap">
							<Link to="/" className="cta-link">
								<Button variant="primary">Hire a freelancer</Button>
							</Link>
							<Link to="/" className="cta-link">
								<Button variant="outlined">Earn money freelancing</Button>
							</Link>
						</div>
					</div>
					<div className="hero-content-right d-flex">
						<img className="hero-image" src={team} alt="hero-team" />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
