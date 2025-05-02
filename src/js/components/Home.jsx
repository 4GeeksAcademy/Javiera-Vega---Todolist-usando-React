import React, { useState } from "react";

const Home = () => {

	const [task, setTask] = useState({
		task: "",
		isDone: false
	})

	const [listtask, setListTask] = useState([])


	const handleChange = (event) => {
		setTask({
			...task,
			task: event.target.value,
		})
	}

	const addTask = (event) => {

		if (event.key == "Enter") {
			if (task.task.trim() == "") return
			setListTask([
				...listtask,
				task
			])
			setError(false)

			setTask({
				task: "",
				isDone: false
			})
		}
	}

	const deleteTask = (taskDelete) => {
		const newListTask = listtask.filter((element, index) => index != taskDelete)
		setListTask(newListTask)
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<h1 className="title text-center">todos</h1>
				<div className="col-6 border border-seconday bg-white box">
					<form className="list-task"
						onSubmit={(event) => event.preventDefault()}>

						<input
							className="form-task col-12"
							type="text"
							placeholder="ingresa tu tarea aquí"
							name="taskname"
							onKeyDown={addTask}
							onChange={handleChange}
							value={task.taskname}
						/>
					</form>
					<ul>
						{
							listtask.map((element, index) => {
								return (
									<li
										className="added-tasks"
										key={index}>{element.task}
										<span>
											<i className="click fa-solid fa-xmark"
												onClick={() => deleteTask(index)}
											></i>
										</span>
									</li>
								)
							})
						}
					</ul>
					<p className="text-body text-muted">{`${listtask.length} item left`}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home;
