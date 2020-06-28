import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { CaretDownIcon } from './assets/caret-down'

export const ReactCountryDropdown = (props) => {
  const [Countries, setCountries] = useState([])
  const [CountriesCopy, setCountriesCopy] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [defaultCountry, setDefaultCountry] = useState({
    alpha2Code: '',
    alpha3Code: ''
  })

  const dropdownRef = useRef(null)

  useEffect(() => {
    defaultCountrySetter(props.countryCode)
    preFetchCountries().then((res) => {
      setCountries(res)
      setCountriesCopy(res)

      preloadImages().then((arr) => {
        arr.forEach((pic) => {
          const img = new Image()
          img.src = pic
        })
      })
    })

    document.addEventListener('mousedown', handleClickOutSide)
  }, [])

  const defaultCountrySetter = (d) => {
    preFetchCountries().then((countries) => {
      const defaultC = countries.filter(
        (i) => i.alpha2Code.toLowerCase() === d.toLowerCase()
      )
      setDefaultCountry({
        alpha2Code: defaultC[0].alpha2Code,
        alpha3Code: defaultC[0].alpha3Code
      })
    })
  }

  const preFetchCountries = async () => {
    const data = await fetch('https://restcountries.eu/rest/v2/all')
    const result = await data.json()
    return result
  }

  const handleClickOutSide = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false)
    }
  }

  const preloadImages = async () => {
    const mapIconArr = []
    Countries.map((i) => {
      mapIconArr.push(`https://restcountries.eu/data/${i.alpha3Code}.svg`)
    })
    return mapIconArr
  }

  const toggleDropDown = () => {
    /* reset all countries before closing */
    if (!open) {
      setCountries(CountriesCopy)
    }
    setOpen(!open)
  }

  const handleCountryClick = (i) => {
    const result = {
      name: i.name,
      code: i.alpha2Code,
      capital: i.capital,
      region: i.region,
      latlng: i.latlng
    }
    setDefaultCountry({
      alpha2Code: i.alpha2Code,
      alpha3Code: i.alpha3Code
    })
    /* Send the result as props on select*/
    setSelectedCountry(result)
    props.onSelect(result)

    /* Hide the dropdown menu on selecting a country */
    toggleDropDown()
  }

  const handleSearchInput = (e) => {
    const input = e.target.value.toLowerCase()
    let filteredCountries = CountriesCopy.filter((i) =>
      i.name.toLowerCase().includes(input.toLowerCase())
    )
    setCountries(filteredCountries)
  }

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.dropdown} onClick={toggleDropDown}>
        <img
          className={styles.country_flag}
          src={`https://restcountries.eu/data/${defaultCountry.alpha3Code.toLowerCase()}.svg`}
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
            {Countries.map((i, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleCountryClick(i)}
                  className={styles.dropdown_item}
                >
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
