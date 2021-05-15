import React, {useState, useEffect, useCallback} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CardContainer from "./components/CardContainer";
import Country from "./components/Country";

import "./css/style.css";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [currentCountry, setCurrentCountry] = useState(null);
	const [search, setSearch] = useState("");
	const [darkMode, setDarkMode] = useState(false);
	const [dropdown, setDropdown] = useState(true);
	const [filter, setFilter] = useState("Filter by Region");

	const fetchCountries = useCallback(async () => {
		let searchTags;
		if(search === ""){
			const searchTemp = "germany, United States of America, brazil, iceland, afghanistan, åland, albania, algeria";
			searchTags = searchTemp.split(", ");
		}
		else{
			searchTags = search.split(", ");
		}
		const searchResults = [];
		await axios.get(`https://restcountries.eu/rest/v2/all`)
		.then((response) => {
			searchTags.forEach((tag) => {
				const result = response.data.filter((country) => country.name.includes(tag.charAt(0).toUpperCase() + tag.slice(1)));
				result.forEach((country) => {
					searchResults.push(country);
				})
			})
			searchResults.forEach(async (country, index) => {
				for(let i = 0; i < country.borders.length; i++){
					await axios.get(`https://restcountries.eu/rest/v2/alpha/${country.borders[i]}`)
					.then((response) => {
						country.borders[i] = response.data.name;
					})
				}
			})
			setCountries(searchResults);
		})
	}, [search]);

	useEffect(() => {
		fetchCountries();
	}, [fetchCountries])

	const fetchCountriesBasedOnRegion = async (region) => {
		await axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
		.then((response) => {
			const searchResults = response.data;
			searchResults.forEach(async (country, index) => {
				for(let i = 0; i < country.borders.length; i++){
					await axios.get(`https://restcountries.eu/rest/v2/alpha/${country.borders[i]}`)
					.then((response) => {
						country.borders[i] = response.data.name;
					})
				}
			})
			setCountries(searchResults);
		})
	}

	return(
		<Router>
			<Switch>
				<Route path="/" exact>
					<Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
					<div className={`container ${darkMode ? "container--dark" : ""}`}>
						<Search darkMode={darkMode} search={search} setSearch={setSearch} dropdown={dropdown} setDropdown={setDropdown} filter={filter} setFilter={setFilter} fetchCountries={fetchCountries} fetchCountriesBasedOnRegion={fetchCountriesBasedOnRegion}/>
						<CardContainer darkMode={darkMode} countries={countries} setCurrentCountry={setCurrentCountry}/>
					</div>
				</Route>
				<Route path="/details">
	    			{
	    				currentCountry ? (
	    					<Country darkMode={darkMode} setDarkMode={setDarkMode} currentCountry={currentCountry}/>
	    				) : <code className="error">No country has been selected</code>
	    			}
			   	</Route>
			   	<Route>
			   		<code className="error">404: page not found!</code>
			    </Route>
			</Switch>
		</Router>
	)
}

export default App;