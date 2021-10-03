import { Button, Card } from "@dodobrat/react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const CardPage = () => {
	const ImageTest = () => {
		return <img src='https://picsum.photos/500/300' alt='' />;
	};

	return (
		<div>
			<div id='card-default'>
				<h1>Default Card</h1>
				<Card style={{ maxWidth: "25rem" }}>
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque enim
							amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
						</p>
						<Button>Wassup</Button>
					</Card.Body>
					<Card.Footer>Footer</Card.Footer>
				</Card>
			</div>
			<br />
			<div id='card-pigments'>
				<h1>Pigmented Cards</h1>
				<Card style={{ maxWidth: "25rem" }} pigment='danger'>
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque enim
							amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
						</p>
						<Button pigment='danger'>Wassup</Button>
					</Card.Body>
					<Card.Footer>Footer</Card.Footer>
				</Card>
				<br />
				<Card style={{ maxWidth: "25rem" }} pigment={{ base: "default", md: "info", xl: "primary" }}>
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque enim
							amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
						</p>
						<Button pigment='danger'>Wassup</Button>
					</Card.Body>
					<Card.Footer>Footer</Card.Footer>
				</Card>
			</div>
			<br />
			<div id='card-loaders'>
				<h1>Out of the box loader</h1>
				<Card style={{ maxWidth: "25rem" }} isLoading>
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque enim
							amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
						</p>
						<Button pigment='primary'>Wassup</Button>
					</Card.Body>
					<Card.Footer>Footer</Card.Footer>
				</Card>
				<h1>Loader Options</h1>
				<Card style={{ maxWidth: "25rem" }} isLoading disableWhileLoading={false} flavor='flat'>
					<Card.Loader pigment='danger' />
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque enim
							amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
						</p>
						<Button>Wassup</Button>
					</Card.Body>
					<Card.Footer>Footer</Card.Footer>
				</Card>
				<h1>Custom Loader (Access Loader Props)</h1>
				<Card style={{ maxWidth: "25rem" }} isLoading>
					<Card.Loader>
						<h1>Custom Loader</h1>
					</Card.Loader>
					<Card.Header>Header2</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque enim
							amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
						</p>
						<Button as={Link} to='/about'>
							Wassup
						</Button>
					</Card.Body>
					<Card.Footer>Footer</Card.Footer>
				</Card>
			</div>
			<br />
			<div id='card-image'>
				<h1>Image Cards</h1>
				<Card style={{ maxWidth: "40rem" }} flavor='flat'>
					<Card.Image>
						<ImageTest />
					</Card.Image>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque enim
							amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
						</p>
						<Button>Wassup</Button>
					</Card.Body>
					<Card.Footer>Footer</Card.Footer>
				</Card>
				<br />
				<Card style={{ maxWidth: "40rem" }} imgPosition='right'>
					<Card.Image>
						<ImageTest />
					</Card.Image>
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque enim
							amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
						</p>
						<Button>Wassup</Button>
					</Card.Body>
					<Card.Footer>Footer</Card.Footer>
				</Card>
				<br />
				<Card style={{ maxWidth: "40rem" }} imgPosition={"left"}>
					<Card.Image imgLink='https://picsum.photos/500/300' />
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque enim
							amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
						</p>
						<Button>Wassup</Button>
					</Card.Body>
					<Card.Footer>Footer</Card.Footer>
				</Card>
				<br />
			</div>
			<br />
			<div id='card-actions'>
				<h1>Actions Card</h1>
				<Card style={{ maxWidth: "25rem" }}>
					<Card.Header
						actions={
							<>
								<Button sizing='xs' pigment={null}>
									X{" "}
								</Button>
								<Button sizing='xs' pigment={null}>
									X{" "}
								</Button>
							</>
						}>
						Header
					</Card.Header>
					<Card.Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque enim
							amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
						</p>
						<Button>Wassup</Button>
					</Card.Body>
					<Card.Footer>Footer</Card.Footer>
				</Card>

				<h1>Card Surface (for custom components)</h1>
				<Card style={{ maxWidth: "25rem" }}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, saepe vero reiciendis ratione sunt ab nam explicabo
					est temporibus vel. Soluta temporibus eos corporis dicta corrupti. Incidunt voluptatum similique nulla itaque cum
					impedit unde numquam, nobis soluta rerum. Vel, similique aspernatur? Itaque facere in repudiandae debitis earum tempora
					hic velit rerum cum nobis quisquam voluptates numquam sapiente aliquam placeat laboriosam eius, mollitia magnam fugiat
					quas? Accusamus quia quam ducimus ipsam necessitatibus quisquam eos magnam doloremque, molestias, perspiciatis ullam
					cumque perferendis?
				</Card>
				<br />
			</div>
		</div>
	);
};

export default CardPage;
