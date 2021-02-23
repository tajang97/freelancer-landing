import React from "react";
import Container from "./Container";
import FeatureCard from "./FeatureCard";

import post from "../Images/undraw_post.svg";
import choose from "../Images/undraw_choose.svg";
import pay from "../Images/undraw_pay.svg";

import "../Styles/ForClients.sass";

const ForClients: React.FunctionComponent = () => {
	return (
		<section className="for-clients">
			<Container>
				<div className="for-clients-content d-flex">
					<h4 className="section-subtitle">For Clients</h4>
					<h3 className="section-title">Need something done?</h3>
					<div className="fc-features">
						<FeatureCard
							img={post}
							title="Post a job"
							text="It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes."
						/>
						<FeatureCard
							img={choose}
							title="Choose freelancers"
							text="Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants, product manufacturing, and graphic design (and a whole lot more)."
						/>
						<FeatureCard
							img={pay}
							title="Pay safely"
							text="With secure payments and thousands of reviewed professionals to choose from, Freelancer.com is the simplest and safest way to get work done online."
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ForClients;
