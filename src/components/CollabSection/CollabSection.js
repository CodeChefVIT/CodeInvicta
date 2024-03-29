import React from "react";
import "./CollabSection.css";

const CollabSection = () => {
	return (
		<div className="window-pane full-width">
			<div>
				<h1 className="details-title">
					A competitive coding event in collaboration with 4 VIT's
					CodeChef Chapters
				</h1>
				<div className="cc-grid">
					<img src="/assets/ccvellore.png" alt="" />
					<img src="/assets/ccchennai.jpg" alt="" />
					<img src="/assets/ccap.png" alt="" />
					<img src="/assets/ccbhopal.png" alt="" />
				</div>
				<p className="details-content text-center">
					Made with &#128153; by CodeChef-VIT Vellore
				</p>
			</div>
		</div>
	);
};

export default CollabSection;
