/* Card para organizar o input e a seleção da cultura com o botao calcular*/
import styles from "./CardCalculadora.module.css";
import InputArea from "../InputArea/InputArea";
import SelectCultura from "../SelectCultura/SelectCultura";
import BotaoCalcular from "../buttons/BotaoCalcular/BotaoCalcular";

export default function CardCalculadora({
  area,
  setArea,
  cultura,
  setCultura,
  aoCalcular,
  erros
}) {
  return (
    <div className={styles.card}>
      <h6 className={styles.titulo}>Informações básicas</h6>

      <form onSubmit={aoCalcular} className={styles.tituloformulario}>
        <InputArea 
        label="Área" 
        value={area} 
        onChange={setArea} 
        erro={erros?.area}
        />

        <SelectCultura
          label="Cultura"
          culturaSelecionada={cultura}
          setCulturaSelecionada={setCultura}
          erro={erros?.cultura}
        />

        <div className={styles.botoesContainer}>
          <BotaoCalcular />
        </div>
      </form>
    </div>
  );
}
