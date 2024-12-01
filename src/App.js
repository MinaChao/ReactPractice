import logo from "./logo.svg";
import "./App.css";
import HomePage from "./HomePage";

function App() {
	return (
		<>
			<HomePage />
			<div className="App">
				<header className="App-header">
					<div className="bg-amber-800">test font</div>
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
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
		</>
	);
}

export default App;
