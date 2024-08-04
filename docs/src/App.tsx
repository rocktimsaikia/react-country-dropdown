// import { useState } from "react";
import { CodeBlock, CopyBlock, atomOneDark } from "react-code-blocks";
// import ReactCountryDropdown from "react-country-dropdown";
// import type { ICountry } from "react-country-dropdown";
import "./App.css";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

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
	// const [countryJson, setCountryJson] = useState<string>("");

	// const handleCountryChange = (country: ICountry) => {
	// 	const formattedCountry = JSON.stringify(country, null, 4);
	// 	setCountryJson(formattedCountry);
	// };

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

			{/* <div style={{ marginTop: "50px" }}> */}
			{/* 	<ReactCountryDropdown */}
			{/* 		onSelect={handleCountryChange} */}
			{/* 		defaultCountry="JP" */}
			{/* 	/> */}
			{/* </div> */}

			<div style={{ textAlign: "left", fontSize: "14px" }}>
				<div>
					<h2 style={{ textAlign: "left", marginBottom: "5px" }}>Usage:</h2>
					<CodeBlock text={codeString} language="jsx" theme={atomOneDark} />
				</div>
				{/* {countryJson && ( */}
				{/* 	<div> */}
				{/* 		<p> */}
				{/* 			The returned <code style={{ color: "orange" }}>`country`</code>{" "} */}
				{/* 			object : */}
				{/* 		</p> */}
				{/* 		<CodeBlock text={countryJson} language="json" theme={atomOneDark} /> */}
				{/* 	</div> */}
				{/* )} */}
			</div>

			<div style={{ marginTop: "50px", textAlign: "left" }}>
				<h2>API:</h2>
				The{" "}
				<code style={{ color: "orange", fontSize: "15px" }}>
					&lt;ReactCountryDropdown/&#62;
				</code>{" "}
				component accepts only two arguments:
				<ul>
					<li>
						<code style={{ color: "orange", fontSize: "15px" }}>onSelect</code>{" "}
						: A callback function that receives the selected{" "}
						<code style={{ color: "orange", fontSize: "15px" }}>"country"</code>{" "}
						object.
					</li>
					<li>
						<code style={{ color: "orange", fontSize: "15px" }}>
							defaultCountry
						</code>{" "}
						: A string value representing the default country code (
						<a
							href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"
							target="_blank"
							rel="noreferrer"
						>
							Alpha-2
						</a>
						).
					</li>
				</ul>
			</div>

			<div style={{ marginTop: "50px" }}>
				<h2 style={{ textAlign: "left", marginBottom: "5px" }}>Install:</h2>
				<div style={{ fontSize: "15px" }}>
					<CopyBlock text={installString} language="bash" theme={atomOneDark} />
				</div>
			</div>

			<footer>
				<a
					href="https://github.com/rocktimsaikia/react-country-dropdown"
					target="_blank"
					rel="noreferrer"
					style={{
						color: "rgba(255, 255, 255, 0.87)",
						fontSize: "16px",
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<GitHubLogoIcon height="18" width="18" />{" "}
					<span style={{ marginLeft: "6px" }}>Github</span>
				</a>
			</footer>
		</div>
	);
}

export default App;
