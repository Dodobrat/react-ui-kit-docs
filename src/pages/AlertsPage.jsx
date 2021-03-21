import { Alert, Button, Close } from "@dodobrat/react-ui-kit";
import React from "react";

const AlertsPage = () => {
	return (
		<div>
			<br />
			<h1>Alert Pigments</h1>
			<Alert pigment={null}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolor? Ex porro omnis earum quae, ad, maxime provident
				exercitationem animi eveniet quis debitis sapiente dicta culpa itaque quibusdam aut doloribus sit distinctio qui dolorum
				officiis accusantium? Sunt ex, dolorum voluptas minima natus consequatur velit accusamus quo cupiditate magni nulla earum
				error enim repudiandae atque, consequuntur aspernatur aliquid tempore nisi vel porro ullam dolore rem? Deserunt error
				assumenda facere perspiciatis non iste, ab quam vero. Similique tempore sequi necessitatibus consequatur exercitationem.
				Reprehenderit culpa itaque adipisci voluptates enim ad natus? Alias mollitia porro, dolorum hic optio delectus cumque id
				eveniet ratione at soluta dignissimos eius!
			</Alert>
			<br />
			<Alert pigment='primary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert pigment='secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert pigment='info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert pigment='success'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert pigment='danger'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellat?</Alert>
			<br />
			<Alert pigment='warning'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />

			<h1>Alert Elevation</h1>
			<Alert pigment={null} elevation='subtle'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
			<Alert pigment={null} elevation='interstellar'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />

			<h1>Alert utils</h1>
			<Alert rounded>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert flat>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />

			<h1>Alert Close component</h1>
			<Alert isDismissible isDismissibleOnClick={false}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
			<Alert
				isDismissible
				dismissibleComponent={
					<Button size='xs' pigment='warning'>
						<Close className='dui__icon' />
					</Button>
				}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
		</div>
	);
};

export default AlertsPage;
