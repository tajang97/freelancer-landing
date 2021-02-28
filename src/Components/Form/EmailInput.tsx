import React from "react";

type EmailProps = {
	refs: React.RefObject<HTMLInputElement>;
};

const EmailInput: React.FunctionComponent<EmailProps> = ({ refs }) => {
	return (
		<div className="auth-form-input">
			<input
				ref={refs}
				placeholder="Email address..."
				className="input"
				type="email"
				name="email"
				id="email"
				required
			/>
		</div>
	);
};

export default EmailInput;
