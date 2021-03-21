import React, { useEffect } from "react";
import { CaretUp, BackTop, Button, Container, useDarkMode, Sun, Moon, DragScroll } from "@dodobrat/react-ui-kit";
import { Switch, Route, NavLink } from "react-router-dom";
import AlertsPage from "./pages/AlertsPage";
import BadgePage from "./pages/BadgePage";
import BreadcrumbsPage from "./pages/BreadcrumbsPage";
import ButtonsPage from "./pages/ButtonsPage";
import CardPage from "./pages/CardPage";
import CollapsePage from "./pages/CollapsePage";
import DragScrollPage from "./pages/DragScrollPage";
import FlexPage from "./pages/FlexPage";
import IconsPage from "./pages/IconsPage";
import ListGroupPage from "./pages/ListGroupPage";
import PortalDrawerPage from "./pages/PortalDrawerPage";
import ProgressPage from "./pages/ProgressPage";
import SkeletonPage from "./pages/SkeletonPage";
import SpinnersPage from "./pages/SpinnersPage";
import TabsPage from "./pages/TabsPage";
import TypographyPage from "./pages/TypographyPage";
import FormsPage from "./pages/FormsPage";
import InputsPage from "./pages/InputsPage";

const App = () => {
	const [dark, setDark] = useDarkMode();

	useEffect(() => {
		console.log("render");
	});

	return (
		<Container>
			<div>
				<br />
				<h1>
					<Button onClick={() => setDark((prev) => !prev)} round pigment='secondary'>
						{dark ? <Moon className='dui__icon' /> : <Sun className='dui__icon' />}
					</Button>{" "}
					{dark ? "Dark Theme" : "Light Theme"}
				</h1>
			</div>

			<hr />

			<DragScroll className='nav'>
				<div className='drag-container'>
					<NavLink to='/alerts' activeStyle={{ fontWeight: 700 }}>
						Alerts
					</NavLink>
					<NavLink to='/badges' activeStyle={{ fontWeight: 700 }}>
						Badges
					</NavLink>
					<NavLink to='/breadcrumbs' activeStyle={{ fontWeight: 700 }}>
						Breadcrumbs
					</NavLink>
					<NavLink to='/buttons' activeStyle={{ fontWeight: 700 }}>
						Buttons
					</NavLink>
					<NavLink to='/cards' activeStyle={{ fontWeight: 700 }}>
						Cards
					</NavLink>
					<NavLink to='/collapse' activeStyle={{ fontWeight: 700 }}>
						Collapse
					</NavLink>
					<NavLink to='/dragscroll' activeStyle={{ fontWeight: 700 }}>
						Drag Scroll
					</NavLink>
					<NavLink to='/flex' activeStyle={{ fontWeight: 700 }}>
						Flex
					</NavLink>
					<NavLink to='/icons' activeStyle={{ fontWeight: 700 }}>
						Icons
					</NavLink>
					<NavLink to='/lists' activeStyle={{ fontWeight: 700 }}>
						List Groups
					</NavLink>
					<NavLink to='/portals' activeStyle={{ fontWeight: 700 }}>
						Portals / Drawers
					</NavLink>
					<NavLink to='/progress' activeStyle={{ fontWeight: 700 }}>
						Progress
					</NavLink>
					<NavLink to='/skeleton' activeStyle={{ fontWeight: 700 }}>
						Skeleton
					</NavLink>
					<NavLink to='/spinners' activeStyle={{ fontWeight: 700 }}>
						Spinners
					</NavLink>
					<NavLink to='/tabs' activeStyle={{ fontWeight: 700 }}>
						Tabs
					</NavLink>
					<NavLink to='/typography' activeStyle={{ fontWeight: 700 }}>
						Typography
					</NavLink>
					<NavLink to='/inputs' activeStyle={{ fontWeight: 700 }}>
						Inputs
					</NavLink>
					<NavLink to='/forms' activeStyle={{ fontWeight: 700 }}>
						Forms
					</NavLink>
				</div>
			</DragScroll>

			<hr />

			<Switch>
				<Route path='/alerts' component={AlertsPage} />
				<Route path='/badges' component={BadgePage} />
				<Route path='/breadcrumbs' component={BreadcrumbsPage} />
				<Route path='/buttons' component={ButtonsPage} />
				<Route path='/cards' component={CardPage} />
				<Route path='/collapse' component={CollapsePage} />
				<Route path='/dragscroll' component={DragScrollPage} />
				<Route path='/flex' component={FlexPage} />
				<Route path='/icons' component={IconsPage} />
				<Route path='/lists' component={ListGroupPage} />
				<Route path='/portals' component={PortalDrawerPage} />
				<Route path='/progress' component={ProgressPage} />
				<Route path='/skeleton' component={SkeletonPage} />
				<Route path='/spinners' component={SpinnersPage} />
				<Route path='/tabs' component={TabsPage} />
				<Route path='/typography' component={TypographyPage} />
				<Route path='/inputs' component={InputsPage} />
				<Route path='/forms' component={FormsPage} />
			</Switch>

			<div>
				<br />
				<br />
				<h1>Back To Top</h1>
				<BackTop position='bottom' />
				<BackTop scrollDistanceTrigger={250} position='bottom-left'>
					<CaretUp className='dui__icon' />
				</BackTop>
				<BackTop scrollDistanceTrigger={100} />
				<br />
				<br />
				<br />
				<br />
			</div>
		</Container>
	);
};

export default App;
