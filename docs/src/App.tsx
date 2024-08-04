import { useState } from "react";
import "./App.css";
import ReactCountryDropdown from "react-country-dropdown";
import { CopyBlock, dracula, CodeBlock, atomOneDark } from "react-code-blocks";

const codeString = `
import ReactCountryDropdown from "react-country-dropdown";

export default function App() {
	const handleCountryChange = (country) => {
		console.log(country);
	};

	return (
		<>
			<ReactCountryDropdown
				onSelect={handleCountryChange}
				defaultCountry="JP"
			/>
		</>
	);
}
`;

const installString = "\nnpm i react-country-dropdown\n\n";

function App() {
	const [countryJson, setCountryJson] = useState<string>("");

	const handleCountryChange = (country: string) => {
		const formattedCountry = JSON.stringify(country, null, 4);
		setCountryJson(formattedCountry);
	};

	return (
		<div>
			<div>
				<h1>
					<pre>react-country-dropdown</pre>
				</h1>
				<p style={{ marginTop: "-25px" }}>
					A simple react country selection dropdown component.
				</p>
			</div>

			<div style={{ marginTop: "50px" }}>
				<ReactCountryDropdown />
			</div>

			<div className="code-snippet">
				<div>
					<h2 style={{ textAlign: "left", marginBottom: "5px" }}>Usage:</h2>
					<CodeBlock text={codeString} language="jsx" theme={atomOneDark} />
				</div>
				{countryJson && (
					<div>
						<p>
							The returned <code style={{ color: "orange" }}>`country`</code>{" "}
							object :
						</p>
						<CodeBlock text={countryJson} language="json" theme={atomOneDark} />
					</div>
				)}
			</div>

			<div style={{ marginTop: "50px" }}>
				<h2 style={{ textAlign: "left", marginBottom: "5px" }}>
					Installation:
				</h2>
				<CopyBlock text={installString} language="bash" theme={atomOneDark} />
			</div>

			<footer>
				Created with passion by{" "}
				<a href="https://github.com/rocktimsaikia">@rocktimsaikia</a> :)
			</footer>
		</div>
	);
}

export default App;
