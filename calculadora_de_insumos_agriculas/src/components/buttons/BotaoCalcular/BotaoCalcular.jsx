//função para o botão de calcular
import styles from "./BotaoCalcular.module.css";

export default function BotaoCalcular({ onClick, children = "Calcular" }) {
  return (
    <button className={styles.botao} onClick={onClick} type="button">
      {children}
    </button>
  );
}
