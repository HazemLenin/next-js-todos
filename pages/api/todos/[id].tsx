import { UnitOfWork } from "@/dal/UnitOfWork";
import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
	const unitOfWork = new UnitOfWork();

	var id = parseInt(req.query.id);

	if (Number.isNaN(id)) {
		res.status(404).end();
	} else {
		unitOfWork.todos
			.getTodoById(id)
			.then((todo) => {
				if (todo == null) {
					res.status(404).end();
				} else {
					res.status(200).json(todo);
				}
			})
			.catch((err) => console.log(err));
	}
}

export default handler;
