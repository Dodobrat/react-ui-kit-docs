import { Tabs } from "@dodobrat/react-ui-kit";
import React from "react";
import CheckboxesPanel from "./inputsubpages/CheckboxesPanel";
import InputGroupsPanel from "./inputsubpages/InputGroupsPanel";
import InputsPanel from "./inputsubpages/InputsPanel";
import RadioPanel from "./inputsubpages/RadioPanel";
import SelectPanel from "./inputsubpages/SelectPanel";
import SwitchGroupPanel from "./inputsubpages/SwitchGroupPanel";
import SwitchPanel from "./inputsubpages/SwitchPanel";
import TextAreasPanel from "./inputsubpages/TextAreasPanel";

const InputsPage = () => {
	return (
		<div>
			<Tabs activeTab={0}>
				<Tabs.Panel tab={"Inputs"}>
					<InputsPanel />
				</Tabs.Panel>
				<Tabs.Panel tab={"Input Groups"}>
					<InputGroupsPanel />
				</Tabs.Panel>
				<Tabs.Panel tab={"Checkboxes"}>
					<CheckboxesPanel />
				</Tabs.Panel>
				<Tabs.Panel tab={"Switches"}>
					<SwitchPanel />
				</Tabs.Panel>
				<Tabs.Panel tab={"SwitchGroup"}>
					<SwitchGroupPanel />
				</Tabs.Panel>
				<Tabs.Panel tab={"Radios"}>
					<RadioPanel />
				</Tabs.Panel>
				<Tabs.Panel tab={"Select"}>
					<SelectPanel />
				</Tabs.Panel>
				<Tabs.Panel tab={"Text Areas"}>
					<TextAreasPanel />
				</Tabs.Panel>
			</Tabs>
		</div>
	);
};

export default InputsPage;
