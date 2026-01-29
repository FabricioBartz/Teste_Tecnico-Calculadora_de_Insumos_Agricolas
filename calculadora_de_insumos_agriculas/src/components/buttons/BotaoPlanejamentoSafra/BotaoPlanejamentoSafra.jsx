import { NavLink } from "react-router-dom";
import styles from "./BotaoPlanejamentoSafra.module.css";
import planejamentosafra from "../../../assets/planejamentosafra.svg";
import planejamentosafra_active from "../../../assets/planejamentosafra_active.svg";

export default function PlanejamentoSafra({ isCollapsed }) {
  return (
    <NavLink
      to="/planejamento-safra"
      className={({ isActive }) => `
       ${styles.item} ${isActive ? styles.active + " semibold" : ""} ${isCollapsed ? styles.collapsed : ""} body-medium`}
    >
      {({ isActive }) => (
        <>
          <img
            src={isActive ? planejamentosafra_active : planejamentosafra}
            alt="Planejamento da Safra"
            className={styles.icon}
          />
          {!isCollapsed && (
            <span className={styles.label}>Planejamento Safra</span>
          )}
        </>
      )}
    </NavLink>
  );
}
