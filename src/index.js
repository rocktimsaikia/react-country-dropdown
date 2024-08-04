import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import jsonCountries from "./countries.json";
import { CaretDownIcon } from "./icons";
import styles from "./styles.module.css";
const countriesList = jsonCountries;
function ReactCountryDropdown({ defaultCountry = "IN", onSelect }) {
    const [countries, setCountries] = useState(countriesList);
    const [currentCountry, setCurrentCountry] = useState();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const setDefaultCountry = (d) => {
        const thisCountry = countries.filter((country) => country.alpha2Code.toLowerCase() === d.toLowerCase());
        setCurrentCountry(thisCountry[0]);
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
        onSelect(result);
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
    const handleClickOutSide = (e) => {
        if (dropdownRef.current &&
            !dropdownRef.current?.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    };
    useEffect(() => {
        setDefaultCountry(defaultCountry);
        document.addEventListener("mousedown", handleClickOutSide);
    }, [defaultCountry]);
    return (_jsxs("div", { className: styles.container, ref: dropdownRef, children: [_jsxs("div", { className: styles.dropdown, onClick: toggleDropDown, children: [_jsx("img", { className: styles.country_flag, src: currentCountry?.flag, alt: currentCountry?.name }), _jsx("span", { className: styles.selected_country, children: currentCountry?.alpha2Code }), _jsx(CaretDownIcon, { point: isDropdownOpen ? "up" : "down" })] }), isDropdownOpen && (_jsxs("div", { className: styles.dropdown_items_wrapper, children: [_jsx(CaretDownIcon, { point: "up_white" }), _jsx("div", { className: styles.input_wrapper, children: _jsx("input", { onChange: (e) => handleSearchInput(e), className: styles.country_search, type: "text", placeholder: "search country here", autoFocus: true }) }), _jsx("div", { className: styles.dropdown_items, children: countries.map((c) => {
                            return (_jsxs("div", { onClick: () => handleCountryClick(c), className: styles.dropdown_item, children: [_jsx("img", { className: styles.country_flag, src: c.flag, alt: "" }), _jsxs("span", { className: styles.dropdown_item_title, children: [" ", c.name] })] }, c.name));
                        }) })] }))] }));
}
export default ReactCountryDropdown;
