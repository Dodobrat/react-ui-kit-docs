import {
	Button,
	Card,
	Container,
	Flex,
	Form,
	FormControl,
	InputGroup,
	Heading,
	Input,
	TextArea,
	User,
	Mail,
	Lock,
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
			<Container size='xs'>
				<Card flat>
					<Card.Body>
						<Heading as='h6' centered>
							Register
						</Heading>
						<Form onFormSubmit={({ values }) => console.log(values)}>
							<Flex spacingY='xs'>
								<Flex.Col col={{ xs: 12 }}>
									<FormControl label='Name'>
										<InputGroup flat>
											<Input name='first_name' preffix={<User />} placeholder='First Name' />
											<Input name='last_name' preffix={<User />} placeholder='Last Name' />
										</InputGroup>
									</FormControl>
								</Flex.Col>
								{/* <Flex.Col col={{ xs: 6 }}>
									<FormControl label='Last Name' htmlFor='last_name'>
										<Input name='last_name' />
									</FormControl>
								</Flex.Col> */}
								<Flex.Col col={{ xs: 12 }}>
									<FormControl label='E-mail' htmlFor='reg-email'>
										<Input
											name='email'
											id='reg-email'
											type='email'
											flat
											preffix={<Mail />}
											placeholder='Enter E-mail'
										/>
									</FormControl>
								</Flex.Col>
								<Flex.Col col={{ xs: 6 }}>
									<FormControl label='Password' htmlFor='password'>
										<Input name='password' type='password' preffix={<Lock />} placeholder='Enter Password' flat />
									</FormControl>
								</Flex.Col>
								<Flex.Col col={{ xs: 6 }}>
									<FormControl label='Confirm Password' htmlFor='confirm_password'>
										<Input
											name='confirm_password'
											type='password'
											preffix={<Lock />}
											placeholder='Confirm Password'
											flat
										/>
									</FormControl>
								</Flex.Col>
								<Input name='remember_me' type='hidden' />
								<Flex.Col>
									<Button type='submit' flat>
										Submit
									</Button>
								</Flex.Col>
							</Flex>
						</Form>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
};

export default FormsPage;
