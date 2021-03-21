import { ProgressRing, ProgressBar } from "@dodobrat/react-ui-kit";
import React, { useEffect, useState } from "react";

const ProgressPage = () => {
	const [randomProgress, setRandomProgress] = useState(0);

	const getRandomArbitrary = (min, max) => {
		return (Math.random() * (max - min) + min).toFixed(0);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setRandomProgress(getRandomArbitrary(0, 100));
		}, 3000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div>
			<h1>No Label</h1>
			<ProgressRing value={60} />
			<br />
			<h1>ProgressRing Label Values + Decimals</h1>
			<ProgressRing value={60} labeled />
			<ProgressRing max={900} value={160} labeled labelValue='count' pigment='info' />
			<ProgressRing max={900} value={360} labeled labelValue='count + %' pigment='secondary' />
			<ProgressRing max={96123} value={96123} labeled labelValue='count + %' decimals={2} pigment='danger' />
			<br />
			<h1>Flat ProgressRing</h1>
			<ProgressRing max={900} value={160} labeled labelValue='count' pigment='info' flat />
			<br />
			<h1>Sizing ProgressRing</h1>
			<ProgressRing value={randomProgress} labeled labelValue='count + %' pigment='info' decimals={2} size={140} strokeWidth={10} />
			<ProgressRing max={900} value={160} labeled labelValue='count' pigment='info' flat size={100} strokeWidth={20} />
			<br />
			<h1>without Track</h1>
			<ProgressRing withTrack={false} max={900} value={160} labeled labelValue='count' pigment='info' size={100} />
			<br />
			<h1>Counter Clockwise</h1>
			<ProgressRing counterClockWise max={900} value={160} labeled labelValue='count + %' pigment='info' size={100} />
			<br />
			<h1>No Label</h1>
			<ProgressBar value={10} />
			<h1>Progress Bar Label Positions</h1>
			<ProgressBar value={10} labeled labelPosition='bottom' />
			<ProgressBar value={20} labeled pigment='info' labelPosition='left' />
			<ProgressBar value={30} labeled pigment='danger' />
			<ProgressBar value={40} labeled pigment='success' labelPosition='right' />
			<br />
			<h1>Progress Bar Label Values</h1>
			<ProgressBar value={10} labeled labelValue='%' />
			<ProgressBar value={20} labeled pigment='info' labelValue='count' />
			<ProgressBar value={30} labeled pigment='danger' labelValue='count + %' />
			<ProgressBar max={10000} value={2450} labeled pigment='info' labelValue='count' />
			<ProgressBar max={12345} value={4756} labeled pigment='danger' labelValue='count + %' />
			<br />
			<h3>Decimals</h3>
			<ProgressBar max={12345} value={4756} decimals={6} labeled pigment='danger' labelValue='count + %' />
			<br />
			<h1>Roundness</h1>
			<ProgressBar max={12345} value={4756} rounded decimals={2} labeled pigment='info' labelValue='count + %' />
			<ProgressBar
				max={100}
				value={randomProgress}
				flat
				labelAlwaysVisible
				decimals={2}
				labeled
				pigment='info'
				labelValue='count + %'
			/>
			<br />
			<h1>No Track</h1>
			<ProgressBar withTrack={false} max={12345} value={4756} decimals={2} labeled pigment='info' labelValue='count + %' />
		</div>
	);
};

export default ProgressPage;
