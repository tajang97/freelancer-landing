import React from "react";
import "../Styles/Button.sass";

type ButtonProps = {
	variant: string;
	children: React.ReactNode;
	disabled?: boolean;
};

const Button: React.FunctionComponent<ButtonProps> = ({ variant, disabled = false, children }) => {
	return (
		<button className={"button button-" + variant} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
