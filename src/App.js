/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import TitleSection from "./components/TitleSection/TitleSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";

const url = (name, wrap = false) =>
	`${
		wrap ? "url(" : ""
	}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
		wrap ? ")" : ""
	}`;

function App() {
	return (
		<div className="App">
			<Parallax pages={3}>
				<ParallaxLayer
					offset={0}
					speed={0}
					style={{ display: "flex", justifyContent: "flex-start" }}
				>
					<img src="/assets/devsoc.svg" className="devsoc-logo" />
				</ParallaxLayer>
				<ParallaxLayer
					offset={0}
					speed={0}
					style={{ display: "flex", justifyContent: "flex-end" }}
				>
					<img src="/assets/ccwhite.png" className="codechef-logo" />
				</ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={-0.1}
					//   onClick={() => this.parallax.scrollTo(1)}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* <img src={url("server")} style={{ width: "20%" }} /> */}
					<TitleSection />
				</ParallaxLayer>
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
					<h2 className="main-date">27th March 2021</h2>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={1}
					style={{ backgroundColor: "#805E73" }}
				/>

				<ParallaxLayer
					offset={2}
					speed={1}
					style={{ backgroundColor: "#87BCDE" }}
				/>

				<ParallaxLayer
					offset={0}
					speed={0}
					factor={3}
					style={{
						backgroundImage: url("stars", true),
						backgroundSize: "cover",
					}}
				/>

				<ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
					<img
						src={url("cloud")}
						style={{
							display: "block",
							width: "20%",
							marginLeft: "55%",
						}}
					/>
					<img
						src={url("cloud")}
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
						src={url("cloud")}
						style={{
							display: "block",
							width: "20%",
							marginLeft: "70%",
						}}
					/>
					<img
						src={url("cloud")}
						style={{
							display: "block",
							width: "20%",
							marginLeft: "40%",
						}}
					/>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
					<img
						src={url("cloud")}
						style={{
							display: "block",
							width: "10%",
							marginLeft: "10%",
						}}
					/>
					<img
						src={url("cloud")}
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
						src={url("cloud")}
						style={{
							display: "block",
							width: "20%",
							marginLeft: "60%",
						}}
					/>
					<img
						src={url("cloud")}
						style={{
							display: "block",
							width: "25%",
							marginLeft: "30%",
						}}
					/>
					<img
						src={url("cloud")}
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
						src={url("cloud")}
						style={{
							display: "block",
							width: "20%",
							marginLeft: "5%",
						}}
					/>
					<img
						src={url("cloud")}
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
				>
					<img src={url("earth")} style={{ width: "60%" }} />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={-0.3}
					style={{
						backgroundSize: "80%",
						backgroundPosition: "center",
						// backgroundImage: url("clients", true),
					}}
				/>

				<ParallaxLayer
					offset={1}
					speed={0.1}
					//   onClick={() => this.parallax.scrollTo(2)}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<DetailsSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={-0}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* <img src={url("clients-main")} style={{ width: "40%" }} /> */}
				</ParallaxLayer>

				<ParallaxLayer
					offset={1.4}
					speed={-0.8}
					style={{ pointerEvents: "none" }}
				>
					<img
						src={url("satellite4")}
						style={{ width: "15%", marginLeft: "80%" }}
					/>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default App;
