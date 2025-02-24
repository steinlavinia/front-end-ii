"use client";
import { useEffect, useState } from "react";
import styles from "./medico.module.css";

export default function ListaMedicos() {
	const [termoBusca, setTermoBusca] = useState("");
	const [listaMedicos, setListaMedicos] = useState([]);
	const [filtroAtivo, setFiltroAtivo] = useState("todos");

	useEffect(() => {
		async function buscarMedicos() {
			try {
				const response = await fetch(
					"https://api-clinica-2a.onrender.com/medicos"
				);
				const data = await response.json();

				if (Array.isArray(data)) {
					setListaMedicos(data);
				} else {
					console.error("Erro: a API não retornou um array", data);
				}
			} catch (error) {
				console.error("Erro ao buscar médicos:", error);
			}
		}
		buscarMedicos();
	}, []);

	const medicosFiltrados = listaMedicos.filter((medico) => {
		if (filtroAtivo === "medico") {
			return medico.nome.toLowerCase().includes(termoBusca.toLowerCase());
		}
		return true;
	});

	return (
		<div className={styles.containerPrincipal}>
			<h1 className={styles.titulo}>Lista de Médicos</h1>

			<div className={styles.filtros}>
				<button
					className={styles.botao}
					onClick={() => setFiltroAtivo("medico")}
				>
					Médico
				</button>
			</div>

			{filtroAtivo === "medico" && (
				<input
					type="text"
					placeholder="Digite o nome do médico"
					value={termoBusca}
					onChange={(e) => setTermoBusca(e.target.value)}
					className={styles.input}
				/>
			)}

			<div className={styles.tabela}>
				<table>
					<thead>
						<tr>
							<th className={styles.th}>ID</th>
							<th className={styles.th}>Nome</th>
							<th className={styles.th}>Telefone</th>
							<th className={styles.th}>Email</th>
							<th className={styles.th}>Especialidade</th>
						</tr>
					</thead>
					<tbody>
						{medicosFiltrados.length > 0 ? (
							medicosFiltrados.map((medico) => (
								<tr key={medico.id} className={styles.medico}>
									<td className={styles.td}>{medico.id}</td>
									<td className={styles.td}>{medico.nome}</td>
									<td className={styles.td}>{medico.telefone}</td>
									<td className={styles.td}>{medico.email}</td>
									<td className={styles.td}>{medico.especialidade}</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan="5" className={styles.td}>
									Nenhum médico encontrado
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
