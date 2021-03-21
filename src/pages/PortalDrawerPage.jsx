import { Button, Card, Close, Drawer, Portal } from "@dodobrat/react-ui-kit";
import React, { useState } from "react";

// PortalWrapper

const PortalDrawerPage = () => {
	const [showModalA, setShowModalA] = useState(false);
	const [showModalB, setShowModalB] = useState(false);

	const closeModalA = () => setShowModalA(false);
	const openModalA = () => setShowModalA(true);

	const closeModalB = () => setShowModalB(false);
	const openModalB = () => setShowModalB(true);

	const [showDrawerA, setShowDrawerA] = useState(false);
	const [showDrawerB, setShowDrawerB] = useState(false);

	const closeDrawerA = () => setShowDrawerA(false);
	const openDrawerA = () => setShowDrawerA(true);

	const closeDrawerB = () => setShowDrawerB(false);
	const openDrawerB = () => setShowDrawerB(true);

	return (
		<div>
			<h1>Portals</h1>
			<Button onClick={openModalA}>Open Modal</Button>

			<Button onClick={openModalB}>Open Modal B</Button>

			<br />

			<Portal onClose={closeModalA} size='xl' verticalAlign='start' isOpen={showModalA}>
				<Card>
					<Card.Header
						actions={
							<Button size='xs' pigment={null} onClick={closeModalA}>
								<Close className='dui__icon' />
							</Button>
						}>
						Portal Modal
					</Card.Header>
					<Card.Body>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						<Button onClick={openModalB}>Open 2nd Modal</Button>
					</Card.Body>
				</Card>
			</Portal>

			<Portal onClose={closeModalB} isOpen={showModalB} animation='zoom'>
				<Card>
					<Card.Header
						actions={
							<Button size='xs' pigment={null} onClick={closeModalB}>
								<Close className='dui__icon' />
							</Button>
						}>
						Portal Modal
					</Card.Header>
					<Card.Body>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid debitis sint minima enim laboriosam
						repudiandae in, cupiditate obcaecati harum optio eius possimus consectetur magnam at a omnis expedita? Repellat
						voluptate, vitae commodi quam cumque beatae ut vero tenetur eveniet mollitia ea laudantium voluptates, natus itaque
						nemo voluptatem quidem quo?
					</Card.Body>
				</Card>
			</Portal>

			<h1>Drawer</h1>
			<Button onClick={openDrawerA}>Open Drawer</Button>

			<Button onClick={openDrawerB}>Open Drawer B</Button>

			<br />

			<Drawer onClose={closeDrawerA} size='xl' isOpen={showDrawerA} position='top'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur minima totam non nulla iure blanditiis, amet
					officiis architecto fugiat ducimus sapiente similique id? Sapiente fugiat veniam vitae commodi facilis nemo autem
					repellendus labore magni ullam recusandae natus incidunt voluptate qui iure, deleniti neque. Expedita ipsum quae ipsam
					hic, eius est tempora quibusdam ducimus aliquam, sed possimus perferendis. Voluptatibus pariatur iusto, voluptatum
					laborum soluta cum sunt nobis minima illo architecto sed ab! Autem perferendis consequuntur enim labore. Magnam,
					temporibus ipsum quae quis, aliquid ab rerum consectetur reprehenderit atque deserunt tempore sit obcaecati, a esse
					natus nemo distinctio odio! Sed, tempora sapiente omnis libero alias sit animi quasi et magni doloremque nihil ad
					obcaecati ea ipsa ipsum. Vero ad, quasi repudiandae dolor corrupti minus obcaecati. Quibusdam quidem cupiditate incidunt
					perferendis qui veniam explicabo fuga eum, est possimus architecto excepturi quisquam quis nesciunt repellendus
					corporis, aut nostrum, sapiente dicta vitae error nam. Soluta exercitationem amet, cupiditate odio illum voluptatibus
					dolorem tenetur facilis doloribus molestias quae perferendis sed reiciendis incidunt et quam ea officia officiis nulla
					fugiat. Esse, porro, cumque soluta vel voluptatum quae quas debitis ex neque doloremque dolorum repellat sapiente
					commodi fugit quaerat voluptate quam architecto ab dolor excepturi eveniet? Rerum.
					<Button onClick={openDrawerB}>Open Drawer B</Button>
				</p>
			</Drawer>

			<Drawer onClose={closeDrawerB} isOpen={showDrawerB} position='right'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur minima totam non nulla iure blanditiis, amet
					officiis architecto fugiat ducimus sapiente similique id? Sapiente fugiat veniam vitae commodi facilis nemo autem
					repellendus labore magni ullam recusandae natus incidunt voluptate qui iure, deleniti neque. Expedita ipsum quae ipsam
					hic, eius est tempora quibusdam ducimus aliquam, sed possimus perferendis. Voluptatibus pariatur iusto, voluptatum
					laborum soluta cum sunt nobis minima illo architecto sed ab! Autem perferendis consequuntur enim labore. Magnam,
					temporibus ipsum quae quis, aliquid ab rerum consectetur reprehenderit atque deserunt tempore sit obcaecati, a esse
					natus nemo distinctio odio! Sed, tempora sapiente omnis libero alias sit animi quasi et magni doloremque nihil ad
					obcaecati ea ipsa ipsum. Vero ad, quasi repudiandae dolor corrupti minus obcaecati. Quibusdam quidem cupiditate incidunt
					perferendis qui veniam explicabo fuga eum, est possimus architecto excepturi quisquam quis nesciunt repellendus
					corporis, aut nostrum, sapiente dicta vitae error nam. Soluta exercitationem amet, cupiditate odio illum voluptatibus
					dolorem tenetur facilis doloribus molestias quae perferendis sed reiciendis incidunt et quam ea officia officiis nulla
					fugiat. Esse, porro, cumque soluta vel voluptatum quae quas debitis ex neque doloremque dolorum repellat sapiente
					commodi fugit quaerat voluptate quam architecto ab dolor excepturi eveniet? Rerum.
				</p>
			</Drawer>
		</div>
	);
};

export default PortalDrawerPage;
