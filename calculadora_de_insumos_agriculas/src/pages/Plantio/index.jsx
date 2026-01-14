import "./style.css";
import { useState } from "react";
import InputArea from "../../components/InputArea.jsx";
import SelectCultura from "../../components/SelectCultura.jsx";
import BotaoCalcular from "../../components/BotaoCalcular.jsx";
import Resultado from "../../components/Resultado.jsx";

function Plantio() {
  const [area, setArea] = useState("");
  const [cultura, setCultura] = useState("");
  const [dadosCalculados, setDadosCalculados] = useState(null);

  //Tamanho do Saco de milho: 20kg , Soja: 40kg
  //rendimento por hectare milho: 20kg/ha, soja: 45kg/ha

  const culturas = {
    soja: { rendimento: 45, sacoKg: 40 },
    milho: { rendimento: 20, sacoKg: 20 },
  };
  // Função para calcular os insumos
  const calcularSafra = (e) => {
    e.preventDefault(); // Impede a página de recarregar

    const info = culturas[cultura];
    const kgTotal = area * info.rendimento;
    const sacosTotal = Math.ceil(kgTotal / info.sacoKg); // Arredonda para cima conforme o requisito

    // Salva o objeto com os valores calculados
    setDadosCalculados({ kg: kgTotal, sacos: sacosTotal });
  };

  return (
    <div className="container">
      <form onSubmit={calcularSafra}>
        <h1>Planejamento de Safra</h1>
        <InputArea area={area} setArea={setArea} />
        <SelectCultura
          culturaSelecionada={cultura}
          setCulturaSelecionada={setCultura}
        />
        <BotaoCalcular texto="Calcular" />
      </form>
      <div className="resultado">
        {/* Resultados dos cálculos serão exibidos aqui */}
        <h3>Resultado:</h3>
        <Resultado dados={dadosCalculados} />
      </div>
    </div>
  );
}

export default Plantio;
