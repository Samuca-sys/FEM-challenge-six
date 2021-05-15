import React from "react";

import Navbar from "./Navbar";

import {useHistory} from "react-router-dom";

const Country = ({darkMode, setDarkMode, currentCountry}) => {
	const history = useHistory();

	const backHandler = () => {
		history.push("/");
	}
	return(
		<>
			<Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
			<div className={`country ${darkMode ? "country--dark" : ""}`}>
				<div onClick={backHandler} className={`country__button ${darkMode ? "country__button--dark" : ""}`}>
					{darkMode ? (
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" fill="white"/>
						</svg>

					) : (
							<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z" fill="#111517"/>
							</svg>
						)
					}
					<span className={`country__button__text ${darkMode ? "country__button__text--dark" : ""}`}>Back</span>
				</div>
				<div className={`country__container`}>
					<div className="country__container__image">
						<img src={currentCountry.flag} alt="flag"/>
					</div>
					<div className="country__container__text">
						<h4 className={`country__container__text__name ${darkMode ? "country__container__text__name--dark" : ""}`}>{currentCountry.name}</h4>
						<div className="country__container__info">
							<div>
								<p className={`${darkMode ? "country__container__info__text--dark" : ""}`}>Native Name: <span className={`${darkMode ? "country__container__info__text--dark" : ""}`}>{currentCountry.nativeName}</span></p>
								<p className={`${darkMode ? "country__container__info__text--dark" : ""}`}>Population: <span className={`${darkMode ? "country__container__info__text--dark" : ""}`}>{currentCountry.population}</span></p>
								<p className={`${darkMode ? "country__container__info__text--dark" : ""}`}>Region: <span className={`${darkMode ? "country__container__info__text--dark" : ""}`}>{currentCountry.region}</span></p>
								<p className={`${darkMode ? "country__container__info__text--dark" : ""}`}>Sub Region: <span className={`${darkMode ? "country__container__info__text--dark" : ""}`}>{currentCountry.subregion}</span></p>
								<p className={`${darkMode ? "country__container__info__text--dark" : ""}`}>Capital: <span className={`${darkMode ? "country__container__info__text--dark" : ""}`}>{currentCountry.capital}</span></p>
							</div>
							<div>
								<p className={`${darkMode ? "country__container__info__text--dark" : ""}`}>Top Level Domain: <span className={`${darkMode ? "country__container__info__text--dark" : ""}`}>{currentCountry.topLevelDomain[0]}</span></p>
								<p className={`${darkMode ? "country__container__info__text--dark" : ""}`}>Currencies: <span className={`${darkMode ? "country__container__info__text--dark" : ""}`}>{currentCountry.currencies[0].name}</span></p>
								<p className={`${darkMode ? "country__container__info__text--dark" : ""}`}>Languages: <span className={`${darkMode ? "country__container__info__text--dark" : ""}`}>{currentCountry.languages[0].name}</span></p>
							</div>
						</div>
						{currentCountry.borders.length > 0 ? (
							<div className="country__borders">
								<h6 className={`country__borders__header ${darkMode ? "country__borders__header--dark" : ""}`}>Borders Countries: </h6>
								<div className="country__borders__tags">
									{currentCountry.borders.map((border, index) => <span key={index} className={`country__borders__tag ${darkMode ? "country__borders__tag--dark" : ""}`}>{border}</span> )}
								</div>
							</div>
						) : (
							<div className="country__borders">
								<h6 className={`country__borders__header ${darkMode ? "country__borders__header--dark" : ""}`}>Borders Countries: </h6>
								<div className="country__borders__tags">
									<span className={`country__borders__tag ${darkMode ? "country__borders__tag--dark" : ""}`}>None</span>
								</div>
							</div>
						)
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default Country;