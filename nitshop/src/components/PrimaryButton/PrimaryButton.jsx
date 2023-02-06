import React from "react";
import styled from "styled-components";

// const PrimaryButton = styled.button`
// 	border: 2px solid pink;
// 	color: ${(props) => (props.primary ? "blue" : "black")};
// 	width: ${(props) => (props.primary ? "150px" : "250px")};
// 	height: ${(props) => (props.primary ? "50px" : "100px")};
// 	background-color: ${(props) => (props.primary ? "white" : "pink")};
// `;

// export default PrimaryButton;

const PrimaryDiv = styled.div`
	color: ${(props) => (props.primary ? "white" : "black")};
	width: ${(props) => (props.primary ? "80%" : "100%  ")};
	background-color: ${(props) => (props.primary ? "blue" : "red")};
`;

export default PrimaryDiv;
