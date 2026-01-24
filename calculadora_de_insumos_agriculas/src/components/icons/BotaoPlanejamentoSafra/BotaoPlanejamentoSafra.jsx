import styles from "./BotaoPlanejamentoSafra.module.css";
import planejamentosafra from "../../../assets/planejamentosafra.svg";
import planejamentosafra_active from "../../../assets/planejamentosafra_active.svg";

export default function PlanejamentoSafra({ isActive, isCollapsed }) {
  return (
    <div
      className={`
      ${styles.item} 
      ${isActive ? styles.active : ""} 
      ${isCollapsed ? styles.collapsed : ""}
    `}
    >
      <img
        src={isActive ? planejamentosafra_active : planejamentosafra}
        alt="Planejamento da Safra"
        className={styles.icon}
      />

      {!isCollapsed && (
        <span className={styles.label}>Planejamento Safra</span>
      )}
    </div>
  );
}
