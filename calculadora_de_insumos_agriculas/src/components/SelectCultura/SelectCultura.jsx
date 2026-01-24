//função para selecionar a cultura
import styles from './SelectCultura.module.css';

export default function SelectCultura({ culturaSelecionada, setCulturaSelecionada }) { 
  return (
    <div className={styles.container}>
      <label className={styles.label}>Cultura</label>
      <div className={styles.selectWrapper}>
        <select
          className={styles.select}
          id="cultura"
          value={culturaSelecionada}
          onChange={(e) => setCulturaSelecionada(e.target.value)}
        >
          <option value="" disabled>Selecione uma cultura</option>
          <option value="soja">Soja</option>
          <option value="milho">Milho</option>
        </select>
      </div>
    </div>
  );
}