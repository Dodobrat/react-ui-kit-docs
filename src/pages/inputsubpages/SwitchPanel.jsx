import { Settings, Switch, SwitchComponent } from "@dodobrat/react-ui-kit";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const SwitchPanel = () => {
	const switchRef = useRef(null);

	const [checked, setChecked] = useState(true);

	const onChange = (e) => setChecked(e.target.checked);

	useEffect(() => {
		switchRef.current.indeterminate = true;
	}, []);

	return (
		<div>
			<h1>Switch Component(Limited customization)</h1>
			<SwitchComponent>Only Component (Default)</SwitchComponent>
			<br />
			<br />
			<SwitchComponent pigment='danger'>Only Component Pigment</SwitchComponent>
			<br />
			<br />
			<SwitchComponent seamless={false}>Only Component Not Seamless</SwitchComponent>
			<br />
			<br />
			<SwitchComponent seamless={false} elevation='medium'>
				Only Component Not Seamless + Elevation
			</SwitchComponent>
			<br />
			<br />
			<SwitchComponent size='xl'>Only Component Size</SwitchComponent>
			<br />
			<br />
			<SwitchComponent size='xl' flat>
				Only Component Flat + Size
			</SwitchComponent>
			<br />
			<br />
			<SwitchComponent disabled>Only Component Disabled</SwitchComponent>
			<h1>Switch</h1>
			<Switch innerRef={switchRef}>Indeterminate</Switch>
			<br />
			<Switch>Unchecked</Switch>
			<br />
			<Switch checked={checked} onChange={onChange}>
				Checked
			</Switch>
			<br />
			<h1>Switch styling</h1>
			<Switch
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				pigment='success'
				disableWhileLoading={false}
				isLoading>
				Success
			</Switch>
			<br />
			<Switch
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				rounded
				disableWhileLoading={false}
				isLoading>
				Rounded
			</Switch>
			<br />
			<Switch
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				flat
				disableWhileLoading={false}
				isLoading>
				Flat
			</Switch>
			<br />
			<Switch
				size='xl'
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				isLoading
				seamless
				disableWhileLoading={false}>
				Seamless + XL size
			</Switch>
			<br />
			<Switch
				size='xl'
				preffix={<Settings className='dui__icon' />}
				suffix={<Settings className='dui__icon' />}
				isLoading
				disableWhileLoading={false}>
				XL size
			</Switch>
			<br />
			<Switch elevation='medium' seamless>
				Overriding elevation when seamless is True
			</Switch>
			<br />
		</div>
	);
};

export default SwitchPanel;
