import Header from "../componentes/header";
import { Poppins } from "next/font/google";

import "./globals.css"
const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

export const metadata = {
	title: "Clínica Bem Estar",
	description: "Front End II",
	charset: "UTF-8",
	author: "Lavínia Stein",
	keywords: "React, CSS, JavaScript, Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<body className={poppins.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
