import React from 'react'

import { ReactCountryDropdown } from 'react-country-dropdown'
import 'react-country-dropdown/dist/index.css'

const App = () => {
  const handleSelect = (country) => {
    console.log(country)
  }

  return <ReactCountryDropdown onSelect={handleSelect} countryCode='AL' />
}

export default App
