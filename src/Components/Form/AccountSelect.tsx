import React from "react";

type Props = {
	select: any;
};

const AccountSelect: React.FunctionComponent<Props> = ({ select }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		select(e.target.id);
	};

	return (
		<div className="auth-form-input">
			<div className="account-select">
				<div className="account-option">
					<input type="radio" name="account" id="work" onChange={handleChange} required />
					<label htmlFor="work">Earn money freelancing</label>
				</div>
				<div className="account-option">
					<input type="radio" name="account" id="hire" onChange={handleChange} />
					<label htmlFor="hire">Hire a freelancer</label>
				</div>
			</div>
		</div>
	);
};

export default AccountSelect;
