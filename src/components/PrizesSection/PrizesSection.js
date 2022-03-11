import React from "react";
import "./PrizesSection.css";

const PrizesSection = () => {
	return (
		<>
			<div className="prizes-section">
				<div className="grid-section">
					<p className="prize-title prize-sub prize-rs">&#8377;37K</p>
					<hr className="prize-divider" />
					<p className="prize-title prize-sub">Prize Pool</p>
				</div>
				<div className="grid-section">
					<p className="prize-title prize-sub prize-rs">
						Best Girl Coder
					</p>
					<hr className="prize-divider" />
					<p className="prize-title prize-sub">&#8377;3,000</p>
				</div>
				<div className="grid-section">
					<p className="prize-title prize-sub">1st Prize: &#8377; 15,000</p>
					<p className="prize-title prize-sub">2nd Prize: &#8377; 8,000</p>
					<p className="prize-title prize-sub">3rd Prize: &#8377; 5,000</p>
				</div>
				{/* <div className="grid-section">
					<p className="prize-title prize-sub prize-rs">
						Best Girl Coder
					</p>
					<hr className="prize-divider" />
					<p className="prize-title prize-sub">&#8377;TBD</p>
				</div> */}
				<div className="grid-section">
					<p className="prize-title prize-sub prize-rs">&#8377;3,000 Each</p>
					<hr className="prize-divider" />
					<p className="prize-title prize-sub">Top 2 Freshers</p>
				</div>
				<div className="grid-section centertext">
					<p className="prize-title prize-sub prize-rs">
						Best VIT Coder
					</p>
					<hr className="prize-divider" />
					<p className="prize-title prize-sub">&#8377;3,000</p>
				</div>
			</div>
		</>
	);
};

export default PrizesSection;
