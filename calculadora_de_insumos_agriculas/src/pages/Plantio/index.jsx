import "./style.css";
import { useState } from "react";

function Plantio() {
  const [area, setArea] = useState(""); // estado para armazenar a área plantada
  const [culturaSelecionada, setCulturaSelecionada] = useState(""); // estado para armazenar a cultura selecionada
  const [resultado, setResultado] = useState(null); // estado para armazenar o resultado do cálculo
  const culturas = { // dados das culturas
    soja: { nome: "Soja", rendimento: 45, sacoKg: 40 },
    milho: { nome: "Milho", rendimento: 20, sacoKg: 20 },
  };

  const calcular = (e) => { // funcão para calcular os insumos
    e.preventDefault(); 

    if (!area || !culturaSelecionada) {
      alert("Preencha todos os campos!"); // validação dos campos
      return;
    }

    const info = culturas[culturaSelecionada];
    const totalKg = area * info.rendimento;
    const totalSacos = Math.ceil(totalKg / info.sacoKg);

    setResultado({ kg: totalKg, sacos: totalSacos });
  };

  return (
    <div className="container">
      <form>
        <h1>Planejamento de Safra</h1>
        <input
          placeholder="Área (ha)"
          name="Área"
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <select
          id="cultura"
          value={culturaSelecionada}
          onChange={(e) => setCulturaSelecionada(e.target.value)}
        >
          <option value="">Selecione a Cultura</option>
          <option value="soja">Soja</option>
          <option value="milho">Milho</option>
        </select>
      </form>
    </div>
  );
}

export default Plantio;
