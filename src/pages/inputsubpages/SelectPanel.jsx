import { Select, SelectComponent, Settings } from "@dodobrat/react-ui-kit";
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
			<SelectComponent size='xl' flat pigment='info'>
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
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
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
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
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
			<Select flat>
				<option value='' disabled>
					Select your option
				</option>
				<option value='opt1'>Option 1</option>
				<option value='opt2'>Option 2</option>
				<option value='opt3'>Option 3</option>
				<option value='opt4'>Option 4</option>
			</Select>
			<br />
			<Select rounded>
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
				size='xs'
				isClearable
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}>
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
				size='sm'
				isClearable
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}>
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
				size='md'
				isClearable
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}>
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
				size='lg'
				isClearable
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}>
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
				size='xl'
				isClearable
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}>
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
