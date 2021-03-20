import React from "react";
import "./PrizesSection.css";

const PrizesSection = () => {
	return (
		<>
			<div className="prizes-section">
				<div className="grid-section">
					<p className="main-title prize-sub prize-rs">Rs 20K</p>
					<hr className="prize-divider" />
					<p className="main-title prize-sub">Prize Pool</p>
				</div>
				<div className="grid-section">
					<p className="main-title prize-sub">1st Prize: Rs 7K</p>
					<p className="main-title prize-sub">2nd Prize: Rs 5K</p>
					<p className="main-title prize-sub">3rd Prize: Rs 3K</p>
				</div>
				<div className="grid-section">
					<p className="main-title prize-sub prize-rs">
						CodeChef Laddus
					</p>
					<hr className="prize-divider" />
					<p className="main-title prize-sub">250 for Each Winner</p>
				</div>
				<div className="grid-section">
					<p className="main-title prize-sub prize-rs">2.5K Each</p>
					<hr className="prize-divider" />
					<p className="main-title prize-sub">Top 2 Freshers</p>
				</div>
			</div>
		</>
	);
};

export default PrizesSection;
