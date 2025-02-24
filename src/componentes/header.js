 "use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import React, { useState } from "react";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(null);
  const Nav = (menuName) => {
		setIsNavVisible(isNavVisible === menuName ? null:menuName);
	};
	return (
		<div>
			<header className="header">
				<nav className={styles.navbar}>
					<div className={styles.logo}>
						<Image
							src="/image/cuidados-de-saude.png"
							width="60"
							height="60"
							alt="Logo"
						></Image>
						<h1 className={styles.titulo}>Clínica Bem Estar</h1>
					</div>

					<ul className={styles.link_items}>
						<li>
							<Link href="/">HOME</Link>
						</li>
						<li>
							<button onClick={() => Nav("medico")} className={styles.list2}>
								<Link href="#">MÉDICO</Link>
							</button>
							<ul
								className={`${styles.list} ${
									isNavVisible === "medico" ? styles.show : ""
								}`}
							>
								<li>
									<a href="/medicos" className={styles.link}>
										Listar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Editar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Adicionar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Excluir
									</a>
								</li>
							</ul>
						</li>
						<li>
							<button onClick={() => Nav("paciente")} className={styles.list2}>
								<Link href="#">PACIENTE</Link>
							</button>
							<ul
								className={`${styles.list} ${
									isNavVisible === "paciente" ? styles.show : ""
								}`}
							>
								<li>
									<a href="/pacientes" className={styles.link}>
										Listar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Editar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Adicionar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Excluir
									</a>
								</li>
							</ul>
						</li>
						<li>
							<button onClick={() => Nav("consulta")} className={styles.list2}>
								<Link href="#">CONSULTA</Link>
							</button>
							<ul
								className={`${styles.list} ${
									isNavVisible === "consulta" ? styles.show : ""
								}`}
							>
								<li>
									<a href="/consulta" className={styles.link}>
										Listar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Editar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Agendar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Cancelar
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}