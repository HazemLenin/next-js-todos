import { UnitOfWork } from "@/dal/UnitOfWork";

function handler(req, res) {
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

	unitOfWork.todos
		.getAllTodos(where)
		.then((todos) => res.status(200).json(todos))
		.catch((err) => console.log(err));
}

export default handler;
