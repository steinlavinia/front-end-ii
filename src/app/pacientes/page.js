"use client";
import { useEffect, useState } from "react";
import styles from "./paciente.module.css";

export default function ListaPacientes() {
	const [buscaPaciente, setBuscaPaciente] = useState("");
	const [listaPacientes, setListaPacientes] = useState([]);

	useEffect(() => {
		async function fetchListaPacientes() {
			try {
				const response = await fetch(
					"https://api-clinica-2a.onrender.com/pacientes"
				);
				const data = await response.json();

				if (Array.isArray(data)) {
					setListaPacientes(data);
				} else {
					console.error("Erro: a API não retornou um array", data);
				}
			} catch (error) {
				console.error("Erro ao buscar pacientes:", error);
			}
		}
		fetchListaPacientes();
	}, []);

	const pacientesFiltrados = listaPacientes.filter((paciente) =>
		paciente.nome.toLowerCase().includes(buscaPaciente.toLowerCase())
	);

	return (
		<div className={styles.containerPrincipal}>
			<h1 className={styles.titulo}>Lista de Pacientes</h1>
			<div className={styles.filtros}>
				<button className={styles.botao} onClick={() => setBuscaPaciente("")}>
					Paciente
				</button>
			</div>

			<input
				type="text"
				placeholder="Digite o nome do paciente"
				value={buscaPaciente}
				onChange={(e) => setBuscaPaciente(e.target.value)}
				className={styles.input}
			/>

			<div className={styles.tabela}>
				<table>
					<thead>
						<tr>
							<th className={styles.th}>Id</th>
							<th className={styles.th}>Nome</th>
							<th className={styles.th}>Telefone</th>
							<th className={styles.th}>Email</th>
							<th className={styles.th}>CPF</th>
						</tr>
					</thead>
					<tbody>
						{pacientesFiltrados.length > 0 ? (
							pacientesFiltrados.map((paciente) => (
								<tr key={paciente.id} className={styles.linhaPaciente}>
									<td className={styles.td}>{paciente.id}</td>
									<td className={styles.td}>{paciente.nome}</td>
									<td className={styles.td}>{paciente.telefone}</td>
									<td className={styles.td}>{paciente.email}</td>
									<td className={styles.td}>{paciente.cpf}</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan="5" className={styles.td}>
									Nenhum paciente encontrado
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
