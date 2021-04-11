import { Skeleton } from "@dodobrat/react-ui-kit";
import React from "react";

const SkeletonPage = () => {
	return (
		<div>
			<h1>Skeleton Loaders</h1>
			<Skeleton />
			<br />
			<h1>Rounded Skeleton Loader</h1>
			<Skeleton flavor='rounded' />
			<br />
			<h1>Flat (Responsive) Skeleton Loader</h1>
			<Skeleton flavor={{ base: "flat", lg: "default" }} />
			<br />
			<h1>Pigmented Skeleton Loader</h1>
			<Skeleton pigment='info' />
		</div>
	);
};

export default SkeletonPage;
