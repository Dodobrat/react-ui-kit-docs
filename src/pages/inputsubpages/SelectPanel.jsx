import { Select, SelectComponent, IconSettings } from "@dodobrat/react-ui-kit";
import React from "react";
import { useState } from "react";

const SelectPanel = () => {
	const [value, setValue] = useState("loool");

	const onChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<h1>Select Component (Limited customization)</h1>
			<SelectComponent sizing='xl' flavor='flat' pigment='info'>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</SelectComponent>
			<br />
			<SelectComponent>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</SelectComponent>
			<br />
			<SelectComponent seamless>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</SelectComponent>
			<h1>Select</h1>
			<Select
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
				defaultValue=''
				isClearable
				seamless
				isLoading
				disableWhileLoading={false}
				placeholder='Select text here'>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</Select>
			<br />
			<Select
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
				value={value}
				onChange={onChange}
				isClearable
				placeholder='Select text here'>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</Select>
			<br />
			<Select flavor='flat'>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</Select>
			<br />
			<Select flavor='rounded'>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</Select>
			<br />
			<h1>Select sizes</h1>
			<Select
				defaultValue=''
				sizing='xs'
				isClearable
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</Select>
			<br />
			<Select
				defaultValue=''
				sizing='sm'
				isClearable
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</Select>
			<br />
			<Select
				defaultValue=''
				sizing='md'
				isClearable
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</Select>
			<br />
			<Select
				defaultValue=''
				sizing='lg'
				isClearable
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</Select>
			<br />
			<Select
				defaultValue=''
				sizing='xl'
				isClearable
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</Select>
			<br />
		</div>
	);
};

export default SelectPanel;
