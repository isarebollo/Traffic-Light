import React from "react";
import "./../../styles/index.css";


import TrafficLigth from "./TrafficLight.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="palo"> </div>
			<TrafficLigth></TrafficLigth>
		</div>
	);
};

export default Home;
