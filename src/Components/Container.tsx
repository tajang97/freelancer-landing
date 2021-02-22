import React from "react";
import "../Styles/Container.sass";

const Container: React.FunctionComponent = ({ children }) => {
	return <div className="container">{children}</div>;
};

export default Container;
