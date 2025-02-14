import Header from "../../componentes/header/Header";
import "../style/globals.css";

export const metadata = {
	title: "Policlínica TechCare",
	description: "",
	charset: "UTF-8",
	author: "Lavínia Stein",
	keywords: "Médicos, Pacientes, Consultas",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<head />
			<body>
				<Header/>
				<main>{children}</main>
			</body>
		</html>
	);
}
