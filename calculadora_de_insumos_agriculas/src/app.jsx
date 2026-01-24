import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Plantio from "./pages/Plantio/Plantio";
import Dashboard from "./pages/Dashboard/Dashboard"; 
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
              
              {/* Rota principal (Plantio) */}
              <Route path="/" element={<Plantio />} />
              
              {/* Rota do Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />

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