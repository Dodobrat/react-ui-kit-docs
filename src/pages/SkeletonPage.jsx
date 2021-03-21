import { Skeleton } from "@dodobrat/react-ui-kit";
import React from "react";

const SkeletonPage = () => {
	return (
		<div>
			<h1>Skeleton Loaders</h1>
			<Skeleton />
			<br />
			<h1>Rounded Skeleton Loader</h1>
			<Skeleton rounded />
			<br />
			<h1>Flat Skeleton Loader</h1>
			<Skeleton flat />
			<br />
			<h1>Pigmented Skeleton Loader</h1>
			<Skeleton pigment='info' />
		</div>
	);
};

export default SkeletonPage;
