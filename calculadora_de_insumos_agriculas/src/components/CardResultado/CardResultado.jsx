import styles from "./CardResultado.module.css";
import sacos from "../../assets/sacos.svg";
import sementes from "../../assets/sementes.svg";

export default function CardResultado({ dados }) {
  // Função de formatação segura: se não houver dados, retorna o valor zerado formatado
  const formatarKg = (valor) => {
    const num = valor || 0;
    return num.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatarSacos = (valor) => {
    const num = valor || 0;
    return num.toLocaleString("pt-BR");
  };

  return (
    <div className={styles.containerResultado}>
      <h6 className={styles.titulo}>Resultado do Cálculo</h6>

      <div className={styles.cardsWrapper}>
        <div className={styles.cardInfo}>
          <div className={styles.headerInfo}>
            <img
              src={sementes}
              alt="Sacos necessários"
              className={styles.icon}
            />
            <div className={`${styles.texto} body-small semibold`}>
              Total de sementes
            </div>
          </div>
          <h4 className={styles.valor}>{formatarKg(dados?.kg)} kg</h4>
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.headerInfo}>
            <img src={sacos} alt="Sacos necessários" className={styles.icon} />
            <div className={`${styles.texto} body-small semibold`}>
              Sacos necessários
            </div>
          </div>
          <h4 className={styles.valor}>{formatarSacos(dados?.sacos)}</h4>
        </div>
      </div>
    </div>
  );
}
