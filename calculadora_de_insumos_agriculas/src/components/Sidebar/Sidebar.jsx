import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navMenu}>
        {/* Link para a Calculadora (Página Inicial) */}
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          <span className={styles.icon}>🌱</span>
          <span className={styles.text}>Planejamento Safra</span>
        </NavLink>

        {/* Link para o Dashboard */}
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          <span className={styles.icon}>📊</span>
          <span className={styles.text}>Visão Geral</span>
        </NavLink>

        {/* Itens extras apenas para preencher o visual igual à imagem */}
        <div className={styles.divider}></div>
        
        <a href="#" className={styles.link}>
          <span className={styles.icon}>💰</span>
          <span className={styles.text}>Orçamentos</span>
        </a>
        
        <a href="#" className={styles.link}>
          <span className={styles.icon}>📈</span>
          <span className={styles.text}>Monitoramento</span>
        </a>
      </nav>

      <div className={styles.sidebarFooter}>
        <a href="#" className={styles.link}>
          <span className={styles.icon}>⚙️</span>
          <span className={styles.text}>Configurações</span>
        </a>
        <button className={styles.logoutBtn}>
          <span className={styles.icon}>🚪</span>
          <span className={styles.text}>Sair</span>
        </button>
      </div>
    </aside>
  );
}