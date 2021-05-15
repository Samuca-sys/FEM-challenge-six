import React from "react";

import Card from "./Card";

const CardContainer = ({darkMode, countries, setCurrentCountry}) => {
	return(
		<div className="card-container">
			{
				countries && countries.map((country, index) => 
					<Card 
					key={index} 
					flag={country.flag}
					name={country.name}
					population={country.population}
					region={country.region}
					capital={country.capital}
					darkMode={darkMode}
					country={country}
					setCurrentCountry={setCurrentCountry}
					/>
				)
			}
		</div>
	)
}

export default CardContainer;