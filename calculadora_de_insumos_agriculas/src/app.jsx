import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PlanejamentoSafra from "./pages/Planejamento/Planejamento";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import VisaoGeral from "./pages/VisaoGeral/VisaoGeral"; // Esta é a página com o aviso
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />

        <div className="main-container">
          <Header />

          <main className="content-area">
            <Routes>
              {/* Rota da Visão Geral com o aviso de construção */}
              <Route path="/visao-geral" element={<VisaoGeral />} />

              <Route path="/planejamento-safra" element={<PlanejamentoSafra />} />

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