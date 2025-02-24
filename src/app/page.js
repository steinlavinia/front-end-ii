import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>Clínica Bem Estar!</h1>
			<p className={styles.p}>
				Na Clínica Bem Estar, sua saúde é a nossa prioridade. 
				
				<br/>
				<br/>Com uma equipe médica especializada e um ambiente acolhedor, oferecemos atendimento humanizado e soluções personalizadas para o seu bem-estar.

				<br/>Seja para consultas ou acompanhamento médico, estamos aqui para garantir que você receba o melhor cuidado, com tecnologia e profissionalismo.
				<br/>

				<br/>Agende sua consulta e dê o primeiro passo para uma vida mais saudável!
			</p>
			<button className={styles.botaoAgendar}>Agendar consulta</button>
		</div>
	);
}
