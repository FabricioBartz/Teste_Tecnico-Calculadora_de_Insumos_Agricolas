import styles from "./BotaoLogin.module.css";
import botaologin from "../../../assets/botaologin.svg";

export default function BotaoLogin() {
  return (
    <button className={styles.loginBtn}>
      <img src={botaologin} alt="Usuário" />
      Fazer login
    </button>
  );
}
