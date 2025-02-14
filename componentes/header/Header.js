"use client";
import Link from "next/link";
import styles from "./header.module.css";
import React, { useState } from "react";

export default function Header() {
	const [isNavVisible, setIsNavVisible] = useState(true);

	const Nav = () => {
		setIsNavVisible(!isNavVisible);
	};
	return (
		<header className="header">
			<nav className={styles.navbar}>
				{isNavVisible && (
					<ul className={styles.link_items}>
						<li className= {styles.medico}>
							<a href="/">Home</a>
						</li>

						<li className= {styles.medicos}>
							<a href="#">Médicos</a>

							<ul className= {styles.submenu}>
								<li className={styles.subMed}>
									<a href="/listarMed">Listar</a>
								</li>
								<li>
									<a href="#">Adicionar</a>
								</li>
								<li>
									<a href="#">Editar</a>
								</li>
								<li>
									<a href="#">Excluir</a>
								</li>
							</ul>
						</li>

						<li className= {styles.pacientes}>
							<a href="#">Pacientes</a>

							<ul className= {styles.submenu}>
								<li>
									<a href="/listarPac">Listar</a>
								</li>
								<li>
									<a href="#">Adicionar</a>
								</li>
								<li>
									<a href="#">Editar</a>
								</li>
								<li>
									<a href="#">Excluir</a>
								</li>
							</ul>
						</li>

						<li className= {styles.agenda}>
							<a href="#">Agendamento</a>

							<ul className= {styles.submenu}>
								<li>
									<a href="/listarMed">Listar</a>
								</li>
								<li>
									<a href="#">Adicionar</a>
								</li>
								<li>
									<a href="#">Editar</a>
								</li>
								<li>
									<a href="#">Excluir</a>
								</li>
							</ul>
						</li>
					</ul>
				)}
			</nav>
		</header>
	);
}
