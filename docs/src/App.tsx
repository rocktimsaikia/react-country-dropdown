import "./App.css";
import ReactCountryDropdown from "react-country-dropdown";

function App() {
	const handleCountryChange = (country: string) => {
		console.log(country);
	};
	return (
		<>
			<h1>React Country Dropdown</h1>
			<div className="dropdown-container">
				<ReactCountryDropdown
					onSelect={handleCountryChange}
					defaultCountry="IN"
				/>
			</div>
		</>
	);
}

export default App;
