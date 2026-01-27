import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import BotaoLogin from "../buttons/BotaoLogin/BotaoLogin";
import BotaoNotificacao from "../buttons/BotaoNotificacao/BotaoNotificacao";
import menu_hamburguer from "../../assets/menu_hamburguer.svg";

export default function Header({ onOpenMenu }) {
  const location = useLocation();

  const titulos = {
    "/": "Planejamento de Safra",
    "/planejamento-safra": "Planejamento Safra",
    "/visao-geral": "Visão Geral",
    "/monitoramento": "Monitoramento", 
    "/area-plantio": "Área de Plantio",
    "/orcamentos": "Orçamentos",
    "/configuracoes": "Configurações"
  };

  const tituloAtual = titulos[location.pathname] || "AgroHub";

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button className={styles.menuBtn} onClick={onOpenMenu}>
          <img src={menu_hamburguer} alt="Abrir menu" />
        </button>
        <h1 className={styles.pageTitle}>{tituloAtual}</h1>
      </div>

      <div className={styles.userActions}>
        <BotaoNotificacao />
        <BotaoLogin />
      </div>
    </header>
  );
}


