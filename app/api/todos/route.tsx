import { UnitOfWork } from "@/dal/UnitOfWork";
import { NextRequest, NextResponse } from "next/server";

interface searchQuery {
	title?: object;
	completed?: boolean;
}

export async function GET(request: NextRequest) {
	const unitOfWork = new UnitOfWork();
	let where: searchQuery = {};

	let title = request.nextUrl.searchParams.get("title");

	if (title) where.title = { contains: title };

	switch (request.nextUrl.searchParams.get("completed")) {
		case "true":
			where.completed = true;
			break;

		case "false":
			where.completed = false;
			break;

		default:
			break;
	}
	let todos = await unitOfWork.todos.getAllTodos(where);
	unitOfWork.complete();
	return NextResponse.json(todos);
}
