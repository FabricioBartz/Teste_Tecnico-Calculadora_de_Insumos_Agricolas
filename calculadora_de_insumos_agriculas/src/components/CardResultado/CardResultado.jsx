import styles from './CardResultado.module.css';
import sacos from '../../assets/sacos.svg';
import sementes from '../../assets/sementes.svg';

export default function CardResultado({ dados }) {

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
            <div className={`${styles.texto} body-small semibold`}>Total de sementes</div>
          </div>
          <h4 className={styles.valor}>{dados ? `${dados.kg} kg` : "0 kg"}</h4>
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.headerInfo}>
            <img
                    src={sacos}
                    alt="Sacos necessários"
                    className={styles.icon}
                  />
            <div className={`${styles.texto} body-small semibold`}>Sacos necessários</div>
          </div>
          <h4 className={styles.valor}>{dados ? dados.sacos : "0"}</h4>
        </div>
      </div>
    </div>
  );
}