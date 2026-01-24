import styles from "./BotaoMonitoramento.module.css";
import monitoramento from "../../../assets/monitoramento.svg";
import monitoramento_active from "../../../assets/monitoramento_active.svg";

export default function Monitoramento({ isActive, isCollapsed }) {
  return (
    <div
      className={`
      ${styles.item} 
      ${isActive ? styles.active : ""} 
      ${isCollapsed ? styles.collapsed : ""}
    `}
    >
      <img
        src={isActive ? monitoramento_active : monitoramento}
        alt="Monitoramento"
        className={styles.icon}
      />

      {!isCollapsed && (
        <span className={styles.label}>Monitoramento</span>
      )}
    </div>
  );
}
