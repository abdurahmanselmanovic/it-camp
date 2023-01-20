import React from "react";
import "./StyledInput.css";

const StyledInput = () => {
	return (
		<form>
			<label>
				{" "}
				Enter your name
				<input className="StyledInput"></input>
			</label>
			<br />
			<label>
				{" "}
				Enter your lastname
				<input className="StyledInput"></input>
			</label>
			<br />
			<label>
				{" "}
				Enter your phonenumber
				<input className="StyledInput"></input>
			</label>
			<button className="submitButton">Submit</button>
		</form>
	);
};

export default StyledInput;
