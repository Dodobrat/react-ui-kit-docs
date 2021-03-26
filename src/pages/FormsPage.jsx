import {
	Button,
	Card,
	Container,
	Flex,
	Form,
	FormControl,
	Heading,
	Input,
	TextArea,
	User,
	Mail,
	Lock,
	CheckboxComponent,
	Checkbox,
	Switch,
	SwitchGroup,
	Radio,
} from "@dodobrat/react-ui-kit";
import React from "react";

const FormsPage = () => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<div>
			<Card>
				<Card.Body>
					<Heading as='h6'>Contact Us</Heading>
					<Form onSubmit={onSubmit}>
						<Flex spacingY='xs'>
							<Flex.Col col={{ xs: 6 }}>
								<FormControl label='Name' htmlFor='name' hintMsg='Name can not be longer than 50 characters'>
									<Input name='name' preffix={<User />} placeholder='Enter Name' />
								</FormControl>
							</Flex.Col>
							<Flex.Col col={{ xs: 6 }}>
								<FormControl label='E-mail' htmlFor='email'>
									<Input name='email' type='email' preffix={<Mail />} placeholder='Enter E-mail' />
								</FormControl>
							</Flex.Col>
							<Flex.Col col={{ xs: 12 }}>
								<FormControl label='Message' htmlFor='message'>
									<TextArea name='message' maxLength={200} />
								</FormControl>
							</Flex.Col>
							<Flex.Col>
								<Button type='submit'>Submit</Button>
							</Flex.Col>
						</Flex>
					</Form>
				</Card.Body>
			</Card>
			<br />
			<hr />
			<br />
			<Container size='xs' spacingX={null}>
				<Card flat>
					<Card.Body>
						<Heading as='h6' centered>
							Register
						</Heading>
						<Form onFormSubmit={({ values }) => console.log(values)}>
							<Flex spacingY='xs'>
								<Flex.Col col={{ xs: 6 }}>
									<FormControl label='First Name' htmlFor='first_name'>
										<Input name='first_name' preffix={<User />} placeholder='First Name' />
									</FormControl>
								</Flex.Col>
								<Flex.Col col={{ xs: 6 }}>
									<FormControl label='Last Name' htmlFor='last_name'>
										<Input name='last_name' preffix={<User />} placeholder='Last Name' />
									</FormControl>
								</Flex.Col>
								<Flex.Col col={{ xs: 12 }}>
									<FormControl label='E-mail' htmlFor='reg-email'>
										<Input name='email' id='reg-email' type='email' preffix={<Mail />} placeholder='Enter E-mail' />
									</FormControl>
								</Flex.Col>
								<Flex.Col col={{ xs: 6 }}>
									<FormControl label='Password' htmlFor='password'>
										<Input name='password' type='password' preffix={<Lock />} placeholder='Enter Password' />
									</FormControl>
								</Flex.Col>
								<Flex.Col col={{ xs: 6 }}>
									<FormControl label='Confirm Password' htmlFor='confirm_password'>
										<Input name='confirm_password' type='password' preffix={<Lock />} placeholder='Confirm Password' />
									</FormControl>
								</Flex.Col>
								<Flex.Col col={{ xs: 12 }}>
									<FormControl label='Upload Avatar' htmlFor='avatar'>
										<Input name='avatar' type='file' preffix={<User />} placeholder='Add Picture' />
									</FormControl>
								</Flex.Col>
								<Flex.Col col={{ xs: 12 }}>
									<FormControl label='Student' htmlFor='is_student'>
										<Switch name='is_student'>I am a Student</Switch>
									</FormControl>
								</Flex.Col>
								<Flex.Col style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
									<CheckboxComponent name='auto_logout'>Remember me</CheckboxComponent>
									<Button type='submit' className='mlauto'>
										Submit
									</Button>
								</Flex.Col>
								<Input name='remember_me' type='hidden' />
							</Flex>
						</Form>
					</Card.Body>
				</Card>
			</Container>

			<br />
			<hr />
			<br />

			<Card>
				<Card.Header>
					<Heading as='h6' className='mb0'>
						All Input Types Form submit
					</Heading>
				</Card.Header>
				<Card.Body>
					<Form id='all-types-form' onFormSubmit={({ values }) => console.log(values)}>
						<h3>Default(Text)</h3>
						<Input name='text' placeholder='Input text here...' />
						<h3>Number</h3>
						<Input name='number' type='number' />
						<h3>Email</h3>
						<Input name='mail' type='email' suffix='@gmail.com' />
						<h3>Password</h3>
						<Input name='pass' type='password' />
						<h3>Search</h3>
						<Input name='search' type='search' />
						<h3>File</h3>
						<Input name='file' type='file' />
						<h3>Tel</h3>
						<Input name='tel' type='tel' />
						<h3>Range</h3>
						<Input name='range' type='range' />
						<h3>Color</h3>
						<Input name='color' type='color' defaultValue='#123456' />
						<h3>URL</h3>
						<Input name='url' type='url' />
						<h3>Date (datetime-local / month / week, not supported in Firefox/Safari)</h3>
						<Input name='date' type='date' />
						<h3>Time</h3>
						<Input name='time' type='time' />
						<h3>Checkbox</h3>
						<Checkbox name='check'>Check Me!</Checkbox>
						<h3>Switch</h3>
						<Switch name='switch'>Check Me!</Switch>
						<h3>TextArea</h3>
						<TextArea name='textarea' />
						<br />
						<Radio name='gender' id='male' value='male' seamless>
							Male
						</Radio>
						<Radio name='gender' id='female' value='female' seamless>
							Female
						</Radio>
						<Radio name='gender' id='other' value='other' seamless>
							Other
						</Radio>
						<br />
						<h3>Switch Group (Radio)</h3>
						<SwitchGroup
							options={[
								{
									value: "working",
									label: "Working",
								},
								{
									value: "looking",
									label: "Looking",
								},
								{
									value: "employed",
									label: "Employed",
								},
								{
									value: "retired",
									label: "Retired",
								},
							]}
							name='employment'
						/>

						<br />
					</Form>
				</Card.Body>
				<Card.Footer justify='flex-end'>
					<Button pigment='none' pigmentColor='danger'>
						Cancel
					</Button>
					<Button type='submit' form='all-types-form' className='ml2'>
						Submit
					</Button>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default FormsPage;
