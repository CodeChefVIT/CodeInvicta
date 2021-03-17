import React from "react";
import "./PrizesSection.css";

const PrizesSection = () => {
	return (
		<div className="prizes-section">
			<div className="grid-section">
				<p className="main-title prize-sub prize-rs">Rs 10000</p>
				<hr className="prize-divider" />
				<p className="main-title prize-sub">Prizes</p>
			</div>
			<div className="grid-section">
				{/* ADD IMAGE HERE */}
				<p className="main-title prize-sub">Swags</p>
			</div>
			<div className="grid-section">
				{/* ADD IMAGE HERE */}
				<p className="main-title prize-sub">Bragging Rights</p>
			</div>
		</div>
	);
};

export default PrizesSection;
