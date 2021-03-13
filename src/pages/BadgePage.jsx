import { Badge, Button } from "@dodobrat/react-ui-kit";
import React from "react";

const BadgePage = () => {
	return (
		<div>
			<h1>Clickable Badge</h1>
			<Badge onClick={() => console.log("test")}>Clickable</Badge>
			<Badge onClick={() => console.log("big test")} pigment='primary' size='xl'>
				XL Clickable Badge
			</Badge>
			<h1>Rounded</h1>
			<Badge rounded>Rounded Badge</Badge>
			<Badge rounded pigment='info'>
				Rounded Badge
			</Badge>
			<Badge rounded contrast pigment='success'>
				Rounded Badge
			</Badge>
			<Badge rounded contrast pigment='success' size='xl'>
				Rounded XL Badge
			</Badge>
			<h1>Pigments</h1>
			<Badge>Badge</Badge>
			<Badge pigment='secondary'>Badge</Badge>
			<Badge pigment='success'>Badge</Badge>
			<Badge pigment='info'>Badge</Badge>
			<Badge pigment='warning'>Badge</Badge>
			<Badge pigment='danger'>Badge</Badge>
			<h1>Sizes</h1>
			<Badge size='xs'>Badge</Badge>
			<Badge size='sm'>Badge</Badge>
			<Badge size='md'>Badge</Badge>
			<Badge size='lg'>Badge</Badge>
			<Badge size='xl'>Badge</Badge>
			<h1>Custom Element</h1>
			<Badge as='div'>I am div</Badge>
			<Badge as='p'>I am p</Badge>
			<Badge as='code'>I am code</Badge>
			<Badge as='strong'>I am strong</Badge>
			<h1>Button</h1>
			<Button pigment={null}>
				Notification
				<Badge pigment='danger'>12</Badge>
			</Button>
			<br />
		</div>
	);
};

export default BadgePage;
