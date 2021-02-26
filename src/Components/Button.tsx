import React from "react";
import "../Styles/Button.sass";

type ButtonProps = {
	variant: string;
	children: React.ReactNode;
	disabled?: boolean;
	type?: any;
	className?: string;
};

const Button: React.FunctionComponent<ButtonProps> = ({
	variant,
	disabled = false,
	children,
	type = "button",
}) => {
	return (
		<button className={"button button-" + variant} disabled={disabled} type={type}>
			{children}
		</button>
	);
};

export default Button;
