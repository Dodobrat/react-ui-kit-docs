import { Button, Card, IconClose, Drawer, Portal, Text } from "@dodobrat/react-ui-kit";
import React, { useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";

const SuspensedPortal = lazy(() => import("../SuspensedPortal"));

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
			<Suspense fallback='Loading...'>
				{showModalA && <SuspensedPortal onClose={closeModalA} isOpen={showModalA} animation='none' />}
			</Suspense>

			<Portal onClose={closeModalB} isOpen={showModalB} animation='zoom'>
				<Card>
					<Card.Header
						actions={
							<Button sizing='xs' pigment='none' onClick={closeModalB}>
								<IconClose className='dui__icon' />
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

			<Text>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolor enim nobis, rerum praesentium minima nesciunt, sed
				perferendis, obcaecati cupiditate quibusdam fuga ab doloribus voluptatum iste ipsa impedit voluptatem quis quam iure?
				Tempora minus eveniet et nemo iusto quam dicta voluptatem! Accusantium tempora non dignissimos? Quaerat nobis, perspiciatis
				accusantium impedit quisquam dignissimos blanditiis doloribus minima ducimus veritatis quae asperiores optio accusamus, odio
				illum nihil doloremque officiis. Assumenda animi, tenetur, maxime ullam aperiam soluta in laboriosam veniam mollitia quo
				aspernatur possimus quaerat incidunt ad? Vel recusandae et nam minus quis dolores minima illum deserunt! Facere, ducimus
				totam! Obcaecati ipsum, ipsam aperiam qui ullam similique praesentium nobis magni dignissimos consectetur incidunt, omnis
				nisi explicabo. Quos id cumque alias repellendus tempore, quo iste ipsa non nulla quod eaque odio doloremque sunt dolorum
				sed recusandae quia eius beatae atque doloribus error dolore nihil libero voluptatibus. Velit maxime vitae doloremque nulla
				molestias a laborum consequatur fugiat! Cupiditate, expedita ad reiciendis inventore optio ex? Odit sequi tempore saepe
				consectetur voluptatibus quas ipsum provident voluptatum modi aspernatur dolorum eum sed unde, cumque eaque pariatur
				reiciendis veritatis minima repellendus incidunt error ea atque aperiam. Alias laboriosam illo iste, quasi cumque voluptas
				corrupti impedit saepe a, hic nobis temporibus veniam natus pariatur aperiam sunt dignissimos doloribus quas officia iusto
				ea autem obcaecati dolor. Tempore velit ratione quas vero id eaque, sapiente tempora illo enim ad? Ratione aut blanditiis
				sit ut est labore. Dolorem non tempore cumque in provident minus necessitatibus voluptate itaque. Autem dignissimos
				voluptate nobis id praesentium. In accusamus enim voluptatum rerum et doloribus neque voluptatem velit exercitationem quis
				culpa magni explicabo sequi id ratione esse, soluta voluptatibus, inventore nobis perspiciatis! Voluptatem delectus ut est
				sapiente veniam! In ducimus tenetur at, tempora aspernatur magni optio iusto mollitia distinctio fuga ea laudantium officia
				repellendus doloribus exercitationem pariatur vitae praesentium dolor nam, voluptatibus accusamus? Adipisci consectetur quis
				magnam perspiciatis fugiat expedita placeat dolore, accusantium illum cupiditate error quidem. Commodi cupiditate autem
				minus libero. Incidunt iure repudiandae quam esse unde porro quasi voluptates nostrum, numquam laudantium dolorem facilis ab
				quo ipsum laborum architecto harum velit corrupti qui sunt consequatur nam sint! Perferendis, quam obcaecati vero quas
				dolorum impedit inventore porro. Beatae unde aut totam quod magni architecto ipsum. Veritatis illum, asperiores modi vero
				totam nihil eveniet, obcaecati ipsum excepturi assumenda voluptatem ratione. Odit recusandae natus dicta inventore. Suscipit
				vel sit error quae commodi minus doloribus veritatis quia, cum nisi similique debitis ducimus exercitationem harum numquam
				deserunt distinctio architecto optio, nulla earum! Molestiae tenetur architecto temporibus nostrum possimus ratione, velit
				facilis nobis corporis, officia beatae, deleniti molestias commodi. Corrupti, iusto distinctio! Dicta assumenda
				reprehenderit explicabo atque a eos veritatis modi placeat, laborum officiis quibusdam saepe nemo impedit quod quaerat
				pariatur sapiente dolorem nulla nisi doloremque cupiditate? Excepturi incidunt eligendi deserunt necessitatibus neque quis
				eveniet veniam minima animi earum vero commodi cum, vel quo quidem voluptas quam totam. Laudantium aperiam sapiente
				obcaecati illum a, blanditiis expedita asperiores aspernatur iusto non aliquid maiores earum. Impedit consequuntur numquam
				maiores, nisi provident laboriosam repellendus modi accusamus distinctio cum consectetur aliquid alias velit vitae aperiam
				nobis, amet est omnis! Ullam aut tenetur cumque molestias qui ratione dolorum at non dolor sequi quibusdam numquam
				voluptates commodi quia nisi, enim earum ad ipsa iusto vero nihil quaerat similique architecto. Blanditiis, consectetur. Rem
				quasi ipsa temporibus doloribus ducimus. Impedit quibusdam tempore perferendis cupiditate placeat doloremque excepturi ex,
				perspiciatis fugit molestias tenetur minima eum nostrum nam vel explicabo amet ipsa molestiae. Eveniet expedita alias, id
				molestias voluptatum sequi provident vero deserunt quia officia praesentium odit ab minima magnam atque voluptate? Sint,
				neque velit atque, cumque sequi voluptatibus corporis odio mollitia aliquam magnam ipsum? Dolore tempore dicta at quia
				aliquam qui voluptatem voluptatibus cum quibusdam quaerat omnis quo, magnam blanditiis reiciendis excepturi maxime quisquam,
				ea culpa! Corporis laboriosam, sequi dolorum numquam illo eaque, dignissimos obcaecati odit tenetur laborum in omnis
				consequuntur provident unde temporibus fugiat. Atque fugiat quae, nisi cumque aut inventore iusto consequatur nulla
				assumenda, illum quis esse corporis cum at obcaecati quia, eligendi hic ab libero recusandae iure. Deleniti commodi iure
				aliquid sint placeat consequatur illo recusandae culpa, deserunt ipsa! Dolore harum officia eius minus dicta debitis
				corrupti nostrum explicabo laboriosam placeat sunt nihil deserunt, assumenda molestiae amet vero temporibus alias maxime ad
				unde natus perspiciatis exercitationem sint nemo! Dicta iure officia aspernatur, architecto veniam provident? Saepe
				perferendis tempore eum ex iste facere deserunt distinctio earum ullam dignissimos, corporis obcaecati! Temporibus omnis
				earum reprehenderit nulla quaerat enim, fuga sed ut officiis beatae vero quam! Iusto saepe fugit quae nulla quod nam quia,
				vero maxime facere, unde accusantium enim mollitia obcaecati optio porro tempore aperiam dignissimos quo. Numquam
				consequatur culpa nesciunt libero nam amet labore rem, quaerat veritatis at cupiditate ipsam alias dolore perferendis
				blanditiis, in autem, ipsa tempore tempora magnam repellendus! Ipsa suscipit, animi, laborum labore itaque repellendus
				laudantium, exercitationem reprehenderit soluta corporis perferendis maxime vel! Laboriosam obcaecati deleniti alias aut et,
				amet quas nam placeat. Dolor, at praesentium eligendi eum sit tenetur quas ipsa ipsum earum alias libero tempore, dolorum id
				numquam maxime eius iure harum placeat quo! Veritatis ratione error recusandae totam, ipsa blanditiis consectetur natus
				molestias nam dolorum cumque aut sunt dolores architecto voluptas, illum soluta asperiores itaque, qui esse culpa ea quo
				dolorem. Quae magni nobis qui perspiciatis aliquid doloremque possimus impedit sapiente omnis? Sint distinctio minus tempore
				ex, quidem dolores eius maiores quod natus numquam odio aperiam quisquam cumque officia vel perspiciatis adipisci. Mollitia,
				nihil.
			</Text>

			<h1>Drawer</h1>
			<Button onClick={openDrawerA}>Open Drawer</Button>

			<Button onClick={openDrawerB}>Open Drawer B</Button>

			<br />

			<Drawer onClose={closeDrawerA} sizing='xl' isOpen={showDrawerA} animation='none'>
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

			<Drawer onClose={closeDrawerB} isOpen={showDrawerB} position='right' sizing={{ base: "sm", lg: "xl" }}>
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
