import { useState } from "react";
import styles from "./Sidebar.module.css";
import logoicon from "../../assets/logoicon.svg";
import logotext from "../../assets/logotext.svg";
import togglesidebar from "../../assets/sidebar.svg";
import VisaoGeral from "../BotaoVisaoGeral/BotaoVisaoGeral";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Estado para controlar qual item do menu está selecionado
  const [activeItem, setActiveItem] = useState("visao-geral");

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <img src={logoicon} alt="AgroHub" />
          {!isCollapsed && (
            <span>
              <img src={logotext} alt="AgroHub" className={styles.logoText} />
            </span>
          )}
        </div>

        <button onClick={toggleSidebar} className={styles.toggleBtn}>
          <img src={togglesidebar} alt="Alternar Menu" />
        </button>
      </div>

      <nav className={styles.menu}>
        {/* Passamos isCollapsed para esconder o texto e isActive para trocar o ícone */}
        <VisaoGeral 
          isCollapsed={isCollapsed} 
          
        />
      </nav>
    </aside>
  );
}