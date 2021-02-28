import React from "react";

// import Container from "../Components/Container";
import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import Categories from "../Components/Categories";

const Profile: React.FunctionComponent = () => {
	return (
		<main className="page home">
			<Categories />
			<Hero />
			<Brands />
		</main>
	);
};

export default Profile;
