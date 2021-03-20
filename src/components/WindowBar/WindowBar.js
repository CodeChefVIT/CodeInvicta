import React from "react";
import "./WindowBar.css";

const WindowBar = ({ light, title }) => {
	return (
		<div className={`outer ${light ? "light" : "dark"}`}>
			<div className="dot red"></div>
			<div className="dot amber"></div>
			<div className="dot green"></div>
			<div className="titlebar">{title}</div>
		</div>
	);
};

export default WindowBar;
