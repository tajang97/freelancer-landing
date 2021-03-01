import React from "react";

type Props = {
	firstnameref: React.RefObject<HTMLInputElement>;
	lastnameref: React.RefObject<HTMLInputElement>;
};

const NameInput: React.FunctionComponent<Props> = ({ firstnameref, lastnameref }) => {
	return (
		<div className="auth-form-input">
			<div className="fullname-input flex">
				<div>
					<label htmlFor="first-name-input">First name</label>
					<input
						ref={firstnameref}
						className="input"
						type="text"
						id="fist-name-input"
						placeholder="First name"
						required
					/>
				</div>
				<div>
					<label htmlFor="last-name-input">Last name</label>
					<input
						ref={lastnameref}
						className="input"
						type="text"
						id="last-name-input"
						placeholder="Last name"
						required
					/>
				</div>
			</div>
		</div>
	);
};

export default NameInput;
