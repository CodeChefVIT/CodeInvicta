import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import React from "react";
import "./SpeakerSection.css";

const SpeakerSection = () => {
	return (
		<Grid className="mainDiv" container xs={11} md={8} spacing={2}>
			<Grid item xs={12}><div className="main-date sp-title underline">SPEAKERS</div><div className="main-date sp-title">&nbsp;</div></Grid>
			{/* <Grid item xs={12} sm={6} className="card">
				<Card sx={{ minWidth: 200 }}>
				<CardContent style={{
					backgroundImage: "url('/assets/Slide.png')",
					backgroundSize: "cover", }}>
				<div className="speaker">
					<img src="/assets/speaker1.jpg" alt="Anoopam Mishra" />
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						<div className="main-date name Anoopam">Anoopam Mishra</div>
        			</Typography>
					<Typography sx={{ fontSize: 14 }}>
						<div className="Anoopam job">
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
					<div className="date desc1 "> <i class="fa fa-calendar"> 19th March 2022</i></div>
					</Typography>
				</div>
				</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} className="card">
				<Card sx={{ minWidth: 275 }}>
				<CardContent style={{
					backgroundImage: "url('/assets/Slide.png')",
					backgroundSize: "cover", }}>
				<div className="speaker card2">
					<img src="/assets/speaker2.jpg" alt="Aman Dhattarwal" />
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						<div className="main-date name Aman">Aman Dhattarwal</div>
        			</Typography>
					<Typography sx={{ fontSize: 14 }}>
					<div className="Aman job">YouTuber and Entrepreneur</div>
					<div className="desc1">___________________________</div>
					</Typography>
					<Typography sx={{ fontSize: 14 }}>
					<div className="topic desc">
						Topic- Roadmap for Competitive Coding
					</div>
					<div className="date desc1 "> <i class="fa fa-calendar"> 20th March 2022</i></div>
					</Typography>
				</div>
				</CardContent>
				</Card>
			</Grid> */}

			<Grid item xs={12}>
				<div className="main-date sp-title1">TO BE ANNOUNCED</div>
				<div className="main-date sp-title1">&nbsp;</div>
				<div className="main-date sp-title1">(PS: STAY TUNED FOR A SURPRISE)</div>
			</Grid>
		</Grid>
	);
};

export default SpeakerSection;
