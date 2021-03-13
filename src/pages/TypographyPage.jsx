import { Completed, Heading, Text } from "@dodobrat/react-ui-kit";
import React from "react";

const TypographyPage = () => {
	return (
		<div>
			<h1>Typography (fluent resize)</h1>
			<Heading>
				<Completed />
				Headings 1
			</Heading>
			<Heading as='h2'>
				<Completed />
				Headings 2
			</Heading>
			<Heading as='h3'>
				<Completed />
				Headings 3
			</Heading>
			<Heading as='h4'>
				<Completed />
				Headings 4
			</Heading>
			<Heading as='h5'>
				<Completed />
				Headings 5
			</Heading>
			<Heading as='h6'>
				<Completed />
				Headings 6
			</Heading>
			<Heading as='p'>
				<Completed />
				Headings as P
			</Heading>
			<h1>Text Element</h1>
			<Text>
				<Completed />
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ullam eum modi impedit distinctio doloremque saepe,
				sint laudantium atque facere.
			</Text>
		</div>
	);
};

export default TypographyPage;
