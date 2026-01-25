//função para inserir a área em hectares
import styles from "./InputArea.module.css";

export default function InputArea({ label, value, onChange }) { 
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label> 
      <input
        className={styles.input}              
        placeholder="Hectares (ha)"
        type="number"
        value={value}                          
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  );
}
