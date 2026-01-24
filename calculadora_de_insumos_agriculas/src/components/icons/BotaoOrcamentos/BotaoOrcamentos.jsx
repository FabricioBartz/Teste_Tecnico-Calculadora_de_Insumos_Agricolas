import styles from "./BotaoOrcamentos.module.css";
import orcamentos from "../../../assets/orcamentos.svg";
import orcamentos_active from "../../../assets/orcamentos_active.svg";

export default function Orcamentos({ isActive, isCollapsed }) {
  return (
    <div
      className={`
      ${styles.item} 
      ${isActive ? styles.active : ""} 
      ${isCollapsed ? styles.collapsed : ""}
    `}
    >
      <img
        src={isActive ? orcamentos_active : orcamentos}
        alt="Área de Plantio"
        className={styles.icon}
      />

      {!isCollapsed && (
        <span className={styles.label}>Orçamentos</span>
      )}
    </div>
  );
}
