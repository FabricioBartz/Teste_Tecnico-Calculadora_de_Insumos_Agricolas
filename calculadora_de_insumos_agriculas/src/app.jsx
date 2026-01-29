import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PlanejamentoSafra from "./pages/Planejamento/Planejamento";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import VisaoGeral from "./pages/VisaoGeral/VisaoGeral";
import AreaPlantio from "./pages/AreaPlantio/AreaPlantio";
import Monitoramento from "./pages/Monitoramento/Monitoramento";
import Orcamentos from "./pages/Orcamentos/Orcamentos";
import Configuracoes from "./pages/Configuracoes/Configuracoes";
import Sair from "./pages/Sair/Sair";
import "./app.css";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wasMobile, setWasMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile !== wasMobile) {
        if (isMobile) {
          // REGRA: Se reduzir para mobile e o desktop estava aberto,
          // o menu flutuante já começa aberto.
          if (!isCollapsed) {
            setIsMenuOpen(true);
          }
        } else {
          // REGRA: Se aumentar para desktop, fecha o estado mobile
          // para evitar que o botão de fechar (X) fique "preso".
          setIsMenuOpen(false);
        }
        setWasMobile(isMobile);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isCollapsed, wasMobile]);

  // Funções de controle
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const closeMobileMenu = () => setIsMenuOpen(false);
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar
          isCollapsed={isCollapsed}
          isMobileOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)} // Função para o "X"
          onToggle={() => setIsCollapsed(!isCollapsed)} // Função para a "Seta"
        />

        <div className="main-container">
          <Header onOpenMenu={() => setIsMenuOpen(true)} />

          <main className="content-area">
            <Routes>
              {/* Rota da Visão Geral com o aviso de construção */}
              <Route path="/visao-geral" element={<VisaoGeral />} />
              <Route
                path="/planejamento-safra"
                element={<PlanejamentoSafra />}
              />
              <Route path="/monitoramento" element={<Monitoramento />} />
              <Route path="/area-plantio" element={<AreaPlantio />} />
              <Route path="/orcamentos" element={<Orcamentos />} />
              <Route path="/configuracoes" element={<Configuracoes />} />
              <Route path="/sair" element={<Sair />} />

              {/* Rota principal (Planejamento de Safra) */}
              <Route path="/" element={<Navigate to="/planejamento-safra" />} />

              {/* Redirecionamento de segurança: se a rota não existir, volta para o início */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
