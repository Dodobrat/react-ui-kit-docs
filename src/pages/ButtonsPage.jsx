import { Button, ButtonGroup, Completed, Container, Sun } from "@dodobrat/react-ui-kit";
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
				<ButtonGroup vertical rounded>
					<Button>test1</Button>
					<Button pigment='danger'>test2</Button>
					<Button>test3</Button>
					<Button>test3</Button>
				</ButtonGroup>
				<ButtonGroup contrast>
					<Button>test1</Button>
					<Button pigment='danger'>test2</Button>
				</ButtonGroup>
				<ButtonGroup flat>
					<Button>test1</Button>
					<Button pigment='danger'>test2</Button>
				</ButtonGroup>
				<ButtonGroup rounded>
					<Button>test1</Button>
					<Button>test2</Button>
					<Button pigment='danger'>test3</Button>
				</ButtonGroup>
				<ButtonGroup wide>
					<Button>test1</Button>
					<Button pigment='danger'>test2</Button>
					<Button pigment='success'>test3</Button>
				</ButtonGroup>
			</div>
			<br />
			<div id='btn-roundnes'>
				<h1>Flat Button:</h1>
				<Button size='xs' flat>
					I am a Button
				</Button>
				<Button size='sm' flat>
					I am a Button
				</Button>
				<Button size='md' flat>
					I am a Button
				</Button>
				<Button size='lg' flat>
					I am a Button
				</Button>
				<Button size='xl' flat>
					I am a Button
				</Button>
				<h1>Rounded Button:</h1>
				<Button size='xs' rounded>
					I am a Button
				</Button>
				<Button size='sm' rounded>
					I am a Button
				</Button>
				<Button size='md' rounded>
					I am a Button
				</Button>
				<Button size='lg' rounded>
					I am a Button
				</Button>
				<Button size='xl' rounded>
					I am a Button
				</Button>
				<br />
				<h1>Round Button:</h1>
				<Button size='xs' round>
					<Sun className='btn__icon' />
				</Button>
				<Button size='sm' round>
					<Sun className='btn__icon' />
				</Button>
				<Button size='md' round>
					<Sun className='btn__icon' />
				</Button>
				<Button size='lg' round>
					<Sun className='btn__icon' />
				</Button>
				<Button size='xl' round>
					<Sun className='btn__icon' />
				</Button>
			</div>
			<br />
			<div id='btn-utils'>
				<h1>RenderAs different elements</h1>
				<Button as='div'>I am a Div</Button>
				<Button as='span'>I am a Span</Button>
				<Button as='code'>I am a Code elem</Button>

				<Button as={Link} to='/about'>
					I am a React Router Link
				</Button>
				<Button as={NavLink} to='/users' activeClassName='dui__btn--active' loading>
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
				<Button wide pigment='primary'>
					I am a Button
				</Button>
				<h1>Left Aligned Button:</h1>
				<Button pigment='primary' wide leftAlignContent>
					I am a Button
				</Button>
				<h1>Overflow ellipsis Button: *Parent must have Overflow: hidden</h1>
				<Button pigment='primary' unWrapText>
					Lorem ipsum
				</Button>
			</div>
			<br />
			<div id='btn-sizes'>
				<h1>Button sizes:</h1>
				<Button size='xs'>
					<Completed />I am a XSmall Button
				</Button>
				<Button size='sm'>
					<Completed />I am a Small Button
				</Button>
				<Button size='md'>
					<Completed />I am a Medium Button
				</Button>
				<Button size='lg'>
					<Completed />I am a Large Button
				</Button>
				<Button size='xl'>
					<Completed />I am a XLarge Button
				</Button>
				<br />
				<h1>Loading sizes:</h1>
				<Button loading size='xs'>
					I am a XSmall Button
				</Button>
				<Button loading size='sm'>
					I am a Small Button
				</Button>
				<Button loading size='md'>
					I am a Medium Button
				</Button>
				<Button loading size='lg'>
					I am a Large Button
				</Button>
				<Button loading size='xl'>
					I am a XLarge Button
				</Button>
			</div>
			<br />
			<div id='btns-pigments'>
				<h1>Contrast Button Colors:</h1>
				<Button contrast>I am a Button</Button>
				<Button contrast pigment='secondary'>
					I am a Button
				</Button>
				<Button contrast pigment='success'>
					I am a Button
				</Button>
				<Button contrast pigment='info'>
					I am a Button
				</Button>
				<Button contrast pigment='warning'>
					I am a Button
				</Button>
				<Button contrast pigment='danger'>
					I am a Button
				</Button>
				<Button contrast pigment={null}>
					I am a Button
				</Button>
				<br />
				<h1>Button Colors:</h1>
				<Button>I am a Button</Button>
				<Button pigment='secondary'>I am a Button</Button>
				<Button pigment='success'>I am a Button</Button>
				<Button pigment='info'>I am a Button</Button>
				<Button pigment='warning'>I am a Button</Button>
				<Button pigment='danger'>I am a Button</Button>
				<Button pigment={null}>I am a Button</Button>
				<Button href='https://google.com'>Go to Google</Button>
			</div>
			<br />
			<div id='loading-btns'>
				<h1>Loading Button colors:</h1>
				<Button loading>I am a Button</Button>
				<Button loading pigment='secondary'>
					I am a Button
				</Button>
				<Button loading pigment='success'>
					I am a Button
				</Button>
				<Button loading pigment='info'>
					I am a Button
				</Button>
				<Button loading pigment='warning'>
					I am a Button
				</Button>
				<Button loading pigment='danger'>
					I am a Button
				</Button>
				<br />
				<Button contrast loading>
					I am a Button
				</Button>
				<Button contrast loading pigment='secondary'>
					I am a Button
				</Button>
				<Button contrast loading pigment='success'>
					I am a Button
				</Button>
				<Button contrast loading pigment='info'>
					I am a Button
				</Button>
				<Button contrast loading pigment='warning'>
					I am a Button
				</Button>
				<Button contrast loading pigment='danger'>
					I am a Button
				</Button>
			</div>
		</div>
	);
};

export default ButtonsPage;
