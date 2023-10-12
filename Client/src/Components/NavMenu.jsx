import { House, Kanban, Gear, CurrencyDollar } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
const NavMenu = () => {
	return (
		<div className="w-48 h-full fixed top-0 left-0 p-2 shadow-xl shadow-slate-400/50 flex flex-col justify-between">
			<div className="space-y-5">
				<p className="text-xl">WebDev Assist</p>
				<ul className="space-y-5 text-2xl">
					<li>
						<Link to="/dashboard" className="flex items-center gap-2 cursor-pointer hover:text-info">
							<House /> Dashboard
						</Link>
					</li>
					<li>
						<Link to="/projects" className="flex items-center gap-2 cursor-pointer hover:text-info">
							<Kanban /> Projects
						</Link>
					</li>
					<li>
						<Link to="/pricing" className="flex items-center gap-2 cursor-pointer hover:text-info">
							<CurrencyDollar /> Pricing
						</Link>
					</li>
				</ul>
			</div>
			<ThemeSwitcher />
		</div>
	);
};

export default NavMenu;
