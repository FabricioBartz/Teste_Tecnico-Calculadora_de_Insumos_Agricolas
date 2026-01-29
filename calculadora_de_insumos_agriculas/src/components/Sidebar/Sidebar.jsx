import { useState } from "react";
import styles from "./Sidebar.module.css";
import logoicon from "../../assets/logoicon.svg";
import logotext from "../../assets/logotext.svg";
import fechar from "../../assets/fechar.svg";
import togglesidebar from "../../assets/sidebar.svg";
import VisaoGeral from "../buttons/BotaoVisaoGeral/BotaoVisaoGeral";
import PlanejamentoSafra from "../buttons/BotaoPlanejamentoSafra/BotaoPlanejamentoSafra";
import AreaPlantio from "../buttons/BotaoAreaPlantio/BotaoAreaPlantio";
import Orcamentos from "../buttons/BotaoOrcamentos/BotaoOrcamentos";
import Monitoramento from "../buttons/BotaoMonitoramento/BotaoMonitoramento";
import Configuracoes from "../buttons/BotaoConfiguracoes/BotaoConfiguracoes";
import Sair from "../buttons/BotaoSair/BotaoSair";

export default function Sidebar({ isCollapsed, isMobileOpen, onClose, onToggle }) {
  
  // Estado para controlar qual item do menu está selecionado
  const [activeItem, setActiveItem] = useState("visao-geral");
  // Determina se a sidebar deve ser tratada como recolhida
  const effectivelyCollapsed = isCollapsed && !isMobileOpen;

  return (
    <>
      {/* Overlay para fechar ao clicar fora no mobile */}
      {isMobileOpen && <div className={styles.overlay} onClick={onClose} />}
    <aside className={`
        ${styles.sidebar} 
        /* SÓ aplica 'collapsed' se NÃO for mobile open */
        ${isCollapsed && !isMobileOpen ? styles.collapsed : ""} 
        ${isMobileOpen ? styles.mobileActive : ""}
      `}>
    
      <div className={styles.logoContainer}> 
        <div className={styles.logoWrapper}>
          <img src={logoicon} alt="AgroHub" />
          {!effectivelyCollapsed && (
            <span>
              <img src={logotext} alt="AgroHub" className={styles.logoText} />
            </span>
          )}
        </div>

        {/* Botão de Toggle (Desktop) */}
          <button onClick={onToggle} className={styles.toggleBtn}>
            <img src={togglesidebar} alt="Alternar" />
          </button>

          {/* Botão de Fechar (Mobile - X) */}
          <button onClick={onClose} className={styles.closeBtnMobile}>
            <img src={fechar} alt="Fechar" />
          </button>
        </div>

      <nav className={styles.menu}>
        {/* Botões do menu principal */}
        <ul className={styles.menuList}>
          <li><VisaoGeral isCollapsed={effectivelyCollapsed}/></li>
          <li><AreaPlantio isCollapsed={effectivelyCollapsed} /></li>
          <li><Orcamentos isCollapsed={effectivelyCollapsed} /></li>
          <li><PlanejamentoSafra isCollapsed={effectivelyCollapsed} /></li>
          <li><Monitoramento isCollapsed={effectivelyCollapsed} /></li>
        </ul>
        
      </nav>

      <div className={styles.bottomSection}>
        <hr className={styles.divider} />
        <nav className={styles.menu}>
          {/* Botões de configurações e sair */}
          <ul className={styles.menuList}>
            <li><Configuracoes isCollapsed={effectivelyCollapsed} /></li>
            <li><Sair isCollapsed={effectivelyCollapsed} /></li>
          </ul>
        </nav>
      </div>
    </aside>
    </>
  );
}
