import styles from './AreaPlantio.module.css';

export default function AreaPlantio() {
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