import React from "react";

const Card = ({flag, name, population, region, capital}) => {
	return(
		<div className="card">
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