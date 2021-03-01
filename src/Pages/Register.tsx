import React, { useRef, useState } from "react";
import Button from "../Components/Button";
import Container from "../Components/Container";
import AccountSelect from "../Components/Form/AccountSelect";
import EmailInput from "../Components/Form/EmailInput";
import NameInput from "../Components/Form/NameInput";
import PasswordInput from "../Components/Form/PasswordInput";

import "../Styles/Auth.sass";

const Register: React.FunctionComponent = () => {
	const emailRef = useRef<HTMLInputElement>(null!);
	const passwordRef = useRef<HTMLInputElement>(null!);
	const fisrtnameRef = useRef<HTMLInputElement>(null!);
	const lastnameRef = useRef<HTMLInputElement>(null!);

	const [accountType, setAccountType] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({
			name: fisrtnameRef.current.value + lastnameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
			accountType: accountType,
		});
	};

	return (
		<main className="page register">
			<Container>
				<div className="form-wrap">
					<form onSubmit={handleSubmit} className="auth-form" id="register-form">
						<div className="form-text">
							<p>Welcome!</p>
							<h2>Create a new account</h2>
						</div>
						<NameInput firstnameref={fisrtnameRef} lastnameref={lastnameRef} />
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
						<AccountSelect select={setAccountType} />
						<Button variant="primary">Submit</Button>
					</form>
				</div>
			</Container>
		</main>
	);
};

export default Register;
