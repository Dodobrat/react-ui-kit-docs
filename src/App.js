import React, { lazy, Suspense, useEffect } from "react";
import { Button, Container, useConfig, AdminLayout, Text, useAdminLayout } from "@dodobrat/react-ui-kit";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

const AlertsPage = lazy(() => import("./pages/AlertsPage"));
const BadgePage = lazy(() => import("./pages/BadgePage"));
const BreadcrumbsPage = lazy(() => import("./pages/BreadcrumbsPage"));
const ButtonsPage = lazy(() => import("./pages/ButtonsPage"));
const CardPage = lazy(() => import("./pages/CardPage"));
const CollapsePage = lazy(() => import("./pages/CollapsePage"));
const DragScrollPage = lazy(() => import("./pages/DragScrollPage"));
const FlexPage = lazy(() => import("./pages/FlexPage"));
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
		label: "Alerts",
	},
	{
		path: "/badges",
		component: BadgePage,
		label: "Badges",
	},
	{
		path: "/breadcrumbs",
		component: BreadcrumbsPage,
		label: "Breadcrumbs",
	},
	{
		path: "/buttons",
		component: ButtonsPage,
		label: "Buttons",
	},
	{
		path: "/cards",
		component: CardPage,
		label: "Cards",
	},
	{
		path: "/collapse",
		component: CollapsePage,
		label: "Collapse",
	},
	{
		path: "/dragscroll",
		component: DragScrollPage,
		label: "DragScroll",
	},
	{
		path: "/dropdowns",
		component: DropdownsPage,
		label: "Dropdowns",
	},
	{
		path: "/flex",
		component: FlexPage,
		label: "Flex",
	},
	{
		path: "/forms",
		component: FormsPage,
		label: "Forms",
	},
	{
		path: "/inputs",
		component: InputsPage,
		label: "Inputs",
	},
	{
		path: "/lists",
		component: ListGroupPage,
		label: "Lists",
	},
	{
		path: "/portals",
		component: PortalDrawerPage,
		label: "Portals / Drawers",
	},
	{
		path: "/progress",
		component: ProgressPage,
		label: "Progress",
	},
	{
		path: "/skeleton",
		component: SkeletonPage,
		label: "Skeleton",
	},
	{
		path: "/spinners",
		component: SpinnersPage,
		label: "Spinners",
	},
	{
		path: "/tables",
		component: TablesPage,
		label: "Tables",
	},
	{
		path: "/tabs",
		component: TabsPage,
		label: "Tabs",
	},
	{
		path: "/tooltips",
		component: TooltipPage,
		label: "Tooltips",
	},
	{
		path: "/typography",
		component: TypographyPage,
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
							<Button onClick={toggleSidebar} flavor='rounded' equalDimensions pigment='default'>
								=
							</Button>
						}
						extended={<Text className='mb--0'>@dodobrat/react-ui-kit</Text>}
					/>
					<AdminLayout.Sidebar.Item
						main={
							<Button onClick={toggleDarkTheme} flavor='rounded' equalDimensions pigment='secondary'>
								{dark ? "Dark" : "Light"}
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
						<Button flavor='rounded' equalDimensions pigment='default' onClick={toggleSidebar} className='d--sm--none'>
							=
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
				<AdminLayout.Footer>Footer</AdminLayout.Footer>
			</AdminLayout>
		</Router>
	);
};

export default App;
