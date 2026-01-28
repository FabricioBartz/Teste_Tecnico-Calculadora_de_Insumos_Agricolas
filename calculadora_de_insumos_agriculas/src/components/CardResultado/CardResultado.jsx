import styles from './CardResultado.module.css';
import sacos from '../../assets/sacos.svg';
import sementes from '../../assets/sementes.svg';

export default function CardResultado({ dados }) {

  return (
    <div className={styles.containerResultado}>
      <h2 className={styles.titulo}>Resultado do Cálculo</h2>
      
      <div className={styles.cardsWrapper}>
        <div className={styles.cardInfo}>
          <div className={styles.headerInfo}>
            <img
                    src={sementes}
                    alt="Sacos necessários"
                    className={styles.icon}
                  />
            <div className={styles.texto}>Total de sementes</div>
          </div>
          <h2 className={styles.valor}>{dados ? `${dados.kg} kg` : "0 kg"}</h2>
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.headerInfo}>
            <img
                    src={sacos}
                    alt="Sacos necessários"
                    className={styles.icon}
                  />
            <div className={styles.texto}>Sacos necessários</div>
          </div>
          <h2 className={styles.valor}>{dados ? dados.sacos : "0"}</h2>
        </div>
      </div>
    </div>
  );
}