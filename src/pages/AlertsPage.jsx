import { Alert, Button, Close } from "@dodobrat/react-ui-kit";
import React from "react";

const AlertsPage = () => {
	return (
		<div>
			<br />
			<h1>Alert Pigments</h1>
			<Alert pigment={{ base: null, lg: "danger" }} pigmentColor={{ base: "danger", lg: null }} className='filled'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolor? Ex porro omnis earum quae, ad, maxime provident
				exercitationem animi eveniet quis debitis sapiente dicta culpa itaque quibusdam aut doloribus sit distinctio qui dolorum
				officiis accusantium? Sunt ex, dolorum voluptas minima natus consequatur velit accusamus quo cupiditate magni nulla earum
				error enim repudiandae atque, consequuntur aspernatur aliquid tempore nisi vel porro ullam dolore rem? Deserunt error
				assumenda facere perspiciatis non iste, ab quam vero. Similique tempore sequi necessitatibus consequatur exercitationem.
				Reprehenderit culpa itaque adipisci voluptates enim ad natus? Alias mollitia porro, dolorum hic optio delectus cumque id
				eveniet ratione at soluta dignissimos eius!
			</Alert>
			<br />
			<Alert pigment='default'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
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
			<Alert pigment={{ base: "warning", md: "info", lg: "success" }}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />

			<h1>Alert Elevation</h1>
			<Alert pigment='default' elevation={{ base: "interstellar", md: "medium", xl: "subtle" }}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
			<Alert pigment='success' elevation='light'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />

			<h1>Alert Size</h1>
			<Alert size='xs' isDismissible>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
			<Alert size='sm' isDismissible>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
			<Alert size='md' isDismissible>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
			<Alert size='lg' isDismissible>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
			<Alert size='xl' isDismissible>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
			<Alert size={{ base: "sm", sm: "md", lg: "lg", xl: "xl" }} isDismissible>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />

			<h1>Alert utils</h1>
			<Alert flavor='rounded'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert flavor='flat'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert flavor={{ base: "flat", md: "rounded", xl: "default" }}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
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
