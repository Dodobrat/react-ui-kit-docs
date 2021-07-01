import { Checkbox, CheckboxComponent, IconSettings } from "@dodobrat/react-ui-kit";
import React, { useEffect, useRef, useState } from "react";

const CheckboxesPanel = () => {
	const checkboxRef = useRef(null);

	const [checked, setChecked] = useState(true);

	const onChange = (e) => setChecked(e.target.checked);

	useEffect(() => {
		checkboxRef.current.indeterminate = true;
	}, []);

	return (
		<div>
			<h1>Checkbox Component(Limited customization)</h1>
			<CheckboxComponent>Only Component (Default)</CheckboxComponent>
			<br />
			<br />
			<CheckboxComponent pigment='danger'>Only Component Pigment</CheckboxComponent>
			<br />
			<br />
			<CheckboxComponent seamless={false}>Only Component Not Seamless</CheckboxComponent>
			<br />
			<br />
			<CheckboxComponent seamless={false} elevation='medium'>
				Only Component Not Seamless + Elevation
			</CheckboxComponent>
			<br />
			<br />
			<CheckboxComponent sizing='xl'>Only Component Size</CheckboxComponent>
			<br />
			<br />
			<CheckboxComponent sizing='xl' flavor='flat'>
				Only Component Flat + Size
			</CheckboxComponent>
			<br />
			<br />
			<CheckboxComponent disabled>Only Component Disabled</CheckboxComponent>
			<h1>Checkbox</h1>
			<Checkbox innerRef={checkboxRef}>Indeterminate</Checkbox>
			<br />
			<Checkbox>Unchecked</Checkbox>
			<br />
			<Checkbox checked={checked} onChange={onChange}>
				Checked
			</Checkbox>
			<br />
			<h1>Checkbox styling</h1>
			<Checkbox
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
				pigment='success'
				disableWhileLoading={false}
				isLoading>
				Success
			</Checkbox>
			<br />
			<Checkbox
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
				flavor='rounded'
				disableWhileLoading={false}
				isLoading>
				Rounded
			</Checkbox>
			<br />
			<Checkbox
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
				flavor='flat'
				disableWhileLoading={false}
				isLoading>
				Flat
			</Checkbox>
			<br />
			<Checkbox
				sizing='xl'
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
				isLoading
				seamless
				disableWhileLoading={false}>
				Seamless + XL size
			</Checkbox>
			<br />
			<Checkbox
				sizing='xl'
				preffix={<IconSettings className='dui__icon' />}
				suffix={<IconSettings className='dui__icon' />}
				isLoading
				disableWhileLoading={false}>
				XL size
			</Checkbox>
			<br />
			<Checkbox elevation='medium' seamless>
				Overriding elevation when seamless is True
			</Checkbox>
			<br />
		</div>
	);
};

export default CheckboxesPanel;
