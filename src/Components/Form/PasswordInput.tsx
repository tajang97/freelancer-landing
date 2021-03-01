import React, { useState } from "react";

import { Icon } from "@iconify/react";
import eyeIcon from "@iconify-icons/uil/eye";
import eyeSlash from "@iconify-icons/uil/eye-slash";

interface PasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
	refs: React.RefObject<HTMLInputElement>;
}

const PasswordInput: React.FunctionComponent<PasswordProps> = ({ refs, ...props }) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="auth-form-input">
			<div className="password-input">
				<input
					ref={refs}
					className="input password-input"
					type={showPassword ? "password" : "text"}
					{...props}
				/>
				<span
					className="password-icon"
					title="Toogle password visibility"
					onClick={() => setShowPassword((prev) => !prev)}
				>
					{showPassword ? <Icon icon={eyeIcon} /> : <Icon icon={eyeSlash} />}
				</span>
			</div>
		</div>
	);
};

export default PasswordInput;
