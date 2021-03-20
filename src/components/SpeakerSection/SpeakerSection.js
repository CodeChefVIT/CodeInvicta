import React from "react";
import "./SpeakerSection.css";

const SpeakerSection = () => {
	return (
		<div className="card">
			{/* <div className="card-img">
				<img src="" alt="" />
			</div> */}
			<div className="card-body">
				<h1>Amazing Speaker sessions!</h1>
				<p className="details-content">
					We bring you a set of amazing webinars from the masters of
					programming on{" "}
					<strong>24th &amp; 25th March(time yet to be told)</strong>.
					<br />
					<br />
					So mark the date and be ready if you want to have a peaceful
					sleep :)
				</p>
			</div>
		</div>
	);
};

export default SpeakerSection;
