/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import TitleSection from "./components/TitleSection/TitleSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import PrizesSection from "./components/PrizesSection/PrizesSection";
import RegisterSection from "./components/RegisterSection/RegisterSection";
import SpeakerSection from "./components/SpeakerSection/SpeakerSection";
import CollabSection from "./components/CollabSection/CollabSection";
import TimelineSection from "./components/TimelineSection/TimelineSection";
import zIndex from "@material-ui/core/styles/zIndex";
import { Rotate90DegreesCcw, Transform } from "@material-ui/icons";

const url = (name, wrap = false) =>
	`${
		wrap ? "url(" : ""
	}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
		wrap ? ")" : ""
	}`;

function App() {
	return (
		<div className="App">
			<Parallax pages={5}>
				<ParallaxLayer
					offset={0.3}
					speed={-0.3}
					//   onClick={() => this.parallax.scrollTo(1)}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* <img src={url("server")} style={{ width: "20%" }} /> */}
					<h2 className="main-date">19th - 20th March 2022</h2>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={1}
					style={{ backgroundColor: "#805E73" }}
				/>

				<ParallaxLayer
					offset={3.3}
					speed={0.5}
					style={{ backgroundColor: "#805E73" }}
				/>

				<ParallaxLayer
					offset={2}
					speed={1}
					style={{ backgroundColor: "#4b79b3" }}
				/>

				<ParallaxLayer
					offset={1.4}
					speed={-0.8}
					style={{
						PointerEvent: "none",
						zIndex: "200"
					}}
				>
					<img
						className="bablu"
						src="/assets/BabluStill.png"
					/>
				</ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={0}
					factor={4.5}
					style={{
						backgroundImage: "url('/assets/stars.svg')",
						backgroundSize: "cover",
					}}
				/>

				<ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "20%",
							marginLeft: "55%",
						}}
					/>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "10%",
							marginLeft: "15%",
						}}
					/>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1.75}
					speed={0.5}
					style={{ opacity: 0.1 }}
				>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "20%",
							marginLeft: "70%",
						}}
					/>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "20%",
							marginLeft: "40%",
						}}
					/>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "10%",
							marginLeft: "10%",
						}}
					/>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "20%",
							marginLeft: "75%",
						}}
					/>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1.6}
					speed={-0.1}
					style={{ opacity: 0.4 }}
				>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "20%",
							marginLeft: "60%",
						}}
					/>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "25%",
							marginLeft: "30%",
						}}
					/>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "10%",
							marginLeft: "80%",
						}}
					/>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2.6}
					speed={0.4}
					style={{ opacity: 0.6 }}
				>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "20%",
							marginLeft: "5%",
						}}
					/>
					<img
						src="/assets/cloud.svg"
						style={{
							display: "block",
							width: "15%",
							marginLeft: "75%",
						}}
					/>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2.5}
					speed={-0.4}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						pointerEvents: "none",
					}}
				></ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={-0.3}
					style={{
						backgroundSize: "80%",
						backgroundPosition: "center",
					}}
				/>

				<ParallaxLayer
					offset={1}
					speed={0.7}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<DetailsSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={1.9}
					speed={0.9}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<SpeakerSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={1}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<PrizesSection />
				</ParallaxLayer>
				<ParallaxLayer
					offset={2.9}
					speed={0.6}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<TimelineSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={3.4}
					speed={0.7}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* <img src={url("clients-main")} style={{ width: "40%" }} /> */}
					<RegisterSection />
				</ParallaxLayer>
				<ParallaxLayer
					offset={4}
					speed={0.5}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<CollabSection />
				</ParallaxLayer>
				<ParallaxLayer
					offset={0}
					speed={-0.1}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<TitleSection />
				</ParallaxLayer>
				<ParallaxLayer
					offset={0}
					speed={0}
					style={{
						display: "flex",
						justifyContent: "space-between",
						width: "calc(100% - 40px)",
						padding: 20,
						margin: "auto",
						height: 50,
					}}
				>
					<a
						href="https://devsoc.codechefvit.com"
						target="_blank"
						rel="noreferrer"
					>
						<img className="devsoc-logo" src="/assets/devsocLogo.png" />
					</a>

					<a
						href="https://codechefvit.com"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/assets/ccwhite.svg"
							className="codechef-logo"
						/>
					</a>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default App;
