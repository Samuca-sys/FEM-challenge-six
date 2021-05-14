import React, {useState, useEffect, useCallback} from "react";

import axios from "axios";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CardContainer from "./components/CardContainer";

import "./css/style.css";

const App = () => {
	const [flagInfo, setFlagInfo] = useState([]);
	const [flags, setFlags] = useState(["germany", "usa", "brazil", "iceland", "afghanistan", "åland islands", "albania", "algeria"]);

	const fetchFlags = useCallback(() => {
		const list = [];
		flags.forEach(async (flag) => {
			await axios.get(`https://restcountries.eu/rest/v2/name/${flag}?fullText=true`)
			.then((response) => {
				list.push(response.data[0]);	
			})
		})
		return new Promise((resolve, reject) => {
			try{
				setFlagInfo(list);
				resolve("Successfully updated the flagInfo state");
			}
			catch(err){
				reject(err);
			}
		})
	}, [flags]);

	useEffect(() => {
		fetchFlags().then((response) => {
			console.log(response);
		}).catch((response) => {
			console.log("Error: " + response);
		})
	}, [fetchFlags])
	return(
		<>
			<Navbar/>
			<div className="container">
				<Search/>
				<CardContainer flagInfo={flagInfo}/>
			</div>
		</>
	)
}

export default App;