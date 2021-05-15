import React from "react";

import {useHistory} from "react-router-dom";

const Card = ({flag, name, population, region, capital, darkMode, country, setCurrentCountry}) => {
	const history = useHistory();
	const cardHandler = () => {
		setCurrentCountry(country);
		history.push("/details");
	}
	return(
		<div onClick={cardHandler} className={`card ${darkMode ? "card--dark" : null}`}>
			<img className="card__flag" src={flag} alt="flag"/>
			<div className="card__info">
				<h4 className="card__info__name">{name}</h4>
				<p className="card__info__population">Population: <span>{population}</span></p>
				<p className="card__info__region">Region: <span>{region}</span></p>
				<p className="card__info__capital">Capital: <span>{capital}</span></p>
			</div>
		</div>
	)
}

export default Card;