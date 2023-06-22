import { UnitOfWork } from "@/dal/UnitOfWork";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const unitOfWork = new UnitOfWork();
	let where = {
		title: {
			contains: req.query.title,
		},
	};

	switch (req.query.completed) {
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
	res.status(200).json(todos);
}

export default handler;
