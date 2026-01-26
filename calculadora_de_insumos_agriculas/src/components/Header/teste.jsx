import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
// ... seus outros imports

export default function Header() {
  const location = useLocation();

  const titulos = {
    "/": "Planejamento de Safra",
    "/planejamento-safra": "Planejamento de Safra",
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
      {/* ... ações do usuário ... */}
    </header>
  );
}