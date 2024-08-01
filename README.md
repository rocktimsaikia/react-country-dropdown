# react-country-dropdown

A simple react country selection dropdown component.

> [!IMPORTANT]
> This GitHub branch contains experimental and ongoing changes that \
> have not been released yet. Please do not follow the guide below. \
> For the working documentation of the current stable version, \
> refer to the [npm page](https://npmjs.com/package/react-country-dropdown) of the package.

[![npm](https://img.shields.io/npm/v/react-country-dropdown?color=bright)](https://npmjs.com/package/react-country-dropdown)

![Demo Screenshot](./screenshot.png)

## Install

```sh
npm i react-country-dropdown
```

## Usage

```jsx
import ReactCountryDropdown from "react-country-dropdown";

const Example = () => {
	return (
		<ReactCountryDropdown
			onSelect={(country) => console.log(country.name)}
			defaultCountry="IN"
		/>
	);
};
```

> If the default country code is not set via the `countryCode` attribute, the default select country is `US`
