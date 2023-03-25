import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { CaretDownIcon } from './assets/caret-down'

export const ReactCountryDropdown = (props) => {
  const [countries, setCountries] = useState([])
  const [countriesCopy, setCountriesCopy] = useState([])
  const [open, setOpen] = useState(false)
  const [defaultCountry, setDefaultCountry] = useState({})

  const dropdownRef = useRef(null)

  useEffect(() => {
    defaultCountrySetter(props.countryCode ? props.countryCode : 'US')
    preFetchCountries().then((res) => {
      console.log({ res })
      setCountries(res)
      setCountriesCopy(res)
    })

    document.addEventListener('mousedown', handleClickOutSide)
  }, [])

  const defaultCountrySetter = (d) => {
    preFetchCountries().then((countries) => {
      const defaultC = countries.filter(
        (country) => country.alpha2Code.toLowerCase() === d.toLowerCase()
      )
      setDefaultCountry(defaultC[0])
    })
  }

  const preFetchCountries = async () => {
    const data = await fetch('https://restcountries.com/v2/all')
    const result = await data.json()
    return result
  }

  const handleClickOutSide = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false)
    }
  }

  const toggleDropDown = () => {
    /* reset all countries before closing */
    if (!open) {
      setCountries(countriesCopy)
    }
    setOpen(!open)
  }

  const handleCountryClick = (country) => {
    const result = {
      name: country?.name,
      code: country?.alpha2Code,
      capital: country?.capital,
      region: country?.region,
      latlng: country?.latlng
    }
    setDefaultCountry(country)

    if (props.onSelect) {
      props.onSelect(result)
    }

    /* Hide the dropdown menu on selecting a country */
    toggleDropDown()
  }

  const handleSearchInput = (e) => {
    const input = e.target.value.toLowerCase()
    let filteredCountries = countriesCopy.filter((i) =>
      i.name.toLowerCase().includes(input.toLowerCase())
    )
    setCountries(filteredCountries)
  }

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.dropdown} onClick={toggleDropDown}>
        <img
          className={styles.country_flag}
          src={defaultCountry?.flag}
          alt={defaultCountry?.name}
        />
        <span className={styles.selected_country}>
          {defaultCountry.alpha2Code}
        </span>
        <CaretDownIcon point={open ? 'up' : 'down'} />
      </div>

      {open && (
        <div className={styles.dropdown_items_wrapper}>
          <CaretDownIcon point='up_white' />
          <div className={styles.input_wrapper}>
            <input
              onChange={(e) => handleSearchInput(e)}
              className={styles.country_search}
              type='text'
              placeholder='search coutries...'
            />
          </div>

          <div className={styles.dropdown_items}>
            {countries.map((i, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleCountryClick(i)}
                  className={styles.dropdown_item}>
                  <img className={styles.country_flag} src={i.flag} alt='' />
                  <span className={styles.dropdown_item_title}> {i.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
