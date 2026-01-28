import { useState } from "react";
import styles from "./SelectCultura.module.css";

export default function SelectCultura({label, culturaSelecionada, setCulturaSelecionada,erro,}) {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar se a lista está aberta

  const selecionar = (valor) => {
    setCulturaSelecionada(valor);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.container} ${erro ? styles.containerErro : ""}`}>
      <label className={styles.label}>{label}</label>
      {/* O Wrapper controla o clique */}
      <div className={`${styles.selectWrapper} ${erro ? styles.wrapperErro : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`
          ${styles.select} ${erro ? styles.selectErro : ""} ${culturaSelecionada ? styles.preenchido : styles.vazio}`}
        >
          {culturaSelecionada || "Selecione uma cultura"}
        </div>

        {/* Lista customizada que aparece quando isOpen é true */}
        {isOpen && (
          <div className={styles.optionsCustom}>
            <div className={styles.optionItem} onClick={() => selecionar("Soja")}>Soja</div>
            <div className={styles.optionItem} onClick={() => selecionar("Milho")}>Milho</div>
          </div>
        )}
      </div>
    </div>
  );
}
