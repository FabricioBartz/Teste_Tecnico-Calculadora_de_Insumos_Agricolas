import styles from "./Planejamento.module.css";
import { useState } from "react";
import CardResultado from "../../components/CardResultado/CardResultado.jsx";
import CardCalculadora from "../../components/CardCalculadora/CardCalculadora.jsx";

function PlanejamentoSafra() {
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

    const chaveCultura = cultura.toLowerCase();
    const info = culturas[chaveCultura];

    if (info) {
      const kgTotal = Number(area) * info.rendimento;
      const sacosTotal = Math.ceil(kgTotal / info.sacoKg);

      setDadosCalculados({ kg: kgTotal, sacos: sacosTotal });
    }
  };

  //cards
  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.contentWrapper}>
        <div className={styles.cardCalculadora}>
          <CardCalculadora
            area={area}
            setArea={setArea}
            cultura={cultura}
            setCultura={setCultura}
            aoCalcular={calcularSafra}
          />
        </div>
        <div className={styles.containerResultado}>
          <CardResultado dados={dadosCalculados} />
        </div>
      </div>
    </div>
  );
}

export default PlanejamentoSafra;
