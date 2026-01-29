import { NavLink } from "react-router-dom";
import styles from "./BotaoOrcamentos.module.css";
import orcamentos from "../../../assets/orcamentos.svg";
import orcamentos_active from "../../../assets/orcamentos_active.svg";

export default function Orcamentos({ isCollapsed }) {
  return (
    <NavLink
      to="/orcamentos"
      className={({ isActive }) => `
       ${styles.item} ${isActive ? styles.active + " semibold" : ""} ${isCollapsed ? styles.collapsed : ""} body-medium`}
    >
      {({ isActive }) => (
        <>
          <img
            src={isActive ? orcamentos_active : orcamentos}
            alt="Área de Plantio"
            className={styles.icon}
          />

          {!isCollapsed && <span className={styles.label}>Orçamentos</span>}
        </>
      )}
    </NavLink>
  );
}
