# react-country-dropdown

A simple react country selection dropdown.

[![npm](https://img.shields.io/npm/v/react-country-dropdown?color=bright)](https://npmjs.com/package/react-country-dropdown)

![Screenshot from 2023-03-25 12-43-36](https://user-images.githubusercontent.com/33410545/232977021-ace4a22d-6a05-4a62-80f7-0d6c34b9c0c8.png)

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
