import { Input, InputComponent, Settings } from "@dodobrat/react-ui-kit";
import React from "react";
import { useState } from "react";

const InputsPanel = () => {
	const [value, setValue] = useState("loool");

	const onChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<h1>Input Component (Limited customization)</h1>
			<InputComponent placeholder='XL Only Input' size='xl' flat pigment='info' />
			<br />
			<InputComponent placeholder='Default Only Input' />
			<br />
			<InputComponent placeholder='Seamless Only Input' seamless />
			<h1>Input</h1>
			<Input
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				defaultValue='Seamless Input'
				isClearable
				seamless
				isLoading
				disableWhileLoading={false}
				placeholder='Input text here'
			/>
			<br />
			<Input
				type='password'
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				value={value}
				onChange={onChange}
				isClearable
				placeholder='Input text here'
			/>
			<br />
			<Input flat />
			<br />
			<Input rounded />
			<br />
			<h1>Input sizes</h1>
			<Input
				defaultValue='Extra Small Input'
				size='xs'
				isClearable
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
			/>
			<br />
			<Input
				defaultValue='Small Input'
				size='sm'
				isClearable
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
			/>
			<br />
			<Input
				defaultValue='Default Input'
				size='md'
				isClearable
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
			/>
			<br />
			<Input
				defaultValue='Large Input'
				size='lg'
				isClearable
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
			/>
			<br />
			<Input
				defaultValue='Extra Large Input'
				size='xl'
				isClearable
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
			/>
			<br />
			<h1>Input Types</h1>
			<h3>Default(Text)</h3>
			<Input placeholder='Input text here...' />
			<h3>Number</h3>
			<Input type='number' />
			<h3>Email</h3>
			<Input type='email' suffix='@gmail.com' />
			<h3>Password</h3>
			<Input type='password' />
			<h3>Search</h3>
			<Input type='search' />
			<h3>File</h3>
			<Input type='file' />
			<h3>Tel</h3>
			<Input type='tel' />
			<h3>Range</h3>
			<Input type='range' />
			<h3>Color</h3>
			<Input type='color' defaultValue='#123456' />
			<h3>URL</h3>
			<Input type='url' />
			<h3>Date (datetime-local / month / week, not supported in Firefox/Safari)</h3>
			<Input type='date' />
			<h3>Time</h3>
			<Input type='time' />
		</div>
	);
};

export default InputsPanel;
