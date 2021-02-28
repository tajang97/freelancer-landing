import React from "react";

import { Icon } from "@iconify/react";

type PasswordProps = {
	refs: React.RefObject<HTMLInputElement>;
};

const PasswordInput: React.FunctionComponent<PasswordProps> = ({ refs, ...props }) => {
	return (
		<div className="auth-form-input">
			<input
				ref={refs}
				placeholder="Password..."
				className="input password-input"
				type="password"
				name="password"
				id="password"
				required
				{...props}
			/>
			<span></span>
		</div>
	);
};

export default PasswordInput;
