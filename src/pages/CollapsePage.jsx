import { Accordion, Collapse, Heading } from "@dodobrat/react-ui-kit";
import React from "react";

const CollapsePage = () => {
	return (
		<div>
			<h1>Flat Collapse (Accordion)</h1>
			<Accordion onToggle={(isCollapsed) => console.log(isCollapsed)}>
				<Collapse flat>
					<Collapse.Toggle collapseIndicatorComponent={"custom"}>Collapse 1</Collapse.Toggle>
					<Collapse.Content>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur molestias
							nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis voluptate
							vitae veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi totam, temporibus
							suscipit reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus
							officia autem, quia eum excepturi. Aspernatur, et velit? Illo laboriosam ea voluptate officia excepturi.
							Mollitia totam quis alias architecto quaerat laborum temporibus officia, in debitis aperiam itaque, harum ab
							quod molestiae? Vel sapiente inventore dolor iure dolorem, in doloremque quis, nesciunt consequuntur rerum fugit
							animi dicta perferendis ab assumenda. Reprehenderit, culpa aspernatur quibusdam quia atque eveniet est
							reiciendis pariatur, soluta vitae quos dolores aut sequi praesentium vero obcaecati! Eaque dignissimos
							repudiandae voluptatibus aliquam odio cum natus magnam harum, facilis voluptates numquam saepe quisquam deserunt
							corrupti reiciendis veritatis vitae, fugiat culpa eveniet voluptatum! Dolores quos perspiciatis nihil. Impedit,
							voluptate praesentium illo earum neque laboriosam doloremque incidunt, distinctio nihil recusandae facere nisi
							cumque dolorem aliquam ratione ipsum reiciendis perferendis sed. Blanditiis voluptatem maxime esse odio omnis ad
							impedit labore vel natus, aliquid optio corrupti quod amet eaque. Nihil dolorem neque voluptate sapiente numquam
							iure aspernatur.
						</p>
					</Collapse.Content>
				</Collapse>
				<Collapse flat>
					<Collapse.Toggle>Collapse 2</Collapse.Toggle>
					<Collapse.Content>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur molestias
							nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis voluptate
							vitae veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi totam, temporibus
							suscipit reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus
							officia autem, quia eum excepturi. Aspernatur, et velit? Illo laboriosam ea voluptate officia excepturi.
							Mollitia totam quis alias architecto quaerat laborum temporibus officia, in debitis aperiam itaque, harum ab
							quod molestiae?
						</p>
					</Collapse.Content>
				</Collapse>
				<Collapse flat>
					<Collapse.Toggle>Collapse 3</Collapse.Toggle>
					<Collapse.Content>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</Collapse.Content>
				</Collapse>
			</Accordion>
			<br />
			<h1>Collapse</h1>
			<Collapse onToggle={(value) => console.log("isCollapsed : ", value)}>
				<Collapse.Toggle>hello</Collapse.Toggle>
				<Collapse.Content>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur molestias
						nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis voluptate vitae
						veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi totam, temporibus suscipit
						reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus officia autem,
						quia eum excepturi. Aspernatur, et velit? Illo laboriosam ea voluptate officia excepturi. Mollitia totam quis alias
						architecto quaerat laborum temporibus officia, in debitis aperiam itaque, harum ab quod molestiae? Vel sapiente
						inventore dolor iure dolorem, in doloremque quis, nesciunt consequuntur rerum fugit animi dicta perferendis ab
						assumenda. Reprehenderit, culpa aspernatur quibusdam quia atque eveniet est reiciendis pariatur, soluta vitae quos
						dolores aut sequi praesentium vero obcaecati! Eaque dignissimos repudiandae voluptatibus aliquam odio cum natus
						magnam harum, facilis voluptates numquam saepe quisquam deserunt corrupti reiciendis veritatis vitae, fugiat culpa
						eveniet voluptatum! Dolores quos perspiciatis nihil. Impedit, voluptate praesentium illo earum neque laboriosam
						doloremque incidunt, distinctio nihil recusandae facere nisi cumque dolorem aliquam ratione ipsum reiciendis
						perferendis sed. Blanditiis voluptatem maxime esse odio omnis ad impedit labore vel natus, aliquid optio corrupti
						quod amet eaque. Nihil dolorem neque voluptate sapiente numquam iure aspernatur.
					</div>
				</Collapse.Content>
			</Collapse>
			<h1>Nested Collapse</h1>
			<Collapse scrollIntoViewOnToggle>
				<Collapse.Toggle>hello</Collapse.Toggle>
				<Collapse.Content>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur molestias
						nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis voluptate vitae
						veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi totam, temporibus suscipit
						reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus officia autem,
						quia eum excepturi. Aspernatur, et velit? Illo laboriosam ea voluptate officia excepturi. Mollitia totam quis alias
						architecto quaerat laborum temporibus officia, in debitis aperiam itaque, harum ab quod molestiae? Vel sapiente
						inventore dolor iure dolorem, in doloremque quis, nesciunt consequuntur rerum fugit animi dicta perferendis ab
						assumenda. Reprehenderit, culpa aspernatur quibusdam quia atque eveniet est reiciendis pariatur, soluta vitae quos
						dolores aut sequi praesentium vero obcaecati! Eaque dignissimos repudiandae voluptatibus aliquam odio cum natus
						magnam harum, facilis voluptates numquam saepe quisquam deserunt corrupti reiciendis veritatis vitae, fugiat culpa
						eveniet voluptatum! Dolores quos perspiciatis nihil. Impedit, voluptate praesentium illo earum neque laboriosam
						doloremque incidunt, distinctio nihil recusandae facere nisi cumque dolorem aliquam ratione ipsum reiciendis
						perferendis sed. Blanditiis voluptatem maxime esse odio omnis ad impedit labore vel natus, aliquid optio corrupti
						quod amet eaque. Nihil dolorem neque voluptate sapiente numquam iure aspernatur.
					</p>
					<Collapse>
						<Collapse.Toggle>Collapse 2</Collapse.Toggle>
						<Collapse.Content>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur
								molestias nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis
								voluptate vitae veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi
								totam, temporibus suscipit reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem
								accusamus ducimus officia autem
							</p>
							<Accordion>
								<Heading as='h5'> Nested Accordion</Heading>
								<Collapse>
									<Collapse.Toggle>Acc Collapse 1</Collapse.Toggle>
									<Collapse.Content>
										<div>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique
											consequuntur molestias nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque,
											provident maiores, corporis voluptate vitae veritatis accusamus maxime ipsum natus corrupti
											officiis. Nihil cumque iusto fugit modi totam, temporibus suscipit reiciendis rerum recusandae
											assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus officia autem
										</div>
									</Collapse.Content>
								</Collapse>

								<Heading as='h6'> Content between Accordion panels</Heading>

								<Collapse>
									<Collapse.Toggle>Acc Collapse 2</Collapse.Toggle>
									<Collapse.Content>
										<div>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique
											consequuntur molestias nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque,
											provident maiores, corporis voluptate vitae veritatis accusamus maxime ipsum natus corrupti
											officiis.
										</div>
									</Collapse.Content>
								</Collapse>
							</Accordion>
						</Collapse.Content>
					</Collapse>
					<br />
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit odit recusandae atque tenetur ad similique
						cupiditate? Dicta est excepturi cum temporibus qui cumque soluta, doloribus fuga beatae! Voluptate eaque explicabo
						totam voluptas impedit, quas doloremque, quam obcaecati maxime adipisci facilis architecto modi. Voluptate vitae
						deleniti nulla ipsum ullam ut aperiam animi pariatur perspiciatis excepturi maxime possimus, earum recusandae
						veritatis alias tempore amet est saepe modi similique cupiditate non? Exercitationem repellat dolores unde ad?
						Commodi in iusto assumenda animi omnis dolorem fuga itaque, optio quos molestias esse asperiores eveniet. Non
						accusamus dolorem consectetur perspiciatis labore possimus officia laborum? Molestias magni quisquam recusandae
						accusamus dolorum porro dolore iusto enim placeat minus perspiciatis veritatis expedita, quibusdam voluptatibus et
						corporis itaque, ut, temporibus tempore excepturi quas doloribus? Consequuntur cupiditate amet sint quaerat
						accusamus exercitationem nesciunt itaque, impedit quo consequatur repellendus, officia laboriosam esse quasi animi
						praesentium aliquid? Quibusdam asperiores sapiente optio vitae error iste sed reprehenderit neque harum, quae atque
						cum voluptatem perferendis hic quod nostrum voluptas dicta quam repellendus dolore cumque ullam deserunt officiis
						nihil! Dignissimos vero dicta voluptates labore tenetur minus, iure hic id debitis! Praesentium, labore perferendis
						quos aut, nulla, ipsum rem suscipit vitae excepturi ex perspiciatis provident? Fugiat, minima placeat.
					</p>
					<Collapse>
						<Collapse.Toggle>Collapse 4</Collapse.Toggle>
						<Collapse.Content>
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur
								molestias nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis
								voluptate vitae veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi
								totam, temporibus suscipit reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem
								accusamus ducimus officia autem
							</div>
						</Collapse.Content>
					</Collapse>
				</Collapse.Content>
			</Collapse>
			<br />
			<h1>Collapse Pigments</h1>
			<Collapse pigment='secondary'>
				<Collapse.Toggle>Collapse 4</Collapse.Toggle>
				<Collapse.Content>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur molestias
						nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis voluptate vitae
						veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi totam, temporibus suscipit
						reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus officia autem
					</div>
				</Collapse.Content>
			</Collapse>
			<br />
			<Collapse pigment='info'>
				<Collapse.Toggle>Collapse 4</Collapse.Toggle>
				<Collapse.Content>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur molestias
						nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis voluptate vitae
						veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi totam, temporibus suscipit
						reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus officia autem
					</div>
				</Collapse.Content>
			</Collapse>
			<br />
			<h1>Collapse Loaders</h1>
			<Collapse isLoading>
				<Collapse.Toggle>Collapse 4</Collapse.Toggle>
				<Collapse.Content>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur molestias
						nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis voluptate vitae
						veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi totam, temporibus suscipit
						reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus officia autem
					</div>
				</Collapse.Content>
			</Collapse>
			<br />
			<Collapse isLoading disableWhileLoading={false}>
				<Collapse.Loader pigment='info' />
				<Collapse.Toggle>Collapse 4</Collapse.Toggle>
				<Collapse.Content>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur molestias
						nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis voluptate vitae
						veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi totam, temporibus suscipit
						reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus officia autem
					</div>
				</Collapse.Content>
			</Collapse>
			<br />
			<Collapse isLoading disableWhileLoading={false}>
				<Collapse.Loader pigment='success' />
				<Collapse.Toggle>Collapse 4</Collapse.Toggle>
				<Collapse.Content animation='collapse'>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur molestias
						nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis voluptate vitae
						veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi totam, temporibus suscipit
						reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus officia autem
					</div>
				</Collapse.Content>
			</Collapse>
			<br />
			<Collapse isLoading disableWhileLoading={false}>
				<Collapse.Loader>Custom Loader</Collapse.Loader>
				<Collapse.Toggle>Collapse 4</Collapse.Toggle>
				<Collapse.Content>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quisquam similique consequuntur molestias
						nostrum culpa explicabo quibusdam atque qui dicta tempore harum neque, provident maiores, corporis voluptate vitae
						veritatis accusamus maxime ipsum natus corrupti officiis. Nihil cumque iusto fugit modi totam, temporibus suscipit
						reiciendis rerum recusandae assumenda iste nesciunt, ut distinctio a quod dolorem accusamus ducimus officia autem
					</div>
				</Collapse.Content>
			</Collapse>
		</div>
	);
};

export default CollapsePage;
