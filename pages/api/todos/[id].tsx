import { UnitOfWork } from "@/dal/UnitOfWork";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const unitOfWork = new UnitOfWork();
	let id = parseInt(req.query.id as string);

	if (Number.isNaN(id)) {
		res.status(404).end();
	} else {
		let todo = await unitOfWork.todos.getTodoById(id);
		if (todo == null) {
			res.status(404).end();
		} else {
			res.status(200).end(todo);
		}
		unitOfWork.complete();
	}
}

export default handler;
