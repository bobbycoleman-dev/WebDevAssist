import { useState } from "react";
import { themes } from "../Constants/themes";

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));

	const selectTheme = (selectedTheme) => {
		setTheme(selectedTheme);
		localStorage.setItem("theme", JSON.stringify(selectedTheme));
		document.getElementById("htmlTheme").setAttribute("data-theme", JSON.parse(localStorage.getItem("theme")));
	};

	return (
		<div>
			<select
				className="select select-bordered p-0 pl-2 text-xs w-full"
				onChange={(e) => selectTheme(e.target.value)}>
				<option selected disabled>
					Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
				</option>
				{themes.map((theme, idx) => {
					return (
						<option key={idx} value={theme.theme}>
							{theme.title}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default ThemeSwitcher;
