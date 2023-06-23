import { UnitOfWork } from "@/dal/UnitOfWork";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const unitOfWork = new UnitOfWork();
	let id = parseInt(params.id);

	if (Number.isNaN(id)) {
		return new NextResponse(null, { status: 404 });
	} else {
		let todo = await unitOfWork.todos.getTodoById(id);
		unitOfWork.complete();

		if (todo == null) {
			return new NextResponse(null, { status: 404 });
		} else {
			return NextResponse.json(todo);
		}
	}
}
