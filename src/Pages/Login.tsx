import React, { useState } from "react";
import Button from "../Components/Button";
import Container from "../Components/Container";
import "../Styles/Login.sass";
import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";
import eyeIcon from "@iconify-icons/uil/eye";
import eyeSlash from "@iconify-icons/uil/eye-slash";

const Login: React.FunctionComponent = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="login-page">
			<div className="cirle lc-top-left"></div>
			<div className="cirle lc-right"></div>
			<div className="cirle lc-bottom-left"></div>
			<Container>
				<div className="form-wrap d-flex">
					<form className="form d-flex">
						<div className="form-text">
							<p>Welcome Back</p>
							<h2>Log Into My Account</h2>
						</div>
						<div className="input-wrapper d-flex">
							<label className="label" htmlFor="email">
								Email
							</label>
							<input
								className="input"
								type="email"
								name="email"
								placeholder="Email address..."
							/>
						</div>
						<div className="input-wrapper d-flex">
							<label className="label" htmlFor="password">
								Password
							</label>
							<div className="password-input d-flex">
								<input
									className="input"
									type={showPassword ? "text" : "password"}
									name="password"
									placeholder="Password..."
								/>
								<span
									className="password-toggle d-flex"
									onClick={() => setShowPassword((prev) => !prev)}
								>
									{showPassword ? (
										<Icon icon={eyeIcon} />
									) : (
										<Icon icon={eyeSlash} />
									)}
								</span>
							</div>
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
