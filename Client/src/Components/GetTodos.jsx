import { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";

const GetTodos = (props) => {
	const [allTasks, setAllTasks] = useState(null);
	const [update, setUpdate] = useState(false);

	useEffect(() => {
		axios.get("https://localhost:7261/api/webdev").then((res) => setAllTasks(res.data));
	}, [update]);

	// This will be what tells the list of all todos to update
	const triggerUpdate = () => {
		setUpdate(!update);
	};

	const onChangeHandler = async (item) => {
		item.isComplete = !item.isComplete;
		try {
			const updateItem = await axios({
				url: `https://localhost:7261/api/webdev/update/${item.id}`,
				method: "post",
				data: item,
				ContentType: "application/json"
			});
			// Need to update our list with the proper information
			setUpdate(!update);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteItem = async (id) => {
		try {
			const removeitem = await axios({
				url: `https://localhost:7261/api/webdev/delete/${id}`,
				method: "post",
				ContentType: "application/json"
			});
			setUpdate(!update);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="mx-auto mt-5">
			<h2>My Todo List</h2>
			{allTasks ? (
				allTasks.map((item, i) => (
					<div key={i}>
						<h4>
							{item.name}
							<input
								type="checkbox"
								name="isComplete"
								className="ms-3"
								checked={item.isComplete}
								onChange={() => onChangeHandler(item)}
							/>
							<button onClick={() => deleteItem(item.id)} className="btn btn-sm btn-danger ms-3">
								Delete
							</button>
						</h4>
					</div>
				))
			) : (
				<h3>Loading...</h3>
			)}
			<TodoForm triggerUpdate={triggerUpdate} />
		</div>
	);
};
export default GetTodos;
