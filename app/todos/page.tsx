"use client";

import React, { useEffect, useRef, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { Todo } from "@/dal/models";
import axios from "axios";

function Todos() {
	const titleRef = useRef(null);
	const completedRef = useRef(null);
	const completedTypes = ["All", "Completed", "Incompleted"];
	const [todos, setTodos] = useState<Todo[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios("/api/todos")
			.then((res) => {
				setTodos(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	function updateTodos(e) {
		setLoading(true);
		let completed = "";

		switch (completedRef.current.value) {
			case completedTypes[1]:
				completed = "true";
				break;

			case completedTypes[2]:
				completed = "false";
				break;

			default:
				break;
		}

		axios(`/api/todos?title=${titleRef.current.value}&completed=${completed}`)
			.then((res) => {
				setTodos(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}

	return (
		<section className="flex flex-col items-center gap-5">
			<h1 className="text-4xl">Your Todos</h1>
			{/* Searching form */}
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex justify-between"
			>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						placeholder="Title"
						ref={titleRef}
						className="form-control"
						onChange={updateTodos}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="completed">Completed</label>
					<select
						name="completed"
						className="form-control"
						ref={completedRef}
						onChange={updateTodos}
					>
						{completedTypes.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>
			</form>
			{/* Table of todos */}
			{loading ? (
				<Skeleton count={8} width={500} height={40} />
			) : todos.length > 0 ? (
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Description</th>
							<th>Date</th>
							<th>Completed</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo, i) => (
							<tr key={todo.id}>
								<td>{i}</td>
								<td>{todo.title}</td>
								<td className="text-muted">{todo.description}</td>
								<td>{todo.date}</td>
								<td>{todo.completed ? "yes" : "no"}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<h2 className="text-3xl">No todos found!</h2>
			)}
		</section>
	);
}

export default Todos;
