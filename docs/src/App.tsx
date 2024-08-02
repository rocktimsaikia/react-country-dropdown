import "./App.css";
import ReactCountryDropdown from "react-country-dropdown";
import "react-country-dropdown/dist/style.css";

function App() {
	return (
		<>
			<h1>React Country Dropdown</h1>
			<div className="dropdown-container">
				<ReactCountryDropdown />
			</div>
		</>
	);
}

export default App;
