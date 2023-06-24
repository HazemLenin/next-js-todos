"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Todo } from "@/dal/models";

function TodoDetails() {
	const [todo, setTodo] = useState<Todo>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const params = useParams();

	useEffect(() => {
		axios
			.get(`/api/todos/${params.id}`)
			.then((res) => {
				setTodo(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				if (err.response.status == 404) setError("Todo not found!");
			});
	}, []);
	return (
		<div className="p-10">
			{loading ? (
				<div>
					<div className="skeleton h-10 w-40 mb-5"></div>
					<div className="grid grid-cols-2 grid-row-3 gap-3 w-1/2">
						<div className="skeleton h-10 w-auto"></div>
						<div className="skeleton h-10 w-auto"></div>
						<div className="skeleton h-10 w-auto"></div>
						<div className="skeleton h-10 w-auto"></div>
						<div className="skeleton h-10 w-auto"></div>
						<div className="skeleton h-10 w-auto"></div>
					</div>
				</div>
			) : todo ? (
				<div>
					<h1 className="text-4xl">{todo.title}</h1>
					<table>
						<tr>
							<td>Date</td>
							<td>{todo.date.toLocaleString()}</td>
						</tr>
						<tr>
							<td>Description</td>
							<td>{todo.description}</td>
						</tr>
						<tr>
							<td>Completed</td>
							<td>{todo.completed ? "Yes" : "No"}</td>
						</tr>
					</table>
				</div>
			) : (
				<div>{error}</div>
			)}
		</div>
	);
}

export default TodoDetails;
