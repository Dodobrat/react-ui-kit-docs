import { LineLoader, SpinnerLoader } from "@dodobrat/react-ui-kit";
import React from "react";

const SpinnersPage = () => {
	return (
		<div>
			<h1>Loaders / Spinners</h1>
			<SpinnerLoader sizing='xs' />
			<SpinnerLoader sizing='sm' pigment='danger' />
			<SpinnerLoader sizing='md' pigment='info' />
			<SpinnerLoader sizing='lg' pigment='success' />
			<SpinnerLoader sizing='xl' />
			<SpinnerLoader sizing={{ base: "xl", lg: "xs" }} pigment={{ base: "default", lg: "info" }} />
			<SpinnerLoader pigment='danger' />
			<br />
			<LineLoader pigment={{ base: "default", lg: "info" }} />
			<br />
			<LineLoader pigment='info' />
			<br />
			<LineLoader pigment='success' />
			<br />
		</div>
	);
};

export default SpinnersPage;
