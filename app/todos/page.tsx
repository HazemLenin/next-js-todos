"use client";

import React, { useEffect, useRef, useState } from "react";
import { Todo } from "@/dal/models";
import axios from "axios";
import moment from "momnet";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";

import { Modal, TodoDetails } from "../components";

function Todos() {
	const titleRef = useRef<HTMLInputElement>(null);
	const completedRef = useRef<HTMLSelectElement>(null);
	const completedTypes = ["All", "Completed", "Incompleted"];
	const [todos, setTodos] = useState<Todo[]>([]);
	const [loading, setLoading] = useState(true);
	const params = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (titleRef.current != null)
			titleRef.current.value = params?.get("title") ?? "";
		if (completedRef.current != null)
			completedRef.current.value =
				params?.get("completed") ?? completedTypes[0];
		updateTodos();
	}, []);

	function updateTodos() {
		router.push(
			`${pathname}?title=${titleRef.current?.value}&completed=${completedRef.current?.value}`
		);
		setLoading(true);
		let completed = "";

		switch (completedRef.current?.value) {
			case completedTypes[1]:
				completed = "true";
				break;

			case completedTypes[2]:
				completed = "false";
				break;

			default:
				break;
		}

		axios(`/api/todos?title=${titleRef.current?.value}&completed=${completed}`)
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
				<div className="flex flex-col gap-3 w-2/3">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<div key={i} className="skeleton h-10"></div>
					))}
				</div>
			) : todos.length > 0 ? (
				<table className="table w-2/3">
					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Description</th>
							<th>Date</th>
							<th>Completed</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo, i) => (
							<tr key={todo.id}>
								<td>{i + 1}</td>
								<td>{todo.title}</td>
								<td className="text-muted">{todo.description}</td>
								<td>{moment(todo.date).format("yyyy/MM/DD hh:mm A")}</td>
								<td>{todo.completed ? "Yes" : "No"}</td>
								<td>
									<Link className="btn btn-primary" href={`/todos/${todo.id}`}>
										Details
									</Link>
								</td>
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
