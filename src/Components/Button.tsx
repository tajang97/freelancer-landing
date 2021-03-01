import React from "react";
import "../Styles/Button.sass";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "primary" | "outlined" | "ghost" | "link" | "disabled";
}

const Button: React.FunctionComponent<ButtonProps> = ({ variant, children, ...props }) => {
	return (
		<button {...props} className={"button button-" + variant}>
			{children}
		</button>
	);
};

export default Button;
