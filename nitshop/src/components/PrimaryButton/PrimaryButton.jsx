import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
	border: 2px solid pink;
	color: ${(props) => (props.primary ? "blue" : "black")};
	width: ${(props) => (props.primary ? "150px" : "250px")};
	height: ${(props) => (props.primary ? "50px" : "100px")};
	background-color: ${(props) => (props.primary ? "white" : "pink")};
`;

export default PrimaryButton;
