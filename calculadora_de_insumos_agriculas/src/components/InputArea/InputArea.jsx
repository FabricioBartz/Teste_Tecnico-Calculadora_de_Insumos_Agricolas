//função para inserir a área em hectares
import styles from "./InputArea.module.css";

export default function InputArea({ label, value, onChange }) { 
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label> {/* Texto Semibold */}
      <input
        className={styles.input}               /* Altura de 48px e estilo */
        placeholder="Hectares (ha)"
        type="number"
        value={value}                          /* O seu 'area' antigo */
        onChange={(e) => onChange(e.target.value)} /* O seu 'setArea' antigo */
      />
    </div>
  );
}
