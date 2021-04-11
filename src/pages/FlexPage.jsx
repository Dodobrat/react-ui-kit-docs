import { Card, Flex } from "@dodobrat/react-ui-kit";
import React from "react";

const FlexPage = () => {
	return (
		<div>
			<h1>FlexGrid</h1>
			<div id='no-config'>
				<h2>No props(defaults)</h2>
				<p>adjusts to content size</p>
				<Flex>
					{((cols, i, len) => {
						while (++i <= len) {
							const index = i;
							cols.push(
								<Flex.Col key={index}>
									<Card>
										<Card.Body>Col {index}</Card.Body>
									</Card>
								</Flex.Col>
							);
						}
						return cols;
					})([], 0, 25)}
				</Flex>
			</div>
			<div id='flex-config'>
				<h2>Flex props</h2>
				<p>
					spacingX: "sm" | Object(breakpoint: size),
					<br /> spacingY: "sm" | Object(breakpoint: size),
					<br /> align: "flex-start" | Object(breakpoint: option),
					<br /> justify: "flex-start"| Object(breakpoint: option),
					<br /> direction: "row"| Object(breakpoint: option),
					<br /> wrap: "wrap"| Object(breakpoint: option),
					<br /> disableNegativeSpace: false,
				</p>
				<Flex
					spacingY='xs'
					spacingX='xs'
					align='stretch'
					justify='space-between'
					disableNegativeSpace
					direction={{ base: "row", lg: "column" }}
					wrap='wrap-reverse'
					style={{ maxHeight: "30rem", overflow: "auto" }}>
					{((cols, i, len) => {
						while (++i <= len) {
							const index = i;
							cols.push(
								<Flex.Col key={index} style={{ height: i % 3 === 0 ? "5rem" : "8rem" }}>
									<Card flavor='flat' style={{ height: "100%" }}>
										<Card.Body>Col {index}</Card.Body>
									</Card>
								</Flex.Col>
							);
						}
						return cols;
					})([], 0, 25)}
				</Flex>
			</div>
			<div id='flexcol-config'>
				<h2>Flex Col props</h2>
				<p>
					order: null | number,
					<br /> col: null | Object(breakpoint: option) | number | 'auto',
					<br /> offset: null | Object(breakpoint: option) | number,
				</p>
				<h3>Col</h3>
				<Flex>
					{((cols, i, len) => {
						while (++i <= len) {
							const index = i;
							cols.push(
								<Flex.Col key={index} col={`${index}`}>
									<Card>
										<Card.Body>Col {index}</Card.Body>
									</Card>
								</Flex.Col>
							);
						}
						return cols;
					})([], 0, 12)}
				</Flex>
				<br />
				<h3>Breakpoints</h3>
				<Flex>
					{((cols, i, len) => {
						while (++i <= len) {
							const index = i;
							cols.push(
								<Flex.Col key={index} col={{ base: "12", xs: "8", sm: "6", md: "4", lg: "3", xl: "2", fhd: "1" }}>
									<Card>
										<Card.Body>Col {index}</Card.Body>
									</Card>
								</Flex.Col>
							);
						}
						return cols;
					})([], 0, 12)}
				</Flex>
				<h3>Offset</h3>
				<Flex>
					{((cols, i, len) => {
						while (++i <= len) {
							const index = i;
							cols.push(
								<Flex.Col key={index} offset={12 - index >= 1 ? `${12 - index}` : null} col={`${index}`}>
									<Card>
										<Card.Body>Col {index}</Card.Body>
									</Card>
								</Flex.Col>
							);
						}
						return cols;
					})([], 0, 12)}
				</Flex>
				<h3>Offset Right</h3>
				<Flex>
					{((cols, i, len) => {
						while (++i <= len) {
							const index = i;
							cols.push(
								<Flex.Col key={index} offsetRight={12 - index >= 1 ? `${12 - index}` : null} col={`${index}`}>
									<Card>
										<Card.Body>Col {index}</Card.Body>
									</Card>
								</Flex.Col>
							);
						}
						return cols;
					})([], 0, 12)}
				</Flex>
				<h3>Hide</h3>
				<Flex>
					{((cols, i, len) => {
						while (++i <= len) {
							const index = i;
							cols.push(
								<Flex.Col key={index} className={index % 2 === 0 ? "d--lg--none" : "d--base--unset"}>
									<Card>
										<Card.Body>Col {index}</Card.Body>
									</Card>
								</Flex.Col>
							);
						}
						return cols;
					})([], 0, 12)}
				</Flex>
			</div>
		</div>
	);
};

export default FlexPage;
