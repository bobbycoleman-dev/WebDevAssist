import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoForm from "./Components/TodoForm";
import GetTodos from "./Components/GetTodos";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="container">
			<GetTodos />
		</div>
	);
}

export default App;
