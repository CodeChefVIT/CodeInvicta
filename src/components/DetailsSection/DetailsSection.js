import React from "react";
import WindowBar from "../WindowBar/WindowBar";
import "./DetailsSection.css";

const DetailsSection = () => {
	return (
		<div className="details-window">
			<WindowBar />
			<div className="window-pane">
				<div>
					<h1 className="details-title">
						EITHER YOU RUN THE CODE OR THE CODE RUNS YOU
					</h1>
					<p className="details-content">
						No this isn’t your normal coding competition among your
						friends.
					</p>
					<p className="details-content">
						This is <strong>Code Invicta</strong>, an exceptional
						blend among{" "}
						<strong>all 4 CodeChef-VIT student chapters</strong>{" "}
						that involves coding, logic, and competition from all
						VIT campuses.{" "}
					</p>
					<p className="details-content">
						Think you’re fast enough and better than the rest?
					</p>
					<p className="details-content">
						Do you have the courage to risk it all?
					</p>
					<p className="details-content">
						Well, this is your chance to showcase your skills. Join
						us at this spectacular event during the{" "}
						<strong>Road to Devsoc!</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default DetailsSection;
