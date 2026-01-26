import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import BotaoLogin from "../buttons/BotaoLogin/BotaoLogin";
import BotaoNotificacao from "../buttons/BotaoNotificacao/BotaoNotificacao";

export default function Header() {
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
      <h1 className={styles.pageTitle}>{tituloAtual}</h1>
      <div className={styles.userActions}>
        <BotaoNotificacao />
        <BotaoLogin />
      </div>
    </header>
  );
}


