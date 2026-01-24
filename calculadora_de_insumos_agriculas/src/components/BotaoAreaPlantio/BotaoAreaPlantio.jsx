import styles from "./BotaoAreaPlantio.module.css";
import areaplantio from "../../assets/areaplantio.svg";
import areaplantio_active from "../../assets/areaplantio_active.svg";

export default function AreaPlantio({ isActive, isCollapsed }) {
  return (
    <div
      className={`
      ${styles.item} 
      ${isActive ? styles.active : ""} 
      ${isCollapsed ? styles.collapsed : ""}
    `}
    >
      <img
        src={isActive ? areaplantio_active : areaplantio}
        alt="Área de Plantio"
        className={styles.icon}
      />

      {!isCollapsed && (
        <span className={styles.label}>Área de Plantio</span>
      )}
    </div>
  );
}
