import React from "react";

import Card from "./Card";

const CardContainer = ({flagInfo}) => {
	return(
		<div className="card-container">
			{
				flagInfo && flagInfo.map((country, index) => 
					<Card 
					key={index} 
					flag={country.flag}
					name={country.name}
					population={country.population}
					region={country.region}
					capital={country.capital}
					/>
				)
			}
		</div>
	)
}

export default CardContainer;