import { Button, ButtonGroup, IconMoon, Tabs } from "@dodobrat/react-ui-kit";
import React from "react";
import { useState } from "react";

const TabsPage = () => {
	const [tabOrientation, setTabOrientation] = useState("horizontal");

	return (
		<div>
			<h1>Tabs</h1>
			<div id='default-tabs'>
				<h2>Default Tabs</h2>
				<ButtonGroup>
					<Button active={tabOrientation === "horizontal"} onClick={() => setTabOrientation("horizontal")}>
						Horizontal
					</Button>
					<Button active={tabOrientation === "vertical"} onClick={() => setTabOrientation("vertical")}>
						Vertical
					</Button>
				</ButtonGroup>

				<br />
				<br />

				<Tabs activeTab={8} orientation={tabOrientation}>
					<Tabs.Panel
						tab={
							<>
								<IconMoon /> Tab 1
							</>
						}>
						1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.
					</Tabs.Panel>
					<Tabs.Panel tab={"Tab 2"}>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 3"}>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 4"} disabled>
						4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.
					</Tabs.Panel>
					<Tabs.Panel tab={"Tab 5"} disabled>
						5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.
					</Tabs.Panel>
					<Tabs.Panel tab={"Tab 6"}>6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 7"}>7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 8"} disabled>
						8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.
					</Tabs.Panel>
					<Tabs.Panel tab={"Tab 9"}>
						9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem debitis odio illum modi.
						Exercitationem tempore asperiores quos, optio obcaecati porro laboriosam magnam odit, itaque aut saepe harum ea!
						Amet voluptatum omnis ipsum ex expedita earum aliquid quasi ut itaque iste placeat aperiam libero, similique,
						perspiciatis eaque. Qui laborum modi, laudantium temporibus sapiente eos possimus est cupiditate beatae impedit ad
						quod fugit placeat deserunt perferendis, vero at quasi. Incidunt numquam eveniet eaque similique error, doloribus ad
						fugiat, totam qui illum quo ducimus voluptatem tempora voluptates non, quia quis earum necessitatibus ipsum eos
						nulla. Doloribus nobis unde, illo voluptatibus, enim debitis in omnis nisi quasi dicta autem. Excepturi est cum quam
						quod ut? Aut impedit quisquam iste autem earum blanditiis enim modi eveniet fuga quae! Magni earum quasi et fuga vel
						eaque quidem provident obcaecati veniam explicabo quod a, rerum nesciunt aperiam perferendis eligendi in dignissimos
						neque facilis optio maiores porro pariatur quisquam minus! Quaerat voluptatibus eos aut laudantium quas ipsa
						consectetur sunt magni possimus iusto? Cum eligendi expedita ratione temporibus iste deserunt delectus? Tempora
						repellendus expedita porro. Odit eligendi aspernatur accusantium eos doloremque dolorum iste repellendus dolorem
						commodi fugit. Voluptatibus delectus adipisci quasi libero laudantium, tempore sint. Natus, veniam placeat!
					</Tabs.Panel>
					<Tabs.Panel tab={"Tab 10"}>10. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 11"}>11. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 12"}>12. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
				</Tabs>
			</div>
			<div id='vertical-tabs'>
				<br />
				<h2>Vertical Tabs</h2>
				<Tabs
					activeTab={2}
					orientation='vertical'
					pigment={{ base: "success", lg: "info" }}
					flavor={{ base: "flat", lg: "default" }}>
					<Tabs.Panel tab={"Tab 1"}>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 2"}>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 3"}>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 4"}>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 5"}>5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 6"}>6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 7"}>7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 8"}>8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 9"}>9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 10"}>
						10. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit porro tempore maxime aliquam accusantium quod
						commodi. Quae, repellat saepe sint expedita sapiente facilis quos fuga dolore explicabo similique impedit ab
						ratione, inventore mollitia dolorum exercitationem accusantium eius. Hic illum quasi obcaecati architecto amet? Et,
						accusamus ab nesciunt tenetur est quidem eum. Assumenda facere sapiente tenetur nisi deleniti aperiam sunt, nemo
						accusamus quasi labore incidunt veniam laborum obcaecati dignissimos, quia nostrum? Est repudiandae inventore
						corporis dolorum magnam, quasi ab laudantium tempora atque obcaecati beatae dignissimos fugit illum sint odit eum
						nemo cumque, at praesentium nisi earum iure. Quam libero omnis eligendi porro ea! Similique officiis iusto incidunt
						facere error, eligendi officia quae! Quidem voluptas, labore quae tenetur quos dolorem numquam cumque. Animi, neque
						sed molestiae quisquam voluptate corporis esse aut deleniti. Suscipit quia eum odit commodi dolor quisquam esse modi
						hic, est ipsa, veniam amet! Inventore neque rem et enim mollitia amet sit saepe ipsa unde a aperiam, quisquam esse
						nam cumque. Non odio fugit sequi delectus, quod officia nihil laudantium. Vitae ut facere cumque eveniet natus
						architecto laborum, iure, dolorum beatae excepturi magnam, sed fugit? Nesciunt quisquam mollitia harum sed inventore
						placeat laborum beatae neque, necessitatibus voluptatum consequuntur dolor aliquid possimus facilis fuga qui,
						corporis sit architecto dolorum quia aliquam! Dolor, natus sapiente! Sequi molestias error enim laborum eligendi.
						Saepe, alias obcaecati! Autem pariatur a omnis explicabo cum earum voluptas, fugiat voluptate iure aliquid
						aspernatur nobis natus adipisci iusto ab rem dolorum illo odit, repellendus necessitatibus quis tempora vero
						laudantium. Dicta dignissimos, accusantium eligendi quibusdam alias ab! Culpa, cupiditate praesentium perferendis
						velit ullam, quaerat asperiores reprehenderit rem accusantium minus tempore in quidem. Sit minus iste tempore, vero
						ad, deserunt adipisci consectetur et suscipit dicta pariatur autem saepe. Quis earum nesciunt iste consequuntur
						facere similique quisquam beatae enim aspernatur nulla delectus iure id non hic, provident corporis. Nemo itaque
						fugit, neque reprehenderit nulla distinctio corporis necessitatibus qui ipsum cumque eius iste ullam porro cum
						temporibus quia aliquid consequatur cupiditate, quas ipsa obcaecati veniam laboriosam saepe! Accusamus perspiciatis
						molestiae dolorem minima nulla vero aut quos corporis praesentium, cupiditate consectetur. Qui, fugiat cumque
						dolorem, quas nihil perspiciatis adipisci rerum esse praesentium eligendi cupiditate ducimus non ut hic magni
						perferendis corporis itaque. Quibusdam, adipisci aut ratione est sint mollitia nam facilis quaerat accusantium
						quasi, natus nulla deserunt iure eius molestiae sit obcaecati aliquam velit. Sunt ipsa ratione fugiat cumque odio
						placeat earum aliquam molestiae. Qui aut ad odit, reiciendis minus assumenda eum soluta explicabo sed nemo?
						Laboriosam laborum, officiis fuga quasi perferendis optio ratione omnis dolorem, quas quam totam consequuntur sit
						dolore voluptate facere unde, minima velit cupiditate! Aliquid laudantium qui id, nemo reprehenderit voluptas vel
						inventore quas, dolore quam tempore, nesciunt totam maiores numquam rem quisquam culpa blanditiis architecto debitis
						excepturi. Optio obcaecati, distinctio asperiores repellat doloremque porro, commodi quibusdam voluptates odit
						itaque debitis eum culpa deleniti architecto laboriosam libero adipisci quaerat accusantium quidem ipsum cumque nam!
						Incidunt at tempore ad sint nesciunt vitae a maiores vel, culpa quis totam. Iste, tempora maiores!
					</Tabs.Panel>
					<Tabs.Panel tab={"Tab 11"}>11. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
					<Tabs.Panel tab={"Tab 12"}>12. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eaque.</Tabs.Panel>
				</Tabs>
			</div>
		</div>
	);
};

export default TabsPage;
