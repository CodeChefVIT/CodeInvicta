import React, { useState } from "react";
import WindowBar from "../WindowBar/WindowBar";

import "./RegisterSection.css";

const RegisterSection = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [college, setCollege] = useState("");
	const [reg, setReg] = useState("");

	const submit = () => {
		console.log(name, email, phone, college, reg);
		// If success
		document.getElementById('message-success').innerHTML = `Confirmed! You’re in`;
		// If error
		document.getElementById('message-err').innerHTML = `Something wrong happened try again`;
	};

	return (
		<div className="details-window">
			<WindowBar />
			<div className="window-pane light">
				<code>
					<div>
						It takes utter pondering and expeditious analyzing
						capability to break the problems and unravel the mystery
						behind them.
					</div>
					<div>So are you ready for the challenge?</div>
					<div>Confirm your participation!</div>
					<div style={{ marginTop: 25 }}>
						<span className="terminal-success">Name:</span>
						<span className="terminal-blue">~$</span>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div style={{ marginTop: 5 }}>
						<span className="terminal-success">Email:</span>
						<span className="terminal-blue">~$</span>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div style={{ marginTop: 5 }}>
						<span className="terminal-success">Phone:</span>
						<span className="terminal-blue">~$</span>
						<input
							type="text"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<div style={{ marginTop: 5 }}>
						<span className="terminal-success">College:</span>
						<span className="terminal-blue">~$</span>
						<input
							type="text"
							value={college}
							onChange={(e) => setCollege(e.target.value)}
						/>
					</div>
					<div style={{ marginTop: 5 }}>
						<span className="terminal-success">
							Registration No.:
						</span>
						<span className="terminal-blue">~$</span>
						<input
							type="text"
							value={reg}
							onChange={(e) => setReg(e.target.value)}
						/>
					</div>
					<button onClick={submit}>&gt;&gt; Submit</button>
					<div id="message-err" className="terminal-err"></div>
					<div id="message-success" className="terminal-success"></div>
				</code>
			</div>
		</div>
	);
};

export default RegisterSection;
