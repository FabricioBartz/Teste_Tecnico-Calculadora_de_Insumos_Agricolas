import styles from "./BotaoNotificacao.module.css";
import notificacao from "../../assets/notificacao.svg";

export default function BotaoNotificacao() {
  return (
    <button className={styles.notificationBtn}>
      <img src={notificacao} alt="Sino de notificações" />
    </button>
  );
}
