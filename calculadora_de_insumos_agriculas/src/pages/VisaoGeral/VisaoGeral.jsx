import styles from './VisaoGeral.module.css';

export default function PaginaVisaoGeral() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Visão Geral</h1>
        <div className={styles.warningCard}>
          <span className={styles.icon}>⚠️</span>
          <h2>Página em Desenvolvimento</h2>
          <p>Esta funcionalidade ainda não foi implementada. Estamos trabalhando nisso para o AgroHub!</p>
        </div>
      </div>
    </main>
  );
}