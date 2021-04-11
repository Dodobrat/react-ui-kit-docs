import { Breadcrumbs, Container } from "@dodobrat/react-ui-kit";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const BreadcrumbsPage = () => {
	const BreadcrumbSeparatorTest = () => {
		return <div>👽</div>;
	};

	return (
		<div>
			<h1>Breadcrumbs</h1>
			<Breadcrumbs>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<h1>Braedcrumb Sizes</h1>
			<Breadcrumbs size='xs'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs size='sm'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs size='md'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs size='lg'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs size='xl'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<h1>Contained Breadcrumbs (supports pigments and elevation)</h1>
			<Breadcrumbs pigment='default' elevation='subtle'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs pigment='primary'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs pigment='secondary' flavor='rounded'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs pigment='info' flavor='flat'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs pigment={{ base: "success", lg: null }} pigmentColor={{ base: null, lg: "success" }}>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs pigment='warning'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs pigment='danger'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<h1>Custom Separators</h1>
			<Breadcrumbs separator='>'>
				<Breadcrumbs.Item>App</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs separator='🤖'>
				<Breadcrumbs.Item>
					<Link to='/breadcrumbs/'>App</Link>
				</Breadcrumbs.Item>
				<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
				<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Breadcrumbs separator={<BreadcrumbSeparatorTest />}>
				<Breadcrumbs.Item>
					<Link to='/breadcrumbs/'>App</Link>
				</Breadcrumbs.Item>
				<Breadcrumbs.Item>
					<Link to='/breadcrumbs/epic'>Epicness</Link>
				</Breadcrumbs.Item>
				<Breadcrumbs.Item>
					<Link to='/breadcrumbs/gg'>GG</Link>
				</Breadcrumbs.Item>
			</Breadcrumbs>
			<br />
			<Switch>
				<Route path='/breadcrumbs/epic'>
					<Container>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero?</Container>
				</Route>
				<Route path='/breadcrumbs/gg'>
					<Container>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam aperiam recusandae placeat veniam excepturi
						suscipit voluptatem soluta libero animi, quasi adipisci, culpa molestias perspiciatis incidunt, labore fuga
						distinctio voluptatum? Soluta tenetur corrupti asperiores corporis necessitatibus minus ab voluptatem, esse
						provident. Nesciunt totam similique voluptatum! Exercitationem doloremque voluptatum laudantium inventore,
						blanditiis totam velit laboriosam delectus animi nam commodi, nemo ex necessitatibus placeat assumenda vel nobis
						dicta repellat. Velit accusamus ad commodi, quas laborum, fuga perspiciatis consequuntur similique ducimus
						asperiores rem eos enim beatae, impedit numquam! Dolorum minus sed dolor similique delectus aspernatur, veniam unde
						sapiente quam laborum itaque laboriosam sunt?
					</Container>
				</Route>
			</Switch>
		</div>
	);
};

export default BreadcrumbsPage;
