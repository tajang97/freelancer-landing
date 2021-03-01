import React from "react";

interface EmailProps extends React.InputHTMLAttributes<HTMLInputElement> {
	refs: React.RefObject<HTMLInputElement>;
}

const EmailInput: React.FunctionComponent<EmailProps> = ({ refs, ...props }) => {
	return (
		<div className="auth-form-input">
			<div className="email-input">
				<input ref={refs} className="input" type="email" {...props} />
			</div>
		</div>
	);
};

export default EmailInput;
