import React from "react";
import "./TitleSection.css";

const TitleSection = () => {
	return (
		<div className="title-section">
			<h1 className="main-title">CODE INVICTA</h1>
			<h2 className="main-subtitle">
				A competitive coding event in collaboration with the 4 VITs
			</h2>
			<div className="butbox">
				<button className="discord">
					<a href="https://discord.codechefvit.com" target="_blank" rel="noreferrer">
						<div className="centerly">
							<img src="https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png" alt="" />
							<p>&nbsp;Join Discord</p>
						</div>				
					</a>
				</button>
				<button className="cclogo">	
						<a href="https://www.codechef.com/CDIV2022" target="_blank" rel="noreferrer">
							<div className="centerly">
								<img src="/assets/cc-logo.png" alt="LOGO" />
								<p>&nbsp;Register</p>
							</div>		
						</a>
				</button>
			</div>
					
		</div>
	);
};

export default TitleSection;
