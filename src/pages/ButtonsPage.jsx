import { Button, ButtonGroup, Container } from "@dodobrat/react-ui-kit";
import React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";

const ButtonsPage = () => {
	return (
		<div>
			<div id='btn-groups'>
				<h1>Button Group</h1>
				<ButtonGroup vertical groupProps={{ title: "This is a vertical button group" }}>
					<Button>test1</Button>
					<Button pigment='danger'>test2</Button>
					<Button>test3</Button>
					<Button>test3</Button>
				</ButtonGroup>
				<br />
				<br />
				<ButtonGroup vertical flavor={{ base: "flat", lg: "rounded" }}>
					<Button>test1</Button>
					<Button pigment='danger'>test2</Button>
					<Button>test3</Button>
					<Button>test3</Button>
				</ButtonGroup>
				<br />
				<br />
				<ButtonGroup pigmentColor={{ base: "primary", lg: null }} pigment={{ base: null, lg: "warning" }}>
					<Button>test1</Button>
					<Button>test2</Button>
				</ButtonGroup>
				<br />
				<br />
				<ButtonGroup flavor='flat'>
					<Button>test1</Button>
					<Button pigment='danger'>test2</Button>
				</ButtonGroup>
				<br />
				<br />
				<ButtonGroup flavor='rounded'>
					<Button>test1</Button>
					<Button>test2</Button>
					<Button pigment='danger'>test3</Button>
				</ButtonGroup>
				<br />
				<br />
				<ButtonGroup wide>
					<Button>test1</Button>
					<Button pigment='danger'>test2</Button>
					<Button pigment='success'>test3</Button>
				</ButtonGroup>
			</div>
			<br />
			<div id='btn-roundnes'>
				<h1>flavor='flat' Button:</h1>
				<Button sizing='xs' flavor='flat' pigment='secondary' hoverPigment='primary'>
					I am a Button
				</Button>
				<Button sizing='sm' flavor='flat' pigment='warning' hoverPigment='danger' activePigment='info' active>
					I am a Button
				</Button>
				<Button sizing='md' flavor='flat'>
					I am a Button
				</Button>
				<Button sizing='lg' flavor='flat'>
					I am a Button
				</Button>
				<Button sizing='xl' flavor='flat'>
					I am a Button
				</Button>
				<h1>flavor='rounded' Button:</h1>
				<Button sizing='xs' flavor='rounded'>
					I am a Button
				</Button>
				<Button sizing='sm' flavor='rounded'>
					I am a Button
				</Button>
				<Button sizing='md' flavor='rounded'>
					I am a Button
				</Button>
				<Button sizing='lg' flavor='rounded'>
					I am a Button
				</Button>
				<Button sizing='xl' flavor='rounded'>
					I am a Button
				</Button>
				<br />
				<h1>Round Button:</h1>
				<Button sizing='xs' flavor='rounded' equalDimensions></Button>
				<Button sizing='sm' flavor='rounded' equalDimensions></Button>
				<Button sizing='md' flavor='rounded' equalDimensions></Button>
				<Button sizing='lg' flavor='rounded' equalDimensions></Button>
				<Button sizing='xl' flavor='rounded' equalDimensions></Button>
				<Button sizing='xl' flavor='rounded' isLoading equalDimensions></Button>
				<h1>Square Button:</h1>
				<Button sizing='xs' flavor='flat' equalDimensions></Button>
				<Button sizing='sm' flavor='flat' equalDimensions></Button>
				<Button sizing='md' flavor='flat' equalDimensions></Button>
				<Button sizing='lg' flavor='flat' equalDimensions></Button>
				<Button sizing='xl' flavor='flat' equalDimensions></Button>
				<Button sizing='xl' flavor='flat' isLoading equalDimensions></Button>
			</div>
			<br />
			<div id='btn-utils'>
				<h1>RenderAs different elements</h1>
				<Button as='div'>I am a Div</Button>
				<Button as='span'>I am a Span</Button>
				<Button as='code'>I am a Code elem</Button>
				<Button as='p'>I am a P elem</Button>

				<Button as={Link} to='/about'>
					I am a React Router Link
				</Button>
				<Button as={NavLink} to='/users' activeClassName='dui__btn--active' isLoading>
					I am a React Router NavLink
				</Button>

				<Switch>
					<Route path='/about'>
						<Container>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero?</Container>
					</Route>
					<Route path='/users'>
						<Container>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam aperiam recusandae placeat veniam
							excepturi suscipit voluptatem soluta libero animi, quasi adipisci, culpa molestias perspiciatis incidunt, labore
							fuga distinctio voluptatum? Soluta tenetur corrupti asperiores corporis necessitatibus minus ab voluptatem, esse
							provident. Nesciunt totam similique voluptatum! Exercitationem doloremque voluptatum laudantium inventore,
							blanditiis totam velit laboriosam delectus animi nam commodi, nemo ex necessitatibus placeat assumenda vel nobis
							dicta repellat. Velit accusamus ad commodi, quas laborum, fuga perspiciatis consequuntur similique ducimus
							asperiores rem eos enim beatae, impedit numquam! Dolorum minus sed dolor similique delectus aspernatur, veniam
							unde sapiente quam laborum itaque laboriosam sunt?
						</Container>
					</Route>
				</Switch>

				<h1>Active Btn</h1>
				<Button active={true}>I am a Button</Button>
				<h1>Disable Spongy effect</h1>
				<Button spongy={false}>I am a Button</Button>
				<h1>Show focus on click</h1>
				<Button keyboardOnlyFocusRing={false}>I am a Button</Button>
				<h1>Wide Button:</h1>
				<Button wide>I am a Button</Button>
				<h1>Left Aligned Button:</h1>
				<Button wide leftAlignContent>
					I am a Button
				</Button>
				<h1>Overflow ellipsis Button: *Parent must have Overflow: hidden</h1>
				<Button unWrapText>Lorem ipsum</Button>
			</div>
			<br />
			<div id='btn-sizes'>
				<h1>Button sizes:</h1>
				<Button sizing='xs'>I am a XSmall Button</Button>
				<Button sizing='sm'>I am a Small Button</Button>
				<Button sizing='md'>I am a Medium Button</Button>
				<Button sizing='lg'>I am a Large Button</Button>
				<Button sizing='xl'>I am a XLarge Button</Button>
				<br />
				<h1>Loading sizes:</h1>
				<Button isLoading sizing='xs'>
					I am a XSmall Button
				</Button>
				<Button isLoading sizing='sm'>
					I am a Small Button
				</Button>
				<Button isLoading sizing='md'>
					I am a Medium Button
				</Button>
				<Button isLoading sizing='lg'>
					I am a Large Button
				</Button>
				<Button isLoading sizing='xl'>
					I am a XLarge Button
				</Button>
			</div>
			<br />
			<div id='btns-pigments'>
				<h1>Button Text Colors:</h1>
				<Button pigment={null} pigmentColor='primary'>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='secondary'>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='success'>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='info'>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='warning'>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='danger'>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='none'>
					I am a Button
				</Button>
				<h1>Button Colors:</h1>
				<Button>I am a Button</Button>
				<Button pigment='secondary'>I am a Button</Button>
				<Button pigment='success'>I am a Button</Button>
				<Button pigment='info'>I am a Button</Button>
				<Button pigment='warning'>I am a Button</Button>
				<Button pigment='danger'>I am a Button</Button>
				<Button pigment='none'>I am a Button</Button>
				<Button href='https://google.com'>Go to Google</Button>
			</div>
			<br />
			<div id='isLoading-btns'>
				<h1>Loading Button Text Colors:</h1>
				<Button pigment={null} pigmentColor='primary' isLoading>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='secondary' isLoading>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='success' isLoading>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='info' isLoading>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='warning' isLoading>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='danger' isLoading>
					I am a Button
				</Button>
				<Button pigment={null} pigmentColor='none' isLoading>
					I am a Button
				</Button>
				<h1>Loading Button colors:</h1>
				<Button isLoading>I am a Button</Button>
				<Button isLoading pigment='secondary'>
					I am a Button
				</Button>
				<Button isLoading pigment='success'>
					I am a Button
				</Button>
				<Button isLoading pigment='info'>
					I am a Button
				</Button>
				<Button isLoading pigment='warning'>
					I am a Button
				</Button>
				<Button isLoading pigment='danger'>
					I am a Button
				</Button>
				<Button isLoading pigment='none'>
					I am a Button
				</Button>
			</div>
		</div>
	);
};

export default ButtonsPage;
