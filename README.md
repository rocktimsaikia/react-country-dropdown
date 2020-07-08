# react-country-dropdown

> A simple dropdown menu for selecting countries :rocket:

![David](https://img.shields.io/david/rocktimsaikia/react-country-dropdown?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/rocktimsaikia/react-country-dropdown?style=for-the-badge) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-country-dropdown?style=for-the-badge) ![GitHub package.json version](https://img.shields.io/github/package-json/v/rocktimsaikia/react-country-dropdown?style=for-the-badge)

<div style="width:220px;margin:auto">
<img src="https://i.ibb.co/Dz2WxrN/react-country.png" style="height:100%;width:100%"/>
</div>

## Install

```bash
npm install --save react-country-dropdown
```

## Usage

```js
import React, { Component } from 'react'

import { ReactCountryDropdown } from 'react-country-dropdown'
import 'react-country-dropdown/dist/index.css'

const Example = () => {
  const handleSelect = (country) => {
    console.log(country)
    /* returns the details on selected country as an object
    	{
          name: "United States of America", 
          code: "US", 
          capital: "Washington, D.C.", 
          region: "Americas", 
          latlng: [38, -97]
        }
    */
  }
  return (
    <div>
      <ReactCountryDropdown onSelect={handleSelect} countryCode='IN' />
    </div>
  )
}
```

(If you dont select set a default country with "countryCode" ; Then by default the selected country will US.)

## License

MIT © [RocktimSaikia](https://github.com/RocktimSaikia)
