import { Button, Input, InputComponent, InputGroup, Moon, Sun } from "@dodobrat/react-ui-kit";
import React from "react";

const InputGroupsPanel = () => {
	return (
		<div>
			<h1>Input Group</h1>
			<InputGroup pigment='info' rounded>
				<Button>Testing</Button>
				<InputComponent placeholder='Enter text' />
				<InputComponent type='number' placeholder='Enter Number' />
				<InputComponent type='password' placeholder='Enter password' />
				<InputComponent type='password' placeholder='Confirm password' />
			</InputGroup>
			<br />
			<InputGroup pigment='secondary' flat>
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
				<Input
					type='password'
					placeholder='Enter password (custom icon)'
					passwordRevealComponent={(visible) => (visible ? <Sun className='dui__icon' /> : <Moon className='dui__icon' />)}
				/>
			</InputGroup>
		</div>
	);
};

export default InputGroupsPanel;
