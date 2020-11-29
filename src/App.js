import React, { useRef, useState } from "react";
import {
	Badge,
	Breadcrumbs,
	Button,
	ButtonGroup,
	Card,
	Container,
	// Flex,
	LineLoader,
	ListGroup,
	// Portal,
	ProgressBar,
	ProgressCircle,
	SpinnerLoader,
	Input,
	usePortal,
	// useKeyPress,
	useWindowResize,
	TextArea,
} from "@dodobrat/react-ui-kit";

const App = () => {
	const { width } = useWindowResize();

	const ImageTest = () => {
		return <img src='https://picsum.photos/500/300' alt='' />;
	};

	const BreadcrumbSeparatorTest = () => {
		return <div>NEXT</div>;
	};

	const [formData, setFormData] = useState({});

	const { show: showA, hide: hideA, RenderPortal: PortalA } = usePortal();
	const { show: showB, hide: hideB, RenderPortal: PortalB } = usePortal();

	const portalTest = useRef(null);
	const testCardRef = useRef();

	const handleInput = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	// useEffect(() => {
	// 	console.log(portalTest);
	// }, [PortalA.isVisible]);

	return (
		<Container style={{ padding: "2rem 0" }}>
			<div>
				<h1>Form Inputs</h1>
				<pre>{JSON.stringify(formData)}</pre>
				<div style={{ maxWidth: "30rem" }}>
					<p>Input ("text" | "email" | "password" | "url" | "number" | "tel" | "search")</p>
					<Input
						placeholder='Enter Age'
						type='number'
						name='age'
						// fieldSize='md'
						label='Age'
						hintMsg='Enter your Age'
						// pigment='primary'
						// round
						modern
						// loading
						value={formData?.age ?? 0}
						onChange={handleInput}
					/>
					<br />
					<Input
						placeholder='Enter Name'
						name='name'
						// fieldSize='md'
						label='Full Name'
						hintMsg='Enter your Full Name'
						// pigment='primary'
						// round
						// modern
						// loading
						value={formData?.name ?? ""}
						onChange={handleInput}
					/>
					<br />
					<TextArea name='msg' value={formData?.msg ?? ""} onChange={handleInput} />
				</div>
			</div>
			<hr modern='true' />
			<div>
				<h1>List groups / items</h1>
				<br />
				<ListGroup style={{ maxWidth: "30rem" }} modern>
					<ListGroup.Header>Items Header</ListGroup.Header>
					<ListGroup.Item>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur harum sequi earum error a ipsam quia
						corporis, qui consequatur perferendis accusamus saepe, nemo quam.
						<br />
						<br />
						<Button pigment='light'>Random</Button>
					</ListGroup.Item>
					<ListGroup.Item>Item 2</ListGroup.Item>
					<ListGroup.Item>Item 3</ListGroup.Item>
					<ListGroup.Header>Collapsible Header</ListGroup.Header>
					<ListGroup.Collapse>
						<ListGroup.Collapse.Toggle>Collapsible Toggle</ListGroup.Collapse.Toggle>
						<ListGroup.Collapse.Content>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo harum commodi enim dolor aliquam
								inventore maiores unde autem, sequi perspiciatis. Similique, corrupti? Voluptates, at!
							</p>
							<ListGroup.Collapse onToggle={(collapsed) => console.log(collapsed)}>
								<ListGroup.Collapse.Toggle collapseIndicatorComponent={"lol"}>
									Collapsible Toggle 2
								</ListGroup.Collapse.Toggle>
								<ListGroup.Collapse.Content>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iusto culpa maiores optio
										consequuntur, vitae, rem eius facilis, similique dolorum ipsam quibusdam veniam unde vel.
									</p>
									<ListGroup.Collapse>
										<ListGroup.Collapse.Toggle>Collapsible Toggle 3</ListGroup.Collapse.Toggle>
										<ListGroup.Collapse.Content>
											<p>
												Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, tenetur magni
												cupiditate quae soluta sed iusto porro ad illo officia animi? Et, accusantium at? Ipsam.
											</p>
										</ListGroup.Collapse.Content>
									</ListGroup.Collapse>
								</ListGroup.Collapse.Content>
							</ListGroup.Collapse>
						</ListGroup.Collapse.Content>
					</ListGroup.Collapse>
				</ListGroup>
				<br />
				{/* <ListGroup>
					<ListGroup.Header>Items</ListGroup.Header>
					<ListGroup.Item>Item 1</ListGroup.Item>
					<ListGroup.Item>Item 2</ListGroup.Item>
					<ListGroup.Item>Item 3</ListGroup.Item>
					<ListGroup.Header>Collapsible</ListGroup.Header>
					<ListGroup.Collapse>
						<ListGroup.Collapse.Toggle>Collapsible Toggle</ListGroup.Collapse.Toggle>
						<ListGroup.Collapse.Content>Collapsible Content</ListGroup.Collapse.Content>
					</ListGroup.Collapse>
				</ListGroup> */}
				<br />
				<br />
				<br />
			</div>
			<hr modern='true' />
			<div>
				<h1>Portals</h1>
				<h2>Default Portal</h2>
				<Button onClick={showA} pigment='light'>
					Open Default Portal
				</Button>
				<PortalA size='sm' ref={portalTest}>
					<Card modern>
						<Card.Header onClose={hideA} closeBtnComponent={<Button onClick={hideA}>Test</Button>}>
							Portal Modal
						</Card.Header>
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sunt aliquid corporis quod nihil vero dolor neque
							beatae quis libero odio quidem tenetur illum molestias veritatis quibusdam! Aperiam rerum illo non sunt nobis
							mollitia veniam fugiat, dicta praesentium placeat perferendis quasi quam quae iste earum esse corporis quis
							itaque eveniet corrupti similique possimus ipsum omnis. Error aperiam neque fugiat, rerum laborum excepturi
							corrupti distinctio? Deleniti nihil nam ipsum perferendis aliquam, quaerat ad impedit adipisci quia, quas quasi
							magnam vitae repellat. Dolore nisi facilis id doloremque dolores, aliquam dicta repellat perferendis iusto
							veniam architecto iure quia deleniti cupiditate ad eaque fugit magni velit, nemo illum officia. Dicta quae
							perferendis delectus tempora? Quas tempora aperiam sunt id molestias? Molestias quasi itaque doloremque commodi
							nobis, dolorum ad perferendis quis error vero consectetur incidunt quos adipisci repellendus consequatur
							voluptatem necessitatibus corporis explicabo, maxime, eum hic expedita et reiciendis! Ab quos obcaecati
							perspiciatis impedit ut nobis maiores distinctio ipsam aliquid explicabo, aut et animi sed debitis sequi alias
							excepturi quis voluptas consequatur tempora commodi. Quia, placeat ex quas cum tempore omnis culpa maiores
							libero nisi consequatur aliquam autem eum esse soluta dolorum cumque, nobis fugit incidunt facilis! Quam saepe
							aliquid aspernatur debitis est obcaecati. Impedit! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Nobis ducimus iure quasi sed cumque omnis illum nostrum repellat a animi corporis eius repellendus officiis
							ipsam sapiente non laboriosam saepe, facere, nam optio voluptatum. Magni architecto deleniti provident optio?
						</Card.Body>
					</Card>
				</PortalA>

				<br />
				<br />
				<h2>Static Portal</h2>
				<Button onClick={showB} pigment='light'>
					Open Static Portal
				</Button>
				<PortalB backdrop='static'>
					<Card>
						<Card.Header onClose={hideB}>Portal Modal</Card.Header>
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sunt aliquid corporis quod nihil vero dolor neque
							beatae quis libero odio quidem tenetur illum molestias veritatis quibusdam! Aperiam rerum illo non sunt nobis
							mollitia veniam fugiat, dicta praesentium placeat perferendis quasi quam quae iste earum esse corporis quis
							itaque eveniet corrupti similique possimus ipsum omnis. Error aperiam neque fugiat, rerum laborum excepturi
						</Card.Body>
					</Card>
				</PortalB>
			</div>
			<hr modern='true' />
			<div>
				<h1>Progress</h1>
				<ProgressCircle value={475} min={250} max={500} fixedLabelValue={1} labeled labelValue='count + %' />
				<br />
				<ProgressCircle
					value={475}
					min={250}
					max={500}
					fixedLabelValue={1}
					radius={95}
					strokeWidth={10}
					labeled
					labelValue='count + %'
				/>
				<br />
				<ProgressCircle value={40} labeled modern pigment='success' />
				<br />
				<ProgressCircle value={60} modern pigment='info' />
				<br />
				<ProgressCircle value={70} labeled pigment='secondary' radius={95} strokeWidth={10} labelValue='count + %' modern />
				<br />
				<ProgressBar value={10} labeled labelPosition='left' modern minified pigment='dark' />
				<br />
				<ProgressBar value={20} labeled labelPosition='sticky' pigment='danger' modern />
				<br />
				<ProgressBar value={90} labeled labelPosition='center' pigment='warning' />
				<br />
				<ProgressBar value={40} labeled pigment='info' modern />
				<br />
				<ProgressBar value={50} animated labeled />
				<br />
				<ProgressBar value={60} modern animated labeled />
				<br />
				<ProgressBar value={70} labeled rounded pigment='success' />
				<br />
				<ProgressBar value={80} labeled minified pigment='secondary' labelPosition='outer' rounded />
				<br />
				<ProgressBar value={90} labeled minified pigment='dark' labelPosition='sticky' />
				<br />
				<ProgressBar value={8500} max={25000} labeled minified pigment='dark' labelPosition='sticky' labelValue='count' />
				<br />
				<ProgressBar
					value={12345}
					max={25000}
					labeled
					minified
					pigment='danger'
					labelPosition='sticky'
					labelValue='count + %'
					fixedLabelValue={1}
				/>
				<br />
				<h2>Outer label option not working with animated Prop</h2>
				<br />
				<br />
			</div>
			{/* <div>
				<h1>Flexbox based Grid</h1>
				<Flex>
					<Flex.Col>test</Flex.Col>
					<Flex.Col>test</Flex.Col>
					<Flex.Col>test</Flex.Col>
				</Flex>
			</div> */}
			<hr modern='true' />
			<div>
				<br />
				<h1>Breadcrumbs</h1>
				<Breadcrumbs>
					<Breadcrumbs.Item>App</Breadcrumbs.Item>
					<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
					<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
				</Breadcrumbs>
				<br />
				<Breadcrumbs separator='>'>
					<Breadcrumbs.Item>App</Breadcrumbs.Item>
					<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
					<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
				</Breadcrumbs>
				<br />
				<Breadcrumbs separator='→'>
					<Breadcrumbs.Item>
						<a href='https://google.com'>App</a>
					</Breadcrumbs.Item>
					<Breadcrumbs.Item>Docs</Breadcrumbs.Item>
					<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
				</Breadcrumbs>
				<br />
				<Breadcrumbs separator={<BreadcrumbSeparatorTest />}>
					<Breadcrumbs.Item separator='➧'>
						<a href='https://google.com'>App</a>
					</Breadcrumbs.Item>
					<Breadcrumbs.Item>
						<a href='https://google.bg'>App</a>
					</Breadcrumbs.Item>
					<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
					<Breadcrumbs.Item>
						<a href='https://google.bg'>App</a>
					</Breadcrumbs.Item>
					<Breadcrumbs.Item>Bradcrumbs</Breadcrumbs.Item>
				</Breadcrumbs>
				<br />
				<br />
			</div>
			<hr modern='true' />
			<div>
				<h1>Badges</h1>
				<Badge onClick={() => console.log("test")}>Default</Badge>
				<Badge pill>Pill Badge</Badge>
				<Badge modern>Modern Badge</Badge>
				<Badge modern pill>
					Modern Pill Badge
				</Badge>
				<Badge modern pigment='success'>
					Modern Success Badge
				</Badge>
				<Badge pigment='success'>Success Badge</Badge>
				<Badge pigment='danger' size='sm'>
					SM Badge
				</Badge>
				<Badge pigment='warning'>Badge</Badge>
				<Badge pigment='info' size='lg'>
					LG Badge
				</Badge>
				<Badge pigment='primary' size='xl' pill>
					XL Badge
				</Badge>
				<Button pigment='primary'>
					Notification
					<Badge pigment='light' size='sm' pill>
						12
					</Badge>
				</Button>
				<br />
				<br />
				<br />
			</div>
			<hr modern='true' />
			<div>
				<h1>Loaders / Spinners</h1>
				<SpinnerLoader />
				<LineLoader />
				<br />
			</div>
			<hr modern='true' />
			<div>
				<h1>Card</h1>
				<h2>Loading Cards</h2>
				<div>
					<h3>Custom Loader (Access Loader Props)</h3>
					<Card style={{ maxWidth: "25rem" }} modern loading>
						<Card.Loader>
							<div>Custom Loader</div>
						</Card.Loader>
						<Card.Header>Header2</Card.Header>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button pigment='primary'>Wassup</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
					<p>Must have overflow inside card to see benefits from sticky loader</p>
					<Card style={{ maxWidth: "25rem" }} modern loading>
						<Card.Loader pigment='secondary' modern sticky />
						<Card.Header>Header</Card.Header>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button pigment='primary'>Wassup</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
					<Card style={{ maxWidth: "25rem" }} modern loading>
						<Card.Header>Header</Card.Header>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button pigment='primary'>Wassup</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
					<Card style={{ maxWidth: "25rem" }} loading>
						<Card.Header>Header</Card.Header>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button pigment='primary'>Wassup</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
				</div>
				<br />
				<h2>Pigmented Cards</h2>
				<div>
					<Card style={{ maxWidth: "25rem" }} pigment='secondary' modern>
						<Card.Header>Header</Card.Header>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button pigment='primary'>Wassup</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
					<Card style={{ maxWidth: "25rem" }} pigment='secondary'>
						<Card.Header>Header</Card.Header>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button pigment='primary'>Wassup</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
				</div>
				<br />
				<h2>Default Cards</h2>
				<div>
					<Card style={{ maxWidth: "25rem" }}>
						<Card.Header ref={testCardRef}>Header</Card.Header>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button pigment='primary'>Wassup</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
					<Card modern style={{ maxWidth: "25rem" }}>
						<Card.Header>Header</Card.Header>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button pigment='primary'>Wassup</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
				</div>
				<br />
				<h2>Image Cards</h2>
				<br />
				<div>
					<Card style={{ maxWidth: "30rem" }} cardImgPosition='top'>
						<Card.Image>
							<ImageTest />
						</Card.Image>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button pigment='primary'>Wassup</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
					<Card style={{ maxWidth: "30rem" }} cardImgPosition={width >= 1200 ? "right" : "top"}>
						<Card.Image>
							<ImageTest />
						</Card.Image>
						<Card.Header>Header</Card.Header>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button pigment='primary'>Wassup</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
					<Card modern style={{ maxWidth: "30rem" }} cardImgPosition='left'>
						<Card.Image imgLink='https://picsum.photos/500/300' />
						<Card.Header>Header</Card.Header>
						<Card.Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aspernatur voluptates deserunt? Velit neque
								enim amet magnam deserunt perferendis iure veritatis molestias itaque! Quam, in.
							</p>
							<Button modern pigment='primary'>
								Wassup
							</Button>
						</Card.Body>
						<Card.Footer>Footer</Card.Footer>
					</Card>
					<br />
				</div>
				<br />
				<br />
			</div>
			<hr modern='true' />
			<div>
				<h1>Button Group</h1>
				<ButtonGroup vertical pigment='danger' modern>
					<Button round>test1</Button>
					<Button>test2</Button>
					<Button>test3</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button pigment='primary'>test1</Button>
					<Button pigment='warning'>test2</Button>
				</ButtonGroup>
				<ButtonGroup round>
					<Button pigment='primary'>test1</Button>
					<Button pigment='warning'>test2</Button>
					<Button pigment='danger'>test3</Button>
				</ButtonGroup>
				<ButtonGroup wide>
					<Button pigment='primary'>test1</Button>
					<Button pigment='warning'>test2</Button>
					<Button pigment='danger'>test3</Button>
				</ButtonGroup>
				<br />
				<br />
				<h1>Wide Button:</h1>
				<Button wide pigment='primary'>
					I am a Button
				</Button>
				<br />
				<br />
				<h1>Rounded Button:</h1>
				<Button round pigment='primary'>
					I am a Button
				</Button>
				<br />
				<br />
				<h1>Left Aligned Button:</h1>
				<Button pigment='primary' wide leftAlignContent>
					I am a Button
				</Button>
				<br />
				<br />
				<h1>Flex Button:</h1>
				<Button pigment='primary' flex>
					<span>I am else</span> I am a Button <small>I am small</small>
				</Button>
				<br />
				<br />
				<h1>Overflow ellipsis Button: *Parent must have Overflow: hidden</h1>
				<Button pigment='primary' unWrapText>
					Lorem ipsum
				</Button>
				<br />
				<br />
				<h1>Button sizes:</h1>
				<Button size='sm' pigment='primary'>
					I am a Small Button
				</Button>
				<Button size='md' pigment='primary'>
					I am a Medium Button
				</Button>
				<Button size='lg' pigment='primary'>
					I am a Large Button
				</Button>
				<Button size='xl' pigment='primary'>
					I am a XLarge Button
				</Button>
				<br />
				<br />
				<h1>Button colors:</h1>
				<Button>I am a Button</Button>
				<Button pigment='warning'>I am a Button</Button>
				<Button pigment='danger'>I am a Button</Button>
				<Button pigment='dark'>I am a Button</Button>
				<Button pigment='light'>I am a Button</Button>
				<Button pigment='primary'>I am a Button</Button>
				<Button pigment='secondary'>I am a Button</Button>
				<Button pigment='success'>I am a Button</Button>
				<Button pigment='info'>I am a Button</Button>
				<br />
				<br />
				<h1>Outlined Button colors:</h1>
				<Button outlined pigment='warning'>
					I am a Button
				</Button>
				<Button outlined pigment='danger'>
					I am a Button
				</Button>
				<Button outlined pigment='dark'>
					I am a Button
				</Button>
				<Button outlined pigment='light'>
					I am a Button
				</Button>
				<Button outlined pigment='primary'>
					I am a Button
				</Button>
				<Button outlined pigment='secondary'>
					I am a Button
				</Button>
				<Button outlined pigment='success'>
					I am a Button
				</Button>
				<Button outlined pigment='info'>
					I am a Button
				</Button>
				<br />
				<br />
				<h1>Loading Button colors:</h1>
				<Button loading outlined pigment='warning'>
					I am a Button
				</Button>
				<Button loading outlined pigment='danger'>
					I am a Button
				</Button>
				<Button loading outlined pigment='dark'>
					I am a Button
				</Button>
				<Button loading outlined pigment='light'>
					I am a Button
				</Button>
				<Button loading outlined pigment='primary'>
					I am a Button
				</Button>
				<Button loading outlined pigment='secondary'>
					I am a Button
				</Button>
				<Button loading outlined pigment='success'>
					I am a Button
				</Button>
				<Button loading outlined pigment='info'>
					I am a Button
				</Button>
				<Button loading pigment='warning'>
					I am a Button
				</Button>
				<Button loading pigment='danger'>
					I am a Button
				</Button>
				<Button loading pigment='dark'>
					I am a Button
				</Button>
				<Button loading pigment='light'>
					I am a Button
				</Button>
				<Button loading pigment='primary'>
					I am a Button
				</Button>
				<Button loading pigment='secondary'>
					I am a Button
				</Button>
				<Button loading pigment='success'>
					I am a Button
				</Button>
				<Button loading pigment='info'>
					I am a Button
				</Button>
				<Button loading modern pigment='warning'>
					I am Modern
				</Button>
				<Button loading modern pigment='danger'>
					I am Modern
				</Button>
				<Button loading modern pigment='dark'>
					I am Modern
				</Button>
				<Button loading modern pigment='light'>
					I am Modern
				</Button>
				<Button loading modern pigment='primary'>
					I am Modern
				</Button>
				<Button loading modern pigment='secondary'>
					I am Modern
				</Button>
				<Button loading modern pigment='success'>
					I am Modern
				</Button>
				<Button loading modern pigment='info'>
					I am Modern
				</Button>
				<br />
				<br />
				<h1>Modern Button Design: Outlined NOT working here</h1>
				<Button modern pigment='primary'>
					I am Modern
				</Button>
				<Button modern pigment='secondary'>
					I am Modern
				</Button>
				<Button modern pigment='success'>
					I am Modern
				</Button>
				<Button modern pigment='info'>
					I am Modern
				</Button>
				<Button modern pigment='warning'>
					I am Modern
				</Button>
				<Button modern pigment='danger'>
					I am Modern
				</Button>
				<Button modern pigment='light'>
					I am Modern
				</Button>
				<Button modern pigment='dark'>
					I am Modern
				</Button>
				<br />
				<br />
				{/* <h1>React-Spring Integration</h1>
				<AnimatedButton round pigment='secondary' size='xl' style={springBtn}>
					Animated
				</AnimatedButton> */}
			</div>
		</Container>
	);
};

export default App;
