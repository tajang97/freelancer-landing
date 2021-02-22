import React from "react";
import Button from "../Components/Button";
import Container from "../Components/Container";

const Profile: React.FunctionComponent = () => {
	return (
		<Container>
			<div>
				<h1>Profile</h1>
				<Button variant="primary">Primary</Button>
				<Button variant="outlined">Outlined</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="link">Link</Button>
				<Button variant="disabled" disabled>
					Disabled
				</Button>
			</div>
		</Container>
	);
};

export default Profile;
