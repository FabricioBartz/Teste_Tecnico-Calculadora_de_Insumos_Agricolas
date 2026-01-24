import { useState } from "react";
import styles from "./Sidebar.module.css";
import logoicon from "../../assets/logoicon.svg";
import logotext from "../../assets/logotext.svg";
import togglesidebar from "../../assets/sidebar.svg";
import VisaoGeral from "../icons/BotaoVisaoGeral/BotaoVisaoGeral";
import PlanejamentoSafra from "../icons/BotaoPlanejamentoSafra/BotaoPlanejamentoSafra";
import AreaPlantio from "../icons/BotaoAreaPlantio/BotaoAreaPlantio";
import Orcamentos from "../icons/BotaoOrcamentos/BotaoOrcamentos";
import Monitoramento from "../icons/BotaoMonitoramento/BotaoMonitoramento";
import Configuracoes from "../icons/BotaoConfiguracoes/BotaoConfiguracoes";
import Sair from "../icons/BotaoSair/BotaoSair";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Estado para controlar qual item do menu está selecionado
  const [activeItem, setActiveItem] = useState("visao-geral");

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

        <button onClick={toggleSidebar} className={styles.toggleBtn}>
          <img src={togglesidebar} alt="Alternar Menu" />
        </button>
      </div>

      <nav className={styles.menu}>
        {/* Botões do menu principal */}
        <VisaoGeral isCollapsed={isCollapsed} />
        <AreaPlantio isCollapsed={isCollapsed} />
        <Orcamentos isCollapsed={isCollapsed} />
        <PlanejamentoSafra isCollapsed={isCollapsed} />
        <Monitoramento isCollapsed={isCollapsed} />
      </nav>

      <div className={styles.bottomSection}>
        <hr className={styles.divider} />
        <nav className={styles.menu}>
          {/* Botões de configurações e sair */}
          <Configuracoes isCollapsed={isCollapsed} />
          <Sair isCollapsed={isCollapsed} />
        </nav>
      </div>
    </aside>
  );
}
