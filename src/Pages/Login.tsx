import React, { useState } from "react";
import Button from "../Components/Button";
import Container from "../Components/Container";

import { Icon } from "@iconify/react";
import eyeIcon from "@iconify-icons/uil/eye";
import eyeSlash from "@iconify-icons/uil/eye-slash";

import "../Styles/Login.sass";
import { Link } from "react-router-dom";

const Login: React.FunctionComponent = () => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className="login-page">
			<div className="cirle lc-top-left"></div>
			<div className="cirle lc-right"></div>
			<div className="cirle lc-bottom-left"></div>
			<Container>
				<div className="login-wrap d-flex">
					<div className="form-text">
						<p>Welcome Back</p>
						<h2>Log Into My Account</h2>
					</div>
					<form className="login-form d-flex">
						<label htmlFor="email">Email </label>
						<input
							className="input"
							type="email"
							name="email"
							placeholder="Email address..."
						/>
						<label htmlFor="password">Password</label>

						<div className="login-password d-flex">
							<input
								className="input"
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
						<div className="forgot-password">
							<Link to="/">Forgot Your Password?</Link>
						</div>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default Login;
