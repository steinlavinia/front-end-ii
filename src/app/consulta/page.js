"use client";
import { useEffect, useState } from "react";
import styles from "./consulta.module.css";

export default function TabelaConsultas() {
	const [filtroMedico, setFiltroMedico] = useState("");
	const [filtroPaciente, setFiltroPaciente] = useState("");
	const [dadosConsultas, setDadosConsultas] = useState([]);
	const [categoriaFiltro, setCategoriaFiltro] = useState("todos");

	useEffect(() => {
		async function carregarConsultas() {
			try {
				const resposta = await fetch(
					"https://api-clinica-2a.onrender.com/consultas"
				);
				const dados = await resposta.json();

				if (Array.isArray(dados)) {
					setDadosConsultas(dados);
				} else {
					console.error("Erro: a API não retornou um array", dados);
				}
			} catch (erro) {
				console.error("Erro ao buscar consultas:", erro);
			}
		}
		carregarConsultas();
	}, []);

	const consultasFiltradas = dadosConsultas.filter((consulta) => {
		if (categoriaFiltro === "medico") {
			return consulta.medico.toLowerCase().includes(filtroMedico.toLowerCase());
		} else if (categoriaFiltro === "paciente") {
			return consulta.paciente
				.toLowerCase()
				.includes(filtroPaciente.toLowerCase());
		}
		return true;
	});

	return (
		<div className={styles.containerPrincipal}>
			<h1 className={styles.titulo}>Lista de Consultas</h1>

			<div className={styles.filtros}>
				<button
					className={styles.botao}
					onClick={() => setCategoriaFiltro("medico")}
				>
					Médico
				</button>
				<button
					className={styles.botao}
					onClick={() => setCategoriaFiltro("paciente")}
				>
					Paciente
				</button>
			</div>

			{categoriaFiltro === "medico" && (
				<input
					type="text"
					placeholder="Digite o nome do médico"
					value={filtroMedico}
					onChange={(e) => setFiltroMedico(e.target.value)}
					className={styles.input}
				/>
			)}

			{categoriaFiltro === "paciente" && (
				<input
					type="text"
					placeholder="Digite o nome do paciente"
					value={filtroPaciente}
					onChange={(e) => setFiltroPaciente(e.target.value)}
					className={styles.input}
				/>
			)}

			<div className={styles.tabela}>
				<table>
					<thead>
						<tr>
							<th className={styles.th}>ID</th>
							<th className={styles.th}>Médico</th>
							<th className={styles.th}>Especialidade</th>
							<th className={styles.th}>Paciente</th>
							<th className={styles.th}>Tipo</th>
						</tr>
					</thead>
					<tbody>
						{consultasFiltradas.length > 0 ? (
							consultasFiltradas.map((consulta) => (
								<tr key={consulta.id} className={styles.pesquisar}>
									<td className={styles.th}>{consulta.id}</td>
									<td className={styles.th}>{consulta.medico}</td>
									<td className={styles.th}>{consulta.especialidade}</td>
									<td className={styles.th}>{consulta.paciente}</td>
									<td className={styles.th}>{consulta.tipo}</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan="5">Nenhuma consulta encontrada</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
