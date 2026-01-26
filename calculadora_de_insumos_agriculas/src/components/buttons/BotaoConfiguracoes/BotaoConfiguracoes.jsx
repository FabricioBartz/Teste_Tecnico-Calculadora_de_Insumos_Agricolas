import { NavLink } from "react-router-dom";
import styles from "./BotaoConfiguracoes.module.css";
import configuracoes from "../../../assets/configuracoes.svg";
import configuracoes_active from "../../../assets/configuracoes_active.svg";

export default function Configuracoes({ isCollapsed }) {
  return (
    <NavLink
      to="/configuracoes"
      className={({ isActive }) => `
      ${styles.item} 
      ${isActive ? styles.active : ""} 
      ${isCollapsed ? styles.collapsed : ""}
    `}
    >
      {({ isActive }) => (
        <>
          <img
            src={isActive ? configuracoes_active : configuracoes}
            alt="Configurações"
            className={styles.icon}
          />

          {!isCollapsed && <span className={styles.label}>Configurações</span>}
        </>
      )}
    </NavLink>
  );
}
