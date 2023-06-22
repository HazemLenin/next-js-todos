import Link from "next/link";
import React from "react";

function Header() {
	return (
		<header className="bg-primary px-5 w-full h-20 shadow-md">
			<nav className="flex justify-between h-full w-full">
				<ul className="flex justify-between items-center gap-5">
					<li className="nav-item text-2xl font-bold">
						<Link href="/">Todos</Link>
					</li>
					<li className="nav-item">
						<Link href="/todos">todos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
