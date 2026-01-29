//função para inserir a área em hectares
import styles from "./InputArea.module.css";

export default function InputArea({ label, value, onChange, erro }) { 
  return (
    <div className={styles.container}>
      <label className={`${styles.label} body-medium semibold`}>{label}</label>
      {/* Wrapper necessário para posicionar o ícone de aviso sobre o input */}
      <div className={`${styles.inputWrapper} ${erro ? styles.wrapperErro : ""}`}>
        <input
          // Se houver erro, uma classe extra para a borda ficar vermelha
          className={`${styles.input} ${erro ? styles.inputErro : ""} body-medium`}
          placeholder={erro ? erro : "Hectares (ha)"}
          type="number"
          min="0"
          value={value}
          onChange={(e) => {
              const val = e.target.value;
              // trava de não negativos
              if (val >= 0 || val === "") onChange(val);
            }}
          />
        </div>
    </div>
  );
}