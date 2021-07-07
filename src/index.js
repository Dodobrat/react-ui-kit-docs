import React from "react";
import ReactDOM from "react-dom";
import "./css/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AdminLayoutProvider, ConfigProvider } from "@dodobrat/react-ui-kit";

const presets = {
	flavor: "default",
};

ReactDOM.render(
	<ConfigProvider config={presets} darkModeConfig={{ localStorageKey: "demo-dark-theme" }}>
		<Router>
			<AdminLayoutProvider>
				<App />
			</AdminLayoutProvider>
		</Router>
	</ConfigProvider>,
	document.getElementById("root")
);
