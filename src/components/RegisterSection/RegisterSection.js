import React, { useState } from "react";
import WindowBar from "../WindowBar/WindowBar";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import "./RegisterSection.css";

const RegisterSection = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [college, setCollege] = useState("");
	const [reg, setReg] = useState("");

	const { executeRecaptcha } = useGoogleReCaptcha();

	const submit = async () => {
		console.log(name, email, phone, college, reg);
		let captcha = await executeRecaptcha("/");

		let url = "https://techchronicle.herokuapp.com/codeInvicta/addUser";

		let data = {
			name,
			email,
			registration_number: reg,
			mobile_number: phone,
			campus: college,
			captcha,
		};

		try {
			await axios.post(url, data).then((res) => {
				// If success
				document.getElementById(
					"message-success"
				).innerHTML = `Confirmed! You’re in`;
			});
		} catch (error) {
			// If error
			document.getElementById(
				"message-err"
			).innerHTML = `Something wrong happened try again`;
			console.log(error);
		}
	};

	return (
		<div className="details-window">
			<WindowBar />
			<div className="window-pane light">
				<div>
					It takes utter pondering and expeditious analyzing
					capability to break the problems and unravel the mystery
					behind them.
				</div>
				<div>So are you ready for the challenge?</div>
				<div>We await you -</div>

				<div>Confirm your participation!</div>
				<div className="mt">
					<span className="terminal-success">Name:</span>
					<span className="terminal-blue">~$</span>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<span className="terminal-success">Email:</span>
					<span className="terminal-blue">~$</span>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label>
						<span className="terminal-success">Phone:</span>
						<span className="terminal-blue">~$</span>
					</label>
					<input
						type="text"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div>
					<span className="terminal-success">College:</span>
					<span className="terminal-blue">~$</span>
					<input
						type="text"
						value={college}
						onChange={(e) => setCollege(e.target.value)}
					/>
				</div>
				<div>
					<span className="terminal-success">Registration No.:</span>
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
			</div>
		</div>
	);
};

export default RegisterSection;
