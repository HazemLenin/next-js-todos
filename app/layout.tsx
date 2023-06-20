import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Todos: Manage your time instantly!",
	description:
		"Todos is a web app to store your todos with their dates to manage your time efficiently.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
