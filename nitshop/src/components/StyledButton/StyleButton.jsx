import React from "react";
import "./styleButton.css";

export const StyledButton = (props) => {
	return (
		<button className="styledButton" onClick={props.onClickHandler}>
			{props.innerText}
		</button>
	);
};
