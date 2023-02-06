import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
	border: 2px solid pink;
	color: ${(props) => (props.primary ? "blue" : "black")};
	width: 200px;
	height: 50px;
	background-color: ${(props) => (props.primary ? "white" : "pink")};
	padding: 20px;
`;

export default PrimaryButton;
