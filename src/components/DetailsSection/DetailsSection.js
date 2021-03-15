import React from "react";
import WindowBar from "../WindowBar/WindowBar";
import "./DetailsSection.css";

const DetailsSection = () => {
	return (
		<div className="details-window">
			<WindowBar />
			<div className="window-pane"></div>
		</div>
	);
};

export default DetailsSection;
