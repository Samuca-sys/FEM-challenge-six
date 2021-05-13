import React, {useState, useEffect, useCallback} from "react";

import axios from "axios";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Card from "./components/Card";

import "./css/style.css";

const App = () => {
	const [flagInfo, setFlagInfo] = useState(null);
	const [flags, setFlags] = useState(["germany", "usa", "brazil", "iceland", "afghanistan", "åland islands", "albania", "algeria"]);

	const fetchFlags = useCallback(() => {
		let list = [];
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
		})
	}, [fetchFlags])

	useEffect(() => {
		console.log(Array.isArray(flagInfo));
	}, [flagInfo])
	return(
		<>
			{flagInfo ? (
				<>
					<Navbar/>
					<div className="container">
						<Search/>
						<div className="card-container">
							{
								flagInfo.map((country, index) => <Card key={index}/>)
							}
						</div>
					</div>
				</>
			) : null
			}
		</>
	)
}

export default App;