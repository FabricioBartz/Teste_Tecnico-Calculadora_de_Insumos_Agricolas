import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plantio from "./pages/Plantio/Plantio";
import Dashboard from "./pages/Dashboard/Dashboard"; 
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      {/* 1. Este container agora alinha Sidebar e o Restante lado a lado */}
      <div className="app-layout">
        
        {/* 2. A Sidebar agora começa no topo absoluto da tela */}
        <Sidebar />

        {/* 3. Este container agrupa o Header e as Páginas na direita */}
        <div className="main-container">
          <Header />

          <main className="content-area">
            <Routes>
              <Route path="/" element={<Plantio />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;