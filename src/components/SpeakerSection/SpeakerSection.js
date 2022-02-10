import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import React from "react";
import "./SpeakerSection.css";

const SpeakerSection = () => {
	return (
		<Grid className="mainDiv" container xs={11} md={8} spacing={2}>
			<Grid item xs={12}><div className="main-date sp-title">Speakers</div></Grid>
			<Grid item xs={12} sm={6} className="card">
				<Card sx={{ minWidth: 200 }} className="card2">
				<CardContent>
				<div className="speaker">
					<img src="/assets/speaker1.jpg" alt="Anoopam Mishra" />
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						<div className="main-date name Anoopam">Anoopam Mishra</div>
        			</Typography>
					<Typography sx={{ fontSize: 14 }}>
						<div className="desc">
							Software Engineer at Google
						</div>
						<div className="desc">
						___________________________
						</div>
					</Typography>
					<Typography sx={{ fontSize: 14 }}>
					<div className="topic desc">
						Topic- Code Optimisation and debugging
					</div>
					<div className="date desc "> <i class="fa fa-calendar"> 24th March 2022</i></div>
					</Typography>
				</div>
				</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} className="card">
				<Card sx={{ minWidth: 275 }}>
				<CardContent>
				<div className="speaker card2">
					<img src="/assets/speaker2.jpg" alt="Aman Dhattarwal" />
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						<div className="main-date name">Aman Dhattarwal</div>
        			</Typography>
					<Typography sx={{ fontSize: 14 }}>
					<div className="desc1">YouTuber and Entrepreneur</div>
					<div className="desc1">___________________________</div>
					</Typography>
					<Typography sx={{ fontSize: 14 }}>
					<div className="topic desc1">
						Topic- Roadmap for Competitive Coding and DSA
					</div>
					<div className="date desc1 "> <i class="fa fa-calendar"> 25th March 2022</i></div>
					</Typography>
				</div>
				</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default SpeakerSection;
