import React, { lazy, Suspense, useEffect } from "react";
import {
	BackTop,
	Button,
	Container,
	IconSun,
	IconMoon,
	useConfig,
	AdminLayout,
	Text,
	IconWarning,
	IconUser,
	IconHamburger,
	useAdminLayout,
} from "@dodobrat/react-ui-kit";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

const AlertsPage = lazy(() => import("./pages/AlertsPage"));
const BadgePage = lazy(() => import("./pages/BadgePage"));
const BreadcrumbsPage = lazy(() => import("./pages/BreadcrumbsPage"));
const ButtonsPage = lazy(() => import("./pages/ButtonsPage"));
const CardPage = lazy(() => import("./pages/CardPage"));
const CollapsePage = lazy(() => import("./pages/CollapsePage"));
const DragScrollPage = lazy(() => import("./pages/DragScrollPage"));
const FlexPage = lazy(() => import("./pages/FlexPage"));
const IconsPage = lazy(() => import("./pages/IconsPage"));
const ListGroupPage = lazy(() => import("./pages/ListGroupPage"));
const PortalDrawerPage = lazy(() => import("./pages/PortalDrawerPage"));
const ProgressPage = lazy(() => import("./pages/ProgressPage"));
const SkeletonPage = lazy(() => import("./pages/SkeletonPage"));
const SpinnersPage = lazy(() => import("./pages/SpinnersPage"));
const TabsPage = lazy(() => import("./pages/TabsPage"));
const TypographyPage = lazy(() => import("./pages/TypographyPage"));
const FormsPage = lazy(() => import("./pages/FormsPage"));
const InputsPage = lazy(() => import("./pages/InputsPage"));
const TooltipPage = lazy(() => import("./pages/TooltipPage"));
const TablesPage = lazy(() => import("./pages/TablesPage"));
const DropdownsPage = lazy(() => import("./pages/DropdownsPage"));

const pages = [
	{
		path: "/alerts",
		component: AlertsPage,
		icon: <IconWarning className='dui__icon' />,
		label: "Alerts",
	},
	{
		path: "/badges",
		component: BadgePage,
		icon: <IconUser className='dui__icon' />,
		label: "Badges",
	},
	{
		path: "/breadcrumbs",
		component: BreadcrumbsPage,
		icon: <IconUser className='dui__icon' />,
		label: "Breadcrumbs",
	},
	{
		path: "/buttons",
		component: ButtonsPage,
		icon: <IconUser className='dui__icon' />,
		label: "Buttons",
	},
	{
		path: "/cards",
		component: CardPage,
		icon: <IconUser className='dui__icon' />,
		label: "Cards",
	},
	{
		path: "/collapse",
		component: CollapsePage,
		icon: <IconUser className='dui__icon' />,
		label: "Collapse",
	},
	{
		path: "/dragscroll",
		component: DragScrollPage,
		icon: <IconUser className='dui__icon' />,
		label: "DragScroll",
	},
	{
		path: "/dropdowns",
		component: DropdownsPage,
		icon: <IconUser className='dui__icon' />,
		label: "Dropdowns",
	},
	{
		path: "/flex",
		component: FlexPage,
		icon: <IconUser className='dui__icon' />,
		label: "Flex",
	},
	{
		path: "/forms",
		component: FormsPage,
		icon: <IconUser className='dui__icon' />,
		label: "Forms",
	},
	{
		path: "/icons",
		component: IconsPage,
		icon: <IconUser className='dui__icon' />,
		label: "Icons",
	},
	{
		path: "/inputs",
		component: InputsPage,
		icon: <IconUser className='dui__icon' />,
		label: "Inputs",
	},
	{
		path: "/lists",
		component: ListGroupPage,
		icon: <IconUser className='dui__icon' />,
		label: "Lists",
	},
	{
		path: "/portals",
		component: PortalDrawerPage,
		icon: <IconUser className='dui__icon' />,
		label: "Portals / Drawers",
	},
	{
		path: "/progress",
		component: ProgressPage,
		icon: <IconUser className='dui__icon' />,
		label: "Progress",
	},
	{
		path: "/skeleton",
		component: SkeletonPage,
		icon: <IconUser className='dui__icon' />,
		label: "Skeleton",
	},
	{
		path: "/spinners",
		component: SpinnersPage,
		icon: <IconUser className='dui__icon' />,
		label: "Spinners",
	},
	{
		path: "/tables",
		component: TablesPage,
		icon: <IconUser className='dui__icon' />,
		label: "Tables",
	},
	{
		path: "/tabs",
		component: TabsPage,
		icon: <IconUser className='dui__icon' />,
		label: "Tabs",
	},
	{
		path: "/tooltips",
		component: TooltipPage,
		icon: <IconUser className='dui__icon' />,
		label: "Tooltips",
	},
	{
		path: "/typography",
		component: TypographyPage,
		icon: <IconUser className='dui__icon' />,
		label: "Typography",
	},
];

const App = () => {
	const {
		themeConfig: { dark },
		toggleDarkTheme,
	} = useConfig();

	const { toggleSidebar } = useAdminLayout();

	useEffect(() => {
		console.log("render");
	});

	return (
		<Router>
			<AdminLayout>
				<AdminLayout.Sidebar>
					<AdminLayout.Sidebar.Item
						className='py--2'
						main={
							<Button onClick={toggleSidebar} flavor='round' pigment='default'>
								<IconHamburger className='dui__icon' />
							</Button>
						}
						extended={<Text className='mb--0'>@dodobrat/react-ui-kit</Text>}
					/>
					<AdminLayout.Sidebar.Item
						main={
							<Button onClick={toggleDarkTheme} flavor='round' pigment='secondary'>
								{dark ? <IconMoon className='dui__icon' /> : <IconSun className='dui__icon' />}
							</Button>
						}
						extended={<Text className='mb--0'>{dark ? "Dark Theme" : "Light Theme"}</Text>}
						className='py--2'
					/>
					{pages.map((page) => (
						<AdminLayout.Sidebar.Item
							as={NavLink}
							key={Math.random() + page.path}
							to={page.path}
							main={<Text className='mb--0'>{page.icon}</Text>}
							extended={<Text className='mb--0'>{page.label}</Text>}
							className='py--2'
						/>
					))}
				</AdminLayout.Sidebar>
				<AdminLayout.Topbar>
					<Container className='px--3 h--100 d--grid' style={{ alignItems: "center" }} sizing='xl'>
						<Button flavor='round' pigment='default' onClick={toggleSidebar} className='d--sm--none'>
							<IconHamburger className='dui__icon' />
						</Button>
					</Container>
				</AdminLayout.Topbar>
				<AdminLayout.Content>
					<Container className='px--2 py--4' sizing='xl'>
						<Suspense fallback={<div />}>
							<Switch>
								{pages.map((page) => (
									<Route key={Math.random() + page.path} path={page.path} exact component={page.component} />
								))}
								<Redirect to='/alerts' />
							</Switch>
						</Suspense>
					</Container>
				</AdminLayout.Content>
				<AdminLayout.Footer>
					<BackTop position='bottom' />
					<BackTop scrollDistanceTrigger={100} />
				</AdminLayout.Footer>
			</AdminLayout>
		</Router>
	);
};

export default App;
