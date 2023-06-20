import Image from "next/image";
import { UnitOfWork } from "@/dal/UnitOfWork";

export default function Home() {
	return (
		<section className="flex flex-col justify-center items-center">
			<h1 className="text-4xl">Todos!</h1>
			<h2 className="text-3xl">Manage your time instantly!</h2>
		</section>
	);
}
