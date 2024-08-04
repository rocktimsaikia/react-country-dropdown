import { ChangeEvent, useEffect, useRef, useState } from "react";
import jsonCountries from "./countries.json";
import { CaretDownIcon } from "./icons";
import styles from "./styles.module.css";

const countriesList = jsonCountries;

type CountryJsonObject = (typeof jsonCountries)[number];

interface ICountry {
	name: string;
	code: string;
	capital: string;
	region: string;
	latlng: Array<number>;
}

interface Props {
	defaultCountry?: string;
	onSelect: (country: ICountry) => void;
}

function ReactCountryDropdown({ defaultCountry = "IN", onSelect }: Props) {
	const [countries, setCountries] = useState(countriesList);
	const [currentCountry, setCurrentCountry] = useState<CountryJsonObject>();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

	const setDefaultCountry = (d: string) => {
		const thisCountry = countries.filter(
			(country) => country.alpha2Code.toLowerCase() === d.toLowerCase(),
		);
		setCurrentCountry(thisCountry[0]);
	};

	const toggleDropDown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleCountryClick = (country: CountryJsonObject) => {
		const result: ICountry = {
			name: country?.name,
			code: country?.alpha2Code,
			capital: country?.capital as string,
			region: country?.region,
			latlng: country?.latlng as number[],
		};
		setCurrentCountry(country);

		onSelect(result);

		/* Hide the dropdown menu on selecting a country */
		toggleDropDown();
	};

	const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
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

	const handleClickOutSide = (e: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current?.contains(e.target as Node)
		) {
			setIsDropdownOpen(false);
		}
	};

	useEffect(() => {
		setDefaultCountry(defaultCountry);
		document.addEventListener("mousedown", handleClickOutSide);
	}, [defaultCountry]);

	return (
		<div className={styles.container} ref={dropdownRef}>
			<div className={styles.dropdown} onClick={toggleDropDown}>
				<img
					className={styles.country_flag}
					src={currentCountry?.flag}
					alt={currentCountry?.name}
				/>
				<span className={styles.selected_country}>
					{currentCountry?.alpha2Code}
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
							autoFocus={true}
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
