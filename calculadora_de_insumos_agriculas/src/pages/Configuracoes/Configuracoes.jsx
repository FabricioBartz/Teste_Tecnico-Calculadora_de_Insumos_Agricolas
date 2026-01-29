import styles from './Configuracoes.module.css';

export default function Configuracoes() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.warningCard}>
          <span className={styles.icon}>⚠️</span>
          <h5>Página em Desenvolvimento</h5>
          <p className="body-medium">Esta funcionalidade ainda não foi implementada.</p>
        </div>
      </div>
    </main>
  );
}