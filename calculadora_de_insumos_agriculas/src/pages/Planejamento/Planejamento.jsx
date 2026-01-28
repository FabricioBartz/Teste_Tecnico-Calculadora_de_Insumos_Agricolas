import styles from "./Planejamento.module.css";
import { useState } from "react";
import CardResultado from "../../components/CardResultado/CardResultado.jsx";
import CardCalculadora from "../../components/CardCalculadora/CardCalculadora.jsx";

function PlanejamentoSafra() {
  const [area, setArea] = useState("");
  const [cultura, setCultura] = useState("");
  const [dadosCalculados, setDadosCalculados] = useState(null);
  const [erros, setErros] = useState({ area: "", cultura: "" });

  //Tamanho do Saco de milho: 20kg , Soja: 40kg
  //rendimento por hectare milho: 20kg/ha, soja: 45kg/ha

  const culturas = {
    soja: { rendimento: 45, sacoKg: 40 },
    milho: { rendimento: 20, sacoKg: 20 },
  };
  // Função para calcular os insumos
  const calcularSafra = (e) => {
    e.preventDefault(); // Impede a página de recarregar

    let novosErros = { area: "", cultura: "" };
    let temErro = false;

    // Validação da Área
    if (area === "") {
      novosErros.area = "Digite o número de hectares";
      temErro = true;
    }
    // Se não estiver vazia, mas for 0 ou menor, envia a segunda mensagem
    else if (Number(area) <= 0) {
      novosErros.area = "Digite um numero valido";
      temErro = true;
    }

    // Validação da Cultura (Obrigatória)
    if (!cultura) {
      novosErros.cultura = "Selecione uma cultura";
      temErro = true;
    }

    if (temErro) {
      setErros(novosErros);

      // Se o erro for na área, é limpado o valor para o placeholder vermelho aparecer
      if (novosErros.area) setArea("");

      // Limpa os erros e volta ao normal após 2 segundos
      setTimeout(() => {
        setErros({ area: "", cultura: "" });
      }, 2000);

      return; // Interrompe o cálculo se houver erro
    }

    // Se não houver erro, limpa avisos anteriores e calcula
    setErros({ area: "", cultura: "" });
    const info = culturas[cultura.toLowerCase()];
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
            erros={erros}
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
