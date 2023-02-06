import React from "react";
import "./App.css";
import GridCmp from "./components/Grid/GridCmp";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";

const App = () => {
	return (
		<div
			style={{
				display: "flex",
				height: 400,
				backgroundColor: "red",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<PrimaryButton primary width>
				Primary Button
			</PrimaryButton>{" "}
		</div>
	);
};

export default App;
