# react-country-dropdown

A simple react country selection dropdown.

[![npm](https://img.shields.io/npm/v/react-country-dropdown?color=bright)](https://npmjs.com/package/react-country-dropdown)

![Demo Screenshot](./screenshot.png)

## Install

```sh
npm i react-country-dropdown
```

## Usage

```js
import { ReactCountryDropdown } from 'react-country-dropdown'
import 'react-country-dropdown/dist/index.css'

const MyComponent = () => {
  const handleSelect = (country) => {
    console.log(country)
    /*
    {
        name: "United States of America",
        code: "US",
        capital: "Washington, D.C.",
        region: "Americas",
        latlng: [38, -97]
      }
    */
  }
  return <ReactCountryDropdown onSelect={handleSelect} countryCode='IN' />
  )
}
```

If the default country code is not set via the `countryCode` attribute, the default select country is `US`
