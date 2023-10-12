import { useEffect, useState } from "react";
import NavMenu from "./Components/NavMenu";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import Projects from "./Views/Projects";
import Pricing from "./Views/Pricing";

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		document.getElementById("htmlTheme").setAttribute("data-theme", JSON.parse(localStorage.getItem("theme")));
		navigate("/dashboard");
	}, []);

	return (
		<div className="ml-48 p-3">
			<NavMenu />
			<Routes>
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="projects" element={<Projects />} />
				<Route path="pricing" element={<Pricing />} />
			</Routes>
		</div>
	);
}

export default App;
