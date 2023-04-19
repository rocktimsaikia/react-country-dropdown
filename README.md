# react-country-dropdown

> A simple dropdown menu for selecting countries

[![npm](https://img.shields.io/npm/v/react-country-dropdown?color=bright)](https://npmjs.com/package/react-country-dropdown)

![Screenshot from 2023-03-25 12-43-36](https://user-images.githubusercontent.com/33410545/232977021-ace4a22d-6a05-4a62-80f7-0d6c34b9c0c8.png)


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
