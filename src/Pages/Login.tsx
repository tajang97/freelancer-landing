import React, { useRef } from "react";
import Button from "../Components/Button";
import Container from "../Components/Container";
import EmailInput from "../Components/Form/EmailInput";
import PasswordInput from "../Components/Form/PasswordInput";

import "../Styles/Login.sass";
const Login: React.FunctionComponent = () => {
	const emailRef = useRef<HTMLInputElement>(null!);
	const passwordRef = useRef<HTMLInputElement>(null!);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(emailRef.current.value, passwordRef.current.value);
	};
	return (
		<main className="page login">
			<Container>
				<form onSubmit={handleSubmit} className="auth-form login-form">
					<EmailInput refs={emailRef} />
					<PasswordInput refs={passwordRef} />
					<Button variant="primary">Submit</Button>
				</form>
			</Container>
		</main>
	);
};

export default Login;
