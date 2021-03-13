import { Alert, Button, Close } from "@dodobrat/react-ui-kit";
import React from "react";

const AlertsPage = () => {
	return (
		<div>
			<br />
			<h1>Alert Pigmetns</h1>
			<Alert pigment={null}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolor? Ex porro omnis earum quae, ad, maxime provident
				exercitationem animi eveniet quis debitis sapiente dicta culpa itaque quibusdam aut doloribus sit distinctio qui dolorum
				officiis accusantium? Sunt ex, dolorum voluptas minima natus consequatur velit accusamus quo cupiditate magni nulla earum
				error enim repudiandae atque, consequuntur aspernatur aliquid tempore nisi vel porro ullam dolore rem? Deserunt error
				assumenda facere perspiciatis non iste, ab quam vero. Similique tempore sequi necessitatibus consequatur exercitationem.
				Reprehenderit culpa itaque adipisci voluptates enim ad natus? Alias mollitia porro, dolorum hic optio delectus cumque id
				eveniet ratione at soluta dignissimos eius! Maiores laborum nihil expedita, possimus hic saepe molestiae ratione laudantium
				esse eum quidem aliquam commodi molestias odit veritatis animi sapiente autem fuga aspernatur quos? Quibusdam pariatur
				nostrum eligendi voluptate corrupti quod quae sequi quasi minima sint quo voluptates veniam deleniti natus, magnam
				aspernatur, ab distinctio culpa, atque nulla suscipit eius odio dolore veritatis? Architecto voluptatibus quod totam, earum
				culpa expedita aliquam delectus natus nesciunt dolore libero tempora laborum sint ratione deleniti qui quam facilis sit
				nulla cumque dolorem porro et, labore sequi. Ipsam distinctio ad rem voluptate ipsa dicta. Nisi, illum nesciunt! Sequi
				placeat, harum laboriosam hic quas ad exercitationem commodi reiciendis dolore qui, veniam ipsam natus rem, doloribus dicta
				dolorem tempora doloremque praesentium quos sit expedita cupiditate sapiente perferendis eius. Quo, voluptatibus cupiditate?
				Fuga iusto dolorum consequatur facere quae beatae, deserunt dolore quibusdam a rerum ipsam excepturi tempore tenetur omnis
				consectetur, ea, inventore quaerat similique magni suscipit? Tenetur eius explicabo quos aliquid velit repellat nemo aliquam
				vitae, cupiditate voluptas quasi necessitatibus hic blanditiis saepe, aut, excepturi soluta cum est illo modi. Atque ducimus
				nemo fugit, debitis nesciunt modi amet animi aspernatur fugiat beatae, temporibus veritatis. Dolorum itaque, dignissimos rem
				odio accusantium voluptatum labore doloremque quas necessitatibus.
			</Alert>
			<br />
			<Alert pigment='warning'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert pigment='info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert pigment='success'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert pigment='primary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellat?</Alert>
			<br />
			<Alert pigment='success' contrast>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
			<Alert pigment='primary' contrast>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellat?
			</Alert>

			<h1>Alert Elevation</h1>
			<Alert elevation='subtle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert elevation='interstellar'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>

			<h1>Alert utils</h1>
			<Alert rounded>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert flat>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.</Alert>
			<br />
			<Alert isDismissible isDismissibleOnClick={false}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
			<Alert
				isDismissible
				dismissibleComponent={
					<Button size='xs' pigment='danger' contrast>
						<Close className='btn__icon' />
					</Button>
				}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, commodi.
			</Alert>
			<br />
		</div>
	);
};

export default AlertsPage;
