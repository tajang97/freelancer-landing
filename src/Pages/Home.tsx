import React from "react";

// import Container from "../Components/Container";
import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import Categories from "../Components/Categories";

const Profile: React.FunctionComponent = () => {
	return (
		<>
			<Categories />
			<Hero />
			<Brands />
		</>
	);
};

export default Profile;
