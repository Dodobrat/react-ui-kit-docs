import { Button, ListGroup } from "@dodobrat/react-ui-kit";
import React from "react";

const ListGroupPage = () => {
	return (
		<div>
			<h1>List groups / items</h1>
			<br />
			<ListGroup style={{ maxWidth: "30rem" }} flavor={{ base: "flat", lg: "default" }} pigment={{ base: "secondary", lg: "info" }}>
				<ListGroup.Header>Items Header</ListGroup.Header>
				<ListGroup.Item>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur harum sequi earum error a ipsam quia
					corporis, qui consequatur perferendis accusamus saepe, nemo quam.
					<br />
					<br />
					<Button pigment='info'>Random</Button>
				</ListGroup.Item>
				<ListGroup.Item>Item 2</ListGroup.Item>
				<ListGroup.Item>Item 3</ListGroup.Item>
				<ListGroup.Header>Collapsible Header</ListGroup.Header>
				<ListGroup.Collapse>
					<ListGroup.Collapse.Toggle>Collapsible Toggle</ListGroup.Collapse.Toggle>
					<ListGroup.Collapse.Content>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo harum commodi enim dolor aliquam
							inventore maiores unde autem, sequi perspiciatis. Similique, corrupti? Voluptates, at!
							<br />
							<br />
						</div>
						<ListGroup.Collapse>
							<ListGroup.Collapse.Toggle>Collapsible Toggle 2</ListGroup.Collapse.Toggle>
							<ListGroup.Collapse.Content>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iusto culpa maiores optio consequuntur,
									vitae, rem eius facilis, similique dolorum ipsam quibusdam veniam unde vel.
									<br />
									<br />
								</div>
								<ListGroup.Collapse>
									<ListGroup.Collapse.Toggle>Collapsible Toggle 3</ListGroup.Collapse.Toggle>
									<ListGroup.Collapse.Content>
										<div>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, tenetur magni cupiditate
											quae soluta sed iusto porro ad illo officia animi? Et, accusantium at? Ipsam.
											<br />
											<br />
										</div>
									</ListGroup.Collapse.Content>
								</ListGroup.Collapse>
							</ListGroup.Collapse.Content>
						</ListGroup.Collapse>
					</ListGroup.Collapse.Content>
				</ListGroup.Collapse>
			</ListGroup>
			<br />
			<ListGroup>
				<ListGroup.Header>Items</ListGroup.Header>
				<ListGroup.Item>Item 1</ListGroup.Item>
				<ListGroup.Item>Item 2</ListGroup.Item>
				<ListGroup.Collapse>
					<ListGroup.Collapse.Toggle>Collapsible Toggle</ListGroup.Collapse.Toggle>
					<ListGroup.Collapse.Content>Collapsible Content</ListGroup.Collapse.Content>
				</ListGroup.Collapse>
				<ListGroup.Item>Item 3</ListGroup.Item>
				<ListGroup.Header>Collapsible</ListGroup.Header>
				<ListGroup.Collapse>
					<ListGroup.Collapse.Toggle>Collapsible Toggle</ListGroup.Collapse.Toggle>
					<ListGroup.Collapse.Content>Collapsible Content</ListGroup.Collapse.Content>
				</ListGroup.Collapse>
			</ListGroup>
		</div>
	);
};

export default ListGroupPage;
