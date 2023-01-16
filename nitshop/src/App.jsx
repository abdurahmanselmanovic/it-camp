import logo from "./logo.svg";
import "./App.css";
import StyledHeader from "./components/StyledHeader/styleHeader";
import { StyledButton } from "./components/StyledButton/StyleButton";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<StyledHeader innerText="header" />
				<StyledButton innerText="CLICK" />
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
