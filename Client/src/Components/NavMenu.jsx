import { House } from "react-bootstrap-icons";
const NavMenu = () => {
	return (
		<div className="w-40 bg-slate-600 h-full fixed top-0 left-0 p-2 space-y-3 shadow-xl shadow-black-400/50">
			<p className="dark:text-white text-lg">WebDev Assist</p>
			<ul>
				<li className="flex items-center gap-2 dark:text-white hover:dark:text-slate-400 cursor-pointer">
					<House /> Dashboard
				</li>
			</ul>
		</div>
	);
};

export default NavMenu;
