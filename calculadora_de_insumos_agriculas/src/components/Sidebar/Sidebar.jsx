import { useState } from "react";
import styles from "./Sidebar.module.css";
import logoicon from "../../assets/logoicon.svg";
import logotext from "../../assets/logotext.svg";
import togglesidebar from "../../assets/sidebar.svg";
import VisaoGeral from "../VisaoGeral/VisaoGeral";

export default function Sidebar() {
  // Estado que controla se a barra está aberta (true) ou fechada (false)
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Função para inverter o estado do sidebar
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
    >
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <img src={logoicon} alt="AgroHub" />
          {!isCollapsed && (
            <span>
              <img src={logotext} alt="AgroHub" className={styles.logoText} />
            </span>
          )}
        </div>

        {/* botão abrir e fechar sidebar */}
        <button onClick={toggleSidebar} className={styles.toggleBtn}>
          <img src={togglesidebar} alt="Alternar Menu" />
        </button>
      </div>

      <nav className={styles.menu}>
        <VisaoGeral
          isCollapsed={isCollapsed}
          
        />
        
      </nav>
    </aside>
  );
}
