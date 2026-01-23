import { NavLink } from "react-router-dom";
import { useState } from 'react';
import styles from './Sidebar.module.css';
import SidebarItem from './SidebarItem';
// Importe seus ícones aqui...

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoContainer}>
        {/* Ícone da logo sempre visível */}
        <img src={logoIcon} alt="AgroHub" />
        {/* Texto da logo some ao contrair */}
        {!isCollapsed && <span className={styles.logoText}>AgroHub.</span>}
        
        <button onClick={toggleSidebar} className={styles.toggleBtn}>
          {/* Use um ícone de seta ou o ícone da imagem image_f635d7 */}
          <img src={toggleIcon} alt="Recolher" />
        </button>
      </div>

      {/*<nav className={styles.menu}>
        <SidebarItem icon={iconVisao} label="Visão Geral" collapsed={isCollapsed} />
        <SidebarItem icon={iconPlantio} label="Área de plantio" collapsed={isCollapsed} />
        <SidebarItem icon={iconCalculo} label="Planejamento de Safra" active collapsed={isCollapsed} />
      </nav>
      
      {/* ... footer com Configurações e Sair ... */}
    </aside>
  );
}