import {
	Button,
	Checkbox,
	CheckboxComponent,
	Input,
	InputComponent,
	InputGroup,
	IconMoon,
	RadioComponent,
	IconSun,
} from "@dodobrat/react-ui-kit";
import React from "react";

const InputGroupsPanel = () => {
	return (
		<div>
			<h1>Input Group</h1>
			<InputGroup pigment='info' flavor='rounded'>
				<Button>Testing</Button>
				<InputComponent placeholder='Enter text' />
				<InputComponent type='range' seamless={false} disabled />
				<CheckboxComponent seamless={false} disabled>
					Remember me
				</CheckboxComponent>
				<RadioComponent seamless={false}>Radio me</RadioComponent>
			</InputGroup>
			<br />
			<InputGroup pigment='secondary' flavor='flat'>
				<Button>Testing</Button>
				<InputComponent placeholder='Enter text' />
				<InputComponent type='number' pigment='success' placeholder='Enter Number' />
				<InputComponent type='password' placeholder='Enter password' />
				<InputComponent type='password' placeholder='Confirm password' />
			</InputGroup>
			<br />
			<InputGroup>
				<Input type='number' placeholder='Enter Age' isLoading isClearable disableWhileLoading={false} />
				<Input placeholder='Enter text' />
				<Checkbox>Check Me</Checkbox>
				<Input
					type='password'
					placeholder='Enter password (custom icon)'
					passwordRevealComponent={(visible) =>
						visible ? <IconSun className='dui__icon' /> : <IconMoon className='dui__icon' />
					}
				/>
			</InputGroup>
		</div>
	);
};

export default InputGroupsPanel;
