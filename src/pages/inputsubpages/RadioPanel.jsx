import { Settings, Radio, RadioComponent } from "@dodobrat/react-ui-kit";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const RadioPanel = () => {
	const radioRef = useRef(null);

	const [checked, setChecked] = useState(true);

	const onChange = (e) => setChecked(e.target.checked);

	useEffect(() => {
		radioRef.current.checked = true;
	}, []);

	return (
		<div>
			<h1>Radio Component(Limited customization)</h1>
			<RadioComponent>Only Component (Default)</RadioComponent>
			<br />
			<br />
			<RadioComponent pigment='danger'>Only Component Pigment</RadioComponent>
			<br />
			<br />
			<RadioComponent seamless={false}>Only Component Not Seamless</RadioComponent>
			<br />
			<br />
			<RadioComponent seamless={false} elevation='medium'>
				Only Component Not Seamless + Elevation
			</RadioComponent>
			<br />
			<br />
			<RadioComponent size='xl'>Only Component Size</RadioComponent>
			<br />
			<br />
			<RadioComponent size='xl' flat>
				Only Component Flat + Size
			</RadioComponent>
			<br />
			<br />
			<RadioComponent disabled>Only Component Disabled</RadioComponent>
			<h1>Radio</h1>
			<Radio innerRef={radioRef}>Checked from ref</Radio>
			<br />
			<Radio checked={checked} onChange={onChange}>
				Controlled Checked
			</Radio>
			<br />
			<h1>Radio styling</h1>
			<Radio
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				pigment='success'
				disableWhileLoading={false}
				isLoading>
				Success
			</Radio>
			<br />
			<Radio
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				rounded
				disableWhileLoading={false}
				isLoading>
				Rounded
			</Radio>
			<br />
			<Radio
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				flat
				disableWhileLoading={false}
				isLoading>
				Flat
			</Radio>
			<br />
			<Radio
				size='xl'
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				isLoading
				seamless
				disableWhileLoading={false}>
				Seamless + XL size
			</Radio>
			<br />
			<Radio
				size='xl'
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				isLoading
				disableWhileLoading={false}>
				XL size
			</Radio>
			<br />
			<Radio elevation='medium' seamless>
				Overriding elevation when seamless is True
			</Radio>
			<br />
		</div>
	);
};

export default RadioPanel;
