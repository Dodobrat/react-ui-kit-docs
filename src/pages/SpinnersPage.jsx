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
			<SpinnerLoader contrast />
			<SpinnerLoader contrast pigment='danger' />
			<br />
			<LineLoader />
			<br />
			<LineLoader contrast />
			<br />
			<LineLoader contrast pigment='success' />
			<br />
		</div>
	);
};

export default SpinnersPage;
