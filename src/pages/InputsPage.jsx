import { Tabs } from "@dodobrat/react-ui-kit";
import React from "react";
import InputGroupsPanel from "./subpages/InputGroupsPanel";
import InputsPanel from "./subpages/InputsPanel";
import TextAreasPanel from "./subpages/TextAreasPanel";

const InputsPage = () => {
	return (
		<div>
			<Tabs>
				<Tabs.Panel tab={"Inputs"}>
					<InputsPanel />
				</Tabs.Panel>
				<Tabs.Panel tab={"Input Groups"}>
					<InputGroupsPanel />
				</Tabs.Panel>
				<Tabs.Panel tab={"Text Areas"}>
					<TextAreasPanel />
				</Tabs.Panel>
			</Tabs>
		</div>
	);
};

export default InputsPage;
