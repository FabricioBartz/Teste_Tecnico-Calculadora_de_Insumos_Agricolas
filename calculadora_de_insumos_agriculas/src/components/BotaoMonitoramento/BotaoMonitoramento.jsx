import styles from "./BotaoMonitoramento.module.css";
import orcamentos from "../../assets/monitoramento.svg";
import orcamentos_active from "../../assets/monitoramento_active.svg";

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
        src={isActive ? monitoramento_active : orcamentos}
        alt="Área de Plantio"
        className={styles.icon}
      />

      {!isCollapsed && (
        <span className={styles.label}>Monitoramento</span>
      )}
    </div>
  );
}
