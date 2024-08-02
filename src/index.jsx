import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { CaretDownIcon } from "./icons";
import jsonCountries from "./countries.json";

const countriesList = jsonCountries;

function ReactCountryDropdown(props) {
	const [countries, setCountries] = useState(countriesList);
	const [currentCountry, setCurrentCountry] = useState({});
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const dropdownRef = useRef(null);

	useEffect(() => {
		setDefaultCountry(props.countryCode ? props.countryCode : "US");
		document.addEventListener("mousedown", handleClickOutSide);
	}, [props]);

	const setDefaultCountry = (d) => {
		const thisCountry = countries.filter(
			(country) => country.alpha2Code.toLowerCase() === d.toLowerCase(),
		);
		setCurrentCountry(thisCountry[0]);
	};

	const handleClickOutSide = (e) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
			setIsDropdownOpen(false);
		}
	};

	const toggleDropDown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleCountryClick = (country) => {
		const result = {
			name: country?.name,
			code: country?.alpha2Code,
			capital: country?.capital,
			region: country?.region,
			latlng: country?.latlng,
		};
		setCurrentCountry(country);

		if (props.onSelect) {
			props.onSelect(result);
		}

		/* Hide the dropdown menu on selecting a country */
		toggleDropDown();
	};

	const handleSearchInput = (e) => {
		const input = e.target.value.toLowerCase().trim();
		if (input === "") {
			setCountries(countriesList);
			return;
		}
		const filteredCountries = countries.filter((i) => {
			return i.name.toLowerCase().startsWith(input);
		});
		setCountries(filteredCountries);
	};

	return (
		<div className={styles.container} ref={dropdownRef}>
			<div className={styles.dropdown} onClick={toggleDropDown}>
				<img
					className={styles.country_flag}
					src={currentCountry?.flag}
					alt={currentCountry?.name}
				/>
				<span className={styles.selected_country}>
					{currentCountry.alpha2Code}
				</span>
				<CaretDownIcon point={isDropdownOpen ? "up" : "down"} />
			</div>

			{isDropdownOpen && (
				<div className={styles.dropdown_items_wrapper}>
					<CaretDownIcon point="up_white" />
					<div className={styles.input_wrapper}>
						<input
							onChange={(e) => handleSearchInput(e)}
							className={styles.country_search}
							type="text"
							placeholder="search country here"
						/>
					</div>

					<div className={styles.dropdown_items}>
						{countries.map((c) => {
							return (
								<div
									key={c.name}
									onClick={() => handleCountryClick(c)}
									className={styles.dropdown_item}
								>
									<img className={styles.country_flag} src={c.flag} alt="" />
									<span className={styles.dropdown_item_title}> {c.name}</span>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}

export default ReactCountryDropdown;
