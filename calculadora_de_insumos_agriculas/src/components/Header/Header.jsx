import styles from "./Header.module.css";
import BotaoLogin from "../buttons/BotaoLogin/BotaoLogin";
import BotaoNotificacao from "../buttons/BotaoNotificacao/BotaoNotificacao";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.pageTitle}>Planejamento de Safra</h1>
      <div className={styles.userActions}>
        <BotaoNotificacao />
        <BotaoLogin />
      </div>
    </header>
  );
}
