import React from "react";

type EmailProps = {
	refs: React.RefObject<HTMLInputElement>;
};

const EmailInput: React.FunctionComponent<EmailProps> = ({ refs }) => {
	return (
		<div className="auth-form-input">
			<div className="email-input">
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
		</div>
	);
};

export default EmailInput;
