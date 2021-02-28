import React, { useState } from "react";
import Button from "../Components/Button";
import Container from "../Components/Container";
import "../Styles/Login.sass";
import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";
import eyeIcon from "@iconify-icons/uil/eye";
import eyeSlash from "@iconify-icons/uil/eye-slash";

const Register: React.FunctionComponent = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="register-page">
			<div className="cirle lc-top-left"></div>
			<div className="cirle lc-right"></div>
			<div className="cirle lc-bottom-left"></div>
			<Container>
				<div className="form-wrap d-flex">
					<form className="form d-flex">
						<div className="form-text">
							<p>Welcome!</p>
							<h2>Create a new account</h2>
						</div>
						<div className="input-wrapper">
							<div className="fullname d-grid">
								<div>
									<label className="label" htmlFor="firstName">
										First name
									</label>
									<input
										className="input"
										type="text"
										name="firstName"
										placeholder="First name..."
									/>
								</div>
								<div>
									<label className="label" htmlFor="lastName">
										Last name
									</label>
									<input
										className="input"
										type="text"
										name="lastName"
										placeholder="Last name..."
									/>
								</div>
							</div>
						</div>
						<div className="input-wrapper">
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
						<div className="input-wrapper">
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
						<div className="input-wrapper account-select">
							<div className="account-type">
								<div className="cirle">
									<span className="cirle-inner"></span>
								</div>
								I want to hire
							</div>
							<div className="account-type">
								<div className="cirle">
									<span className="cirle-inner"></span>
								</div>
								I want to work
							</div>
						</div>
						<Button type="submit" variant="primary">
							Create account
						</Button>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default Register;
