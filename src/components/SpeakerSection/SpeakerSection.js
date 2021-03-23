import { Grid } from "@material-ui/core";
import React from "react";
import "./SpeakerSection.css";

const SpeakerSection = () => {
	return (
		<Grid container xs={11} md={8} spacing={2}>
			<Grid item xs={12}><div className="main-date sp-title">Speakers</div></Grid>
			<Grid item xs={12} sm={6}>
				<div className="speaker">
					<img src="/assets/speaker1.jpg" alt="Anoopam Mishra" />
					<div className="main-date name">Anoopam Mishra</div>
					<div className="desc">
						Software Engineer at Google || ICPC Asia West Finalist
						2020
					</div>
					<div className="date">24th March</div>
					<div className="topic">
						Topic- Code Optimisation and debugging
					</div>
				</div>
			</Grid>
			<Grid item xs={12} sm={6}>
				<div className="speaker">
					<img src="/assets/speaker2.jpg" alt="Aman Dhattarwal" />
					<div className="main-date name">Aman Dhattarwal</div>
					<div className="desc">YouTuber and Entrepreneur</div>
					<div className="date">25th March</div>
					<div className="topic">
						Topic- Roadmap for Competitive Coding and DSA
					</div>
				</div>
			</Grid>
		</Grid>
	);
};

export default SpeakerSection;
