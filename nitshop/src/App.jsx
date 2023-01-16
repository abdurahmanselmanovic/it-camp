import logo from "./logo.svg";
import "./App.css";
import { StyledButton } from "./components/StyledButton/StyleButton";
import StyledHeader from "./components/StyledHeader/styleHeader";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<StyledHeader></StyledHeader>
				<StyledButton innerText="CLICK"></StyledButton>
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
