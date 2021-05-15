import React, {useRef} from "react";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = ({darkMode, search, setSearch, dropdown, setDropdown, filter, setFilter, fetchCountries, fetchCountriesBasedOnRegion}) => {
	const searchRef = useRef(null);

	const dropdownHandler = () => {
		setDropdown(!dropdown);
	}

	const searchHandler = () => {
		setFilter("Filter by Region");
		setSearch(searchRef.current.value);
		fetchCountries();
	}

	const filterHandler = (region) => {
		setFilter(region);
		fetchCountriesBasedOnRegion(region);
	}

	return(
		<div className="search">
			<div className="search__container">
				<div className={`search__icon ${darkMode ? "search__icon--dark" : ""}`}>
					{darkMode ? (
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="white"/>
						</svg>
					) : (
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="search">
						<path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="#848484"/>
						</g>
						</svg>
						)
					}
				</div>
				<input onChange={searchHandler} ref={searchRef} className={`search__bar ${darkMode ? "search__bar--dark" : ""}`} placeholder="Search for a country..." value={search}/>
			</div>
			<div className={`search__dropdown ${darkMode ? "search__dropdown--dark" : ""}`} onClick={dropdownHandler}>
				<span>{filter}</span>
				<FontAwesomeIcon icon={faAngleDown}/>
				<div className={`search__dropdown__menu ${dropdown ? "" : "hidden"}`}>
					<span onClick={() => filterHandler("Africa")}>Africa</span>
					<span onClick={() => filterHandler("Americas")}>America</span>
					<span onClick={() => filterHandler("Asia")}>Asia</span>
					<span onClick={() => filterHandler("Europe")}>Europe</span>
					<span onClick={() => filterHandler("Oceania")}>Oceania</span>
				</div>
			</div>
		</div>
	)
}

export default Search;