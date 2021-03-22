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
					<strong>24th &amp; 25th March, 2021</strong>.
					<br />
					<br />
		For a better virtual experience, time to be social. 
		<br />
		Go social and follow us on our social handles to be the first to know more about our sessions!
				</p>
			</div>
		</div>
	);
};

export default SpeakerSection;
