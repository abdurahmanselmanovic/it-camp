import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledHeader from "./components/StyledHeader/styleHeader";
import { StyledButton } from "./components/StyledButton/StyleButton";
import { useState, useEffect } from "react";
import StyledInput from "./components/StyledInput/StyledInput";

function App() {
	const [innerText, setInnnerText] = useState("");
	const [clicked, setClicked] = useState(false);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		clicked ? setInnnerText("Clicked") : setInnnerText("click me");
	}, [clicked]);

	function buttonClicked() {
		setClicked(!clicked);
	}

	function onChangeFunction(event) {
		setInputValue(event.target.value);
	}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<StyledHeader innerText="header" />
				<StyledButton innerText={innerText} onClickHandler={buttonClicked} />
				<StyledInput onChangeHandler={onChangeFunction} value={inputValue} />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
