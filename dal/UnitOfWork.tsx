import { PrismaClient } from "@prisma/client";
import { TodosRepostiroy } from "./repositories";

export class UnitOfWork {
	private db: PrismaClient;
	todos: TodosRepostiroy;

	constructor() {
		this.db = new PrismaClient();
		this.todos = new TodosRepostiroy(this.db);
	}
}
