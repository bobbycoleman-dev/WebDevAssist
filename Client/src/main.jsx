import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Auth0Provider
		domain="dev-f1q4owggpf0zizqg.us.auth0.com"
		clientId="FtrFsV2AocDuU5zZvDCq4JS4uM1T2tEh"
		authorizationParams={{
			redirect_uri: window.location.origin
		}}>
		<App />
	</Auth0Provider>
);
