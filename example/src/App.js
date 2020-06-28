import React from 'react'

import { ReactCountryDropdown } from 'react-country-dropdown'
import 'react-country-dropdown/dist/index.css'

const App = () => {
  const handleSelect = (country) => {
    console.log(country)
  }

  return (
    <div>
      <ReactCountryDropdown onSelect={handleSelect} countryCode='AL' />
    </div>
  )
}

export default App
