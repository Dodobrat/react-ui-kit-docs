import React from "react";
import { Button, Card, Flex, Heading, Input, Table } from "@dodobrat/react-ui-kit";

const TableComponent = (props) => {
	return (
		<Table {...props}>
			<Table.Head>
				<Table.Row>
					<Table.HCell>
						<span>Hello</span>
					</Table.HCell>
					<Table.HCell>
						<span>Hello</span>
					</Table.HCell>
					<Table.HCell>
						<span>Hello</span>
					</Table.HCell>
					<Table.HCell>
						<span>Hello</span>
					</Table.HCell>
					<Table.HCell>
						<span>Hello</span>
					</Table.HCell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.Row>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell colSpan={2}>
						<span>Text</span>
					</Table.Cell>

					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
					<Table.Cell>
						<span>Text</span>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
			<Table.Foot>
				<Table.Row>
					<Table.HCell>
						<span>Hello</span>
					</Table.HCell>
					<Table.HCell>
						<span>Hello</span>
					</Table.HCell>
					<Table.HCell>
						<span>Hello</span>
					</Table.HCell>
					<Table.HCell>
						<span>Hello</span>
					</Table.HCell>
					<Table.HCell>
						<span>Hello</span>
					</Table.HCell>
				</Table.Row>
			</Table.Foot>
		</Table>
	);
};

const TablesPage = () => {
	return (
		<div>
			<h1>Table default</h1>
			<TableComponent />
			<h1>Condensed</h1>
			<TableComponent condensed />
			<h1>Condensed + bordered + flavor='flat'</h1>
			<TableComponent condensed bordered />
			<h1>Bordered + Flat</h1>
			<TableComponent bordered flavor='flat' />
			<h1>Flat</h1>
			<TableComponent flavor='flat' />
			<h1>Pigments</h1>
			<TableComponent pigment='info' />
			<br />
			<TableComponent pigment={{ base: "success", lg: "default" }} flavor={{ base: "flat", lg: "default" }} bordered />
			<h1>Sizes</h1>
			<TableComponent size='xs' />
			<br />
			<TableComponent size='sm' />
			<br />
			<TableComponent size='md' />
			<br />
			<TableComponent size='lg' />
			<br />
			<TableComponent size='xl' />
			<br />
			<h1>Combo</h1>
			<Card>
				<Card.Body className='px--0 py--1'>
					<Heading as='h6' centered>
						Table Combo
					</Heading>
					<Flex spacingY='none'>
						<Flex.Col col={"12"}>
							<Flex disableNegativeSpace spacingY='xs'>
								<Flex.Col col={{ xs: "6", sm: "4", md: "3" }}>
									<Input type='search' size='sm' placeholder='Search By Name' />
								</Flex.Col>
								<Flex.Col col={{ xs: "6", sm: "4", md: "3" }}>
									<Input type='search' size='sm' placeholder='Search By Position' />
								</Flex.Col>
								<Flex.Col className='d--flex'>
									<button className='dui__btn flavor--default dui__btn--sm ml--auto mr--sm--2 mr--base--4 bg--danger bgtext--danger d--block w--base--50 w--sm--auto'>
										Export
									</button>
									<Button size='sm' className='w--base--50 w--sm--auto'>
										Export
									</Button>
								</Flex.Col>
							</Flex>
						</Flex.Col>
						<Flex.Col col='12'>
							<TableComponent elevation='none' />
						</Flex.Col>
					</Flex>
				</Card.Body>
			</Card>
		</div>
	);
};

export default TablesPage;
