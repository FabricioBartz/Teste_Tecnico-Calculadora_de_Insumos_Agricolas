import { useState } from 'react'; 
import styles from './SelectCultura.module.css';

export default function SelectCultura({ label, culturaSelecionada, setCulturaSelecionada }) { 
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar se a lista está aberta

  const selecionar = (valor) => {
    setCulturaSelecionada(valor);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {/* O Wrapper controla o clique */}
      <div className={styles.selectWrapper} onClick={() => setIsOpen(!isOpen)}>
        <div className={`
    ${styles.select} 
    ${isOpen ? styles.active : ""} 
    ${culturaSelecionada ? styles.preenchido : styles.vazio}
  `}>
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