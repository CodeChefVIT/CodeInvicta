import React from "react";
import "./WindowBar.css";

const WindowBar = ({ light }) => {
	return (
		<div className={`outer ${light ? "light" : "dark"}`}>
			<div className="dot red"></div>
			<div className="dot amber"></div>
			<div className="dot green"></div>
		</div>
	);
};

export default WindowBar;
