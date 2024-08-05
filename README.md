# react-country-dropdown

A simple react country selection dropdown component.

> No external dependencies, just a clean functional component.

[![npm](https://img.shields.io/npm/dt/react-country-dropdown?color=bright)](https://npmjs.com/package/react-country-dropdown) [![npm](https://img.shields.io/npm/v/react-country-dropdown?color=bright)](https://npmjs.com/package/react-country-dropdown)

![Demo Screenshot](./screenshot.png)

## Install

```sh
npm i react-country-dropdown
```

## Usage

Check the full documentation and demo [here](https://rocktimsaikia.github.io/react-country-dropdown/).

```jsx
import ReactCountryDropdown from "react-country-dropdown";

const Example = () => {
	return (
		<ReactCountryDropdown
			onSelect={(country) => console.log(country.name)}
			defaultCountry="JP"
		/>
	);
};
```

## License

[MIT](./LICENSE) &copy; 2024 [Rocktim Saikia](https://github.com/rocktimsaikia)
