import { Badge, Button } from "@dodobrat/react-ui-kit";
import React from "react";

const BadgePage = () => {
	return (
		<div>
			<h1>Clickable Badge</h1>
			<Badge onClick={() => console.log("test")}>Clickable</Badge>
			<Badge
				onClick={() => console.log("big test")}
				sizing='xl'
				className='filled'
				pigment={{ base: null, lg: "danger" }}
				pigmentColor={{ base: "danger", lg: null }}>
				XL Clickable Badge
			</Badge>
			<br />
			<h1>Badge Utils</h1>
			<Badge flavor='flat'>Flat Badge</Badge>
			<Badge flavor='rounded'>Rounded Badge</Badge>
			<Badge pigment='default' elevation='medium'>
				Elevated Badge
			</Badge>

			<br />
			<h1>Pigments</h1>
			<Badge>Badge</Badge>
			<Badge pigment='secondary'>Badge</Badge>
			<Badge pigment='success'>Badge</Badge>
			<Badge pigment='info'>Badge</Badge>
			<Badge pigment='warning'>Badge</Badge>
			<Badge pigment='danger'>Badge</Badge>
			<br />
			<h1>Sizes</h1>
			<Badge sizing='xs'>Badge</Badge>
			<Badge sizing='sm'>Badge</Badge>
			<Badge sizing='md'>Badge</Badge>
			<Badge sizing='lg'>Badge</Badge>
			<Badge sizing='xl'>Badge</Badge>
			<p>Responsive sizing</p>
			<Badge sizing={{ base: "sm", md: "lg", xl: "xs" }}>Badge</Badge>
			<br />
			<h1>Custom Element</h1>
			<Badge as='div'>I am div</Badge>
			<Badge as='p'>I am p</Badge>
			<Badge as='code'>I am code</Badge>
			<Badge as='strong'>I am strong</Badge>
			<h1>Button</h1>
			<Button pigment='secondary' iconEnd={<Badge pigment='danger'>12</Badge>}>
				Notification
			</Button>
			<br />
		</div>
	);
};

export default BadgePage;
