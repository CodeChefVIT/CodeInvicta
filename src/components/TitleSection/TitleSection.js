import React from "react";
import "./TitleSection.css";

const TitleSection = () => {
	return (
		<div className="title-section">
			<h1 className="main-title">CODE INVICTA</h1>
			<h2 className="main-subtitle">
				A competitive coding event in collaboration with the 4 VITs
			</h2>
			<a
				href="https://codechefvit.com/discord"
				target="_blank"
				rel="noreferrer"
				className="discord"
			>
				<img src="https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png" alt="" />
				Join our Discord
			</a>
		</div>
	);
};

export default TitleSection;
