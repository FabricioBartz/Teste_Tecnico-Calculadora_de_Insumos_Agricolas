import { useState } from "react";
import styles from "./Sidebar.module.css";
import logoagrohub from "../../assets/logoicon.svg";
import togglesidebar from "../../assets/sidebar.svg";

export default function Sidebar() {
  // Estado que controla se a barra está fininha (true) ou larga (false)
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Função para inverter o estado
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
    >
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <img src={logoagrohub} alt="AgroHub" className={styles.logoIcon} />
          {!isCollapsed && <span className={styles.logoText}>AgroHub.</span>}
        </div>

        {/* O botão agora terá uma classe que reage ao hover do pai */}
        <button onClick={toggleSidebar} className={styles.toggleBtn}>
          <img src={togglesidebar} alt="Alternar Menu" />
        </button>
      </div>
    </aside>
  );
}
