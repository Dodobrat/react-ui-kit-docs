import React from "react";
import { SwitchGroup } from "@dodobrat/react-ui-kit";

const SwitchGroupPanel = () => {
	const switchGroupOptions = [
		{
			value: "male",
			label: "Male",
			disabled: false,
			props: {
				"aria-label": "Male Option",
			},
		},
		{
			value: "female",
			label: "Female",
			disabled: true,
			props: {
				"aria-label": "Female Option",
			},
		},
		{
			value: "other",
			label: "Other",
			disabled: false,
			props: {
				"aria-label": "Other Option",
			},
		},
	];

	return (
		<div>
			<h1>SwitchGroup (Default)</h1>
			<SwitchGroup options={switchGroupOptions} name='gender' activeOption={switchGroupOptions[0].value} />
			<br />
			<br />
			<SwitchGroup options={switchGroupOptions} name='gender1' pigment='secondary' activeOption={switchGroupOptions[0].value} />
			<br />
			<br />
			<h1>SwitchGroup Sizes</h1>
			<SwitchGroup options={switchGroupOptions} name='gender2' size='xs' activeOption={switchGroupOptions[0].value} />
			<br />
			<br />
			<SwitchGroup options={switchGroupOptions} name='gender3' size='sm' activeOption={switchGroupOptions[0].value} />
			<br />
			<br />
			<SwitchGroup options={switchGroupOptions} name='gender4' size='md' activeOption={switchGroupOptions[0].value} />
			<br />
			<br />
			<SwitchGroup options={switchGroupOptions} name='gender5' size='lg' activeOption={switchGroupOptions[0].value} />
			<br />
			<br />
			<SwitchGroup options={switchGroupOptions} name='gender6' size='xl' activeOption={switchGroupOptions[0].value} />
			<br />
			<br />
			<h1>Switch Group Util</h1>
			<SwitchGroup
				options={switchGroupOptions}
				name='gender7'
				onSwitch={(args) => console.log(args)}
				activeOption={switchGroupOptions[0].value}
			/>
			with onSwitch event returns {"(args: {e, option })"}
			<br />
			<br />
			<SwitchGroup options={switchGroupOptions} name='gender8' wide activeOption={switchGroupOptions[0].value} />
			<br />
			<SwitchGroup options={switchGroupOptions} name='gender9' seamless activeOption={switchGroupOptions[0].value} />
			<br />
			<br />
			<SwitchGroup options={switchGroupOptions} name='gender10' rounded activeOption={switchGroupOptions[0].value} />
			<br />
			<br />
			<SwitchGroup options={switchGroupOptions} name='gender11' flat activeOption={switchGroupOptions[0].value} />
			<br />
			<br />
		</div>
	);
};

export default SwitchGroupPanel;
