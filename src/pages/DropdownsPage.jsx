import React from "react";
// import { Button, Dropdown } from "@dodobrat/react-ui-kit";
// import { Link } from "react-router-dom";

const DropdownsPage = () => {
	return (
		<div>
			<h1>Dropdown Default (Menu)</h1>
			{/* <Dropdown>
				<Dropdown.Toggle as={Button} pigment='secondary'>
					Toggle bro
				</Dropdown.Toggle>
				<Dropdown.Menu as='ul'>
					<Dropdown.Header as='li'>Dropdown Header</Dropdown.Header>
					<Dropdown.Item as='li'>
						<Link to='/dropdowns/drop_1'>Dropdown Item 1</Link>
					</Dropdown.Item>
					<Dropdown.Item as='li'>
						<Link to='/dropdowns/drop_2'>Dropdown Item 2</Link>
					</Dropdown.Item>
					<Dropdown.Separator />
					<Dropdown.Item as='li'>Dropdown Item 3</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown> */}
			<h1>Dropdown Default (Body - for custom components)</h1>
			{/* <Dropdown>
				<Dropdown.Toggle as={Button}>Toggle bro</Dropdown.Toggle>
				<Dropdown.Body>
					<span>This is custom</span>
				</Dropdown.Body>
			</Dropdown> */}
		</div>
	);
};

export default DropdownsPage;
