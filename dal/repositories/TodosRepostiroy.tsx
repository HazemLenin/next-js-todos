import { PrismaClient } from "@prisma/client";
import { Todo } from "../models";

export default class TodosRepostiroy {
	private db: PrismaClient;

	constructor(db: PrismaClient) {
		this.db = db;
	}

	async getAllTodos(
		where?: object,
		orderBy?: object,
		skip?: number,
		take?: number
	): Promise<Array<Todo>> {
		var entities = await this.db.todo.findMany({
			where,
			orderBy,
			skip,
			take,
		});

		return entities.map((entity) => this.mapToTodo(entity));
	}

	async getTodoById(id: number): Promise<Todo | null> {
		var entity = await this.db.todo.findFirst({
			where: { id: id },
		});
		if (entity == null) {
			return null;
		}

		return entity;
	}

	async createTodo(todo: Todo): Promise<Todo> {
		var entity = await this.db.todo.create({
			data: todo,
		});

		return entity;
	}

	async updateTodo(todo: Todo): Promise<Todo> {
		var entity = await this.db.todo.update({
			where: { id: todo.id },
			data: todo,
		});

		return entity;
	}

	async deleteTodo(id: number) {
		await this.db.todo.delete({
			where: { id },
		});
	}

	private mapToTodo(entity: any): Todo {
		return {
			id: entity.id,
			title: entity.title,
			date: entity.date,
			completed: entity.completed,
		};
	}
}
