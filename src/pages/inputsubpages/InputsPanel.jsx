import { Input, InputComponent, IconSettings } from "@dodobrat/react-ui-kit";
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
			<InputComponent placeholder='XL Only Input' sizing='xl' flavor='flat' pigment='info' />
			<br />
			<InputComponent placeholder='Default Only Input' />
			<br />
			<InputComponent placeholder='Seamless Only Input' seamless />
			<h1>Input</h1>
			<Input
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
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
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
				value={value}
				onChange={onChange}
				isClearable
				placeholder='Input text here'
			/>
			<br />
			<Input flavor='flat' />
			<br />
			<Input flavor='rounded' />
			<br />
			<h1>Input sizes</h1>
			<Input
				defaultValue='Extra Small Input'
				sizing='xs'
				isClearable
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
			/>
			<br />
			<Input
				defaultValue='Small Input'
				sizing='sm'
				isClearable
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
			/>
			<br />
			<Input
				defaultValue='Default Input'
				sizing='md'
				isClearable
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
			/>
			<br />
			<Input
				defaultValue='Large Input'
				sizing='lg'
				isClearable
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
			/>
			<br />
			<Input
				defaultValue='Extra Large Input'
				sizing='xl'
				isClearable
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
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
