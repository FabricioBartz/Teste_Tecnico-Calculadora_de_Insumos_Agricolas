import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Plantio from "./pages/Plantio/Plantio";
import Dashboard from "./pages/Dashboard/Dashboard"; 

function App() {
  return (
    <BrowserRouter>
     <Navbar />  {/* Navbar fixa para todas as rotas */}

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Plantio />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

