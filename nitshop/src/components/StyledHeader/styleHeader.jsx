import React from "react";
import "./styleHeader.css";

const StyledHeader = (props) => {
	return <h1 className="styledHeader">{props.innerText}</h1>;
};

export default StyledHeader;
