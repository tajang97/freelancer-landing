import React, { useRef } from "react";
import Button from "../Components/Button";
import Container from "../Components/Container";
import EmailInput from "../Components/Form/EmailInput";
import PasswordInput from "../Components/Form/PasswordInput";

import "../Styles/Auth.sass";

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
				<div className="form-wrap">
					<form onSubmit={handleSubmit} className="auth-form" id="login-form">
						<div className="form-text">
							<p>Welcome back!</p>
							<h2>Log into your account</h2>
						</div>
						<label htmlFor="login-email" form="login-form">
							Email
						</label>
						<EmailInput
							refs={emailRef}
							id="login-email"
							placeholder="Email..."
							required
						/>
						<label htmlFor="login-password" form="login-form">
							Password
						</label>
						<PasswordInput
							refs={passwordRef}
							id="login-password"
							placeholder="Password..."
							required
						/>
						<Button variant="primary">Submit</Button>
					</form>
				</div>
			</Container>
		</main>
	);
};

export default Login;
