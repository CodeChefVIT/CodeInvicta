import React from "react";
import "./PrizesSection.css";

const PrizesSection = () => {
	return (
		<>
			<div className="prizes-section">
				<div className="grid-section">
					<p className="prize-title prize-sub prize-rs">Prize Pool</p>
					<hr className="prize-divider" />
					<p className="prize-title prize-sub">&#8377;33,000</p>
				</div>
				<div className="grid-section">
					<p className="prize-title prize-sub prize-rs">
						Best Girl Coder
					</p>
					<hr className="prize-divider" />
					<p className="prize-title prize-sub">&#8377;2,500</p>
				</div>
				<div className="grid-section center">
					<p className="prize-title prize-sub p1">1st Prize: &#8377;10,000</p>
					<p className="prize-title prize-sub p2">2nd Prize: &#8377;7,000</p>
					<p className="prize-title prize-sub p3">3rd Prize: &#8377;5,000</p>
				</div>
				{/* <div className="grid-section">
					<p className="prize-title prize-sub prize-rs">
						Best Girl Coder
					</p>
					<hr className="prize-divider" />
					<p className="prize-title prize-sub">&#8377;TBD</p>
				</div> */}
				<div className="grid-section">
					<p className="prize-title prize-sub prize-rs">Best Fresher</p>
					<hr className="prize-divider" />
					<p className="prize-title prize-sub">&#8377;2,500</p>
				</div>
				<div className="grid-section centertext">
					<p className="prize-title prize-sub prize-rs">
					Top 2 VIT Coders
					</p>
					<hr className="prize-divider" />
					<p className="prize-title prize-sub">&#8377;3,000 Each</p>
				</div>
			</div>
		</>
	);
};

export default PrizesSection;
