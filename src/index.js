import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "@dodobrat/react-ui-kit";

ReactDOM.render(
	<ConfigProvider>
		<Router>
			<App />
		</Router>
	</ConfigProvider>,
	document.getElementById("root")
);
