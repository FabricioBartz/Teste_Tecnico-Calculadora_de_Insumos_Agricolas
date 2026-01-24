import styles from "./BotaoSair.module.css";
import sair from "../../../assets/sair.svg";
import sair_active from "../../../assets/sair_active.svg";

export default function Sair({ isActive, isCollapsed }) {
  return (
    <div
      className={`
      ${styles.item} 
      ${isActive ? styles.active : ""} 
      ${isCollapsed ? styles.collapsed : ""}
    `}
    >
      <img
        src={isActive ? sair_active : sair}
        alt="Sair"
        className={styles.icon}
      />

      {!isCollapsed && (
        <span className={styles.label}>Sair</span>
      )}
    </div>
  );
}
