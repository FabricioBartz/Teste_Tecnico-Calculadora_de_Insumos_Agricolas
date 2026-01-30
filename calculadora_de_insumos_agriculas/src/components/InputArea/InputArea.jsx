//função para inserir a área em hectares
import styles from "./InputArea.module.css";

export default function InputArea({ label, value, onChange, erro }) {
  return (
    <div className={styles.container}>
      <label className={`${styles.label} body-medium semibold`}>{label}</label>
      {/* Wrapper necessário para posicionar o ícone de aviso sobre o input */}
      <div
        className={`${styles.inputWrapper} ${erro ? styles.wrapperErro : ""}`}
      >
        <input
          // Se houver erro, uma classe extra para a borda ficar vermelha
          className={`${styles.input} ${erro ? styles.inputErro : ""} body-medium`}
          placeholder={erro ? erro : "Hectares (ha)"}
          type="text"
          value={value}
          onChange={(e) => {
            let val = e.target.value;

            // 1. Troca vírgula por ponto
            val = val.replace(",", ".");

            /* 2. A TRAVA DE MÍNIMO 0:
               A Regex abaixo permite:
               ^     : Início da linha
               \d* : Qualquer quantidade de números (0, 1, 2...)
               \.?   : No máximo um ponto decimal opcional
               \d* : Qualquer quantidade de números após o ponto
               $     : Fim da linha
               
               Como o caractere "-" não está na lista permitida, 
               o valor negativo é bloqueado antes mesmo de entrar no estado.
            */
            if (!/^\d*\.?\d*$/.test(val)) return;

            // 3. TRAVA DE MÁXIMO 7 CARACTERES
            if (val.length <= 7) {
              onChange(val);
            }
          }}
        />
      </div>
    </div>
  );
}
