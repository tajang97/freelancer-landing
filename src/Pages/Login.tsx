import React, { useState } from "react";
import Button from "../Components/Button";
import Container from "../Components/Container";

import { Icon } from "@iconify/react";
import eyeIcon from "@iconify-icons/uil/eye";
import eyeSlash from "@iconify-icons/uil/eye-slash";

import "../Styles/Login.sass";

const Login: React.FunctionComponent = () => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className="login-page">
			<div className="cirle lc-top-left"></div>
			<div className="cirle lc-right"></div>
			<div className="cirle lc-bottom-left"></div>
			<Container>
				<div className="login-wrap d-flex">
					<div className="login-text">
						<p>Get started</p>
						<h2>See how the Seenit could work for you and your business</h2>
					</div>
					<form className="login-form d-flex">
						<label htmlFor="email">Email </label>
						<input type="email" name="email" placeholder="Email address..." />
						<label htmlFor="password">Password</label>

						<div className="login-password d-flex">
							<input
								type={showPassword ? "text" : "password"}
								name="password"
								placeholder="Password..."
							/>
							<span
								className="toggle-password"
								onClick={() => setShowPassword((prev) => !prev)}
							>
								{showPassword ? <Icon icon={eyeIcon} /> : <Icon icon={eyeSlash} />}
							</span>
						</div>

						<Button type="submit" variant="primary">
							Log in
						</Button>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default Login;
