import React from "react";
import "../Styles/FeatureCard.sass";

type FeatureProps = {
	img: string;
	title: string;
	text: string;
};

const FeatureCard: React.FunctionComponent<FeatureProps> = ({ img, title, text }) => {
	return (
		<div className="feature d-flex">
			<div className="feature-top d-flex">
				<img className="feature-image" src={img} alt="feature" />
				<h4 className="feature-title">{title}</h4>
			</div>

			<p className="feature-text">{text}</p>
		</div>
	);
};

export default FeatureCard;
