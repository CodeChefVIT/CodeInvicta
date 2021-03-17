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
				<img src="/assets/swags.svg" className="swag-img" alt="swags" />
				<hr className="prize-divider" />
				<p className="main-title prize-sub">Swags</p>
			</div>
			<div className="grid-section">
				{/* ADD IMAGE HERE */}
				<img src="/assets/brag.svg" className="swag-img" alt="swags" />
				<hr className="prize-divider" />
				<p className="main-title prize-sub brag">Bragging Rights</p>
			</div>
		</div>
	);
};

export default PrizesSection;
