import { LineLoader, SpinnerLoader } from "@dodobrat/react-ui-kit";
import React from "react";

const SpinnersPage = () => {
	return (
		<div>
			<h1>Loaders / Spinners</h1>
			<SpinnerLoader size='xs' />
			<SpinnerLoader size='sm' pigment='danger' />
			<SpinnerLoader size='md' pigment='info' />
			<SpinnerLoader size='lg' pigment='success' />
			<SpinnerLoader size='xl' />
			<SpinnerLoader size={{ base: "xl", lg: "xs" }} pigment={{ base: "default", lg: "info" }} />
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
