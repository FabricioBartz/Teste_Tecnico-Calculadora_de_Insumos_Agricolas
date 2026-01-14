import styles from './Dashboard.module.css';

export default function Dashboard() {
  // Dados genéricos de exemplo (como se viessem de um banco de dados)
  const stats = [
    { id: 1, label: "Área Total", value: "150 ha", color: "#4caf50" },
    { id: 2, label: "Sementes Usadas", value: "1.200 kg", color: "#2196f3" },
    { id: 3, label: "Sacos Totais", value: "300", color: "#ff9800" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Painel de Controle Agrícola</h1>
      
      <div className={styles.grid}>
        {stats.map(item => (
          <div key={item.id} className={styles.card} style={{ borderTop: `5px solid ${item.color}` }}>
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      <div className={styles.chartPlaceholder}>
        <p>Espaço para Gráfico de Produtividade</p>
      </div>
    </div>
  );
}