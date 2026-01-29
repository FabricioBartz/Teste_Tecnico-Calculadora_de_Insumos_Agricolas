import { NavLink } from "react-router-dom";
import styles from "./BotaoVisaoGeral.module.css";
import visaogeral from "../../../assets/visaogeral.svg";
import visaogeral_active from "../../../assets/visaogeral_active.svg";

export default function VisaoGeral({ isCollapsed }) {
  return (
    <NavLink
      to="/visao-geral"
     
      className={({ isActive }) => `
        ${styles.item} ${isActive ? styles.active + " semibold" : ""} ${isCollapsed ? styles.collapsed : ""} body-medium`}
    >
      {({ isActive }) => (
        <>
          <img
            src={isActive ? visaogeral_active : visaogeral}
            alt="Visão Geral"
            className={styles.icon}
          />
          {!isCollapsed && <span className={styles.label}>Visão Geral</span>}
        </>
      )}
    </NavLink>
  );
}