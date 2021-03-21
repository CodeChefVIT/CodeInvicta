import {
	ComputerOutlined,
	ListAltOutlined,
	Person,
} from "@material-ui/icons";
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import "./TimelineSection.css";

const TimelineSection = () => {
	return (
		<div className="timeline-section">
			<Timeline align="alternate">
				<TimelineItem>
					<TimelineOppositeContent>
						<span className="timeline-sub">20th March 2021</span>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot
							style={{
								border: "2px solid white",
								background: "transparent",
							}}
						>
							<ListAltOutlined />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent className="timeline-div">
						<div>
							<h1 className="text-style">Registrations Start</h1>
							<h3>Make sure to fill the form below!</h3>
						</div>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<span className="timeline-sub">
							24th March 2021
							{/* (x PM - x PM) */}
						</span>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot
							style={{
								border: "2px solid white",
								background: "transparent",
							}}
						>
							<Person />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent className="timeline-div">
						<div>
							<h1 className="text-style">Session #1 </h1>
							<h3>A talk by a renowned industry expert</h3>
						</div>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<span className="timeline-sub">
							25th March 2021
							{/* (x PM - x PM) */}
						</span>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot
							style={{
								border: "2px solid white",
								background: "transparent",
							}}
						>
							<Person />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent className="timeline-div">
						<div>
							<h1 className="text-style">Session #2 </h1>
							<h3>Get to know something new!</h3>
						</div>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<span className="timeline-sub">
							26th March 2021 (9pm - 12am)
						</span>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot
							style={{
								border: "2px solid white",
								background: "transparent",
							}}
						>
							<ComputerOutlined />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<div>
							<h1 className="text-style">Contest</h1>
							<h3>Get to work and solve all the problems!</h3>
						</div>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	);
};

export default TimelineSection;
