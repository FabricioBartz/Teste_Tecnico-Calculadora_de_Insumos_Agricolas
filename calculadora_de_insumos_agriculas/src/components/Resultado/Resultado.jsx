// função para exibir o resultado
import styles from './Resultado.module.css';

export default function Resultado({ dados }) {
  return (
    <div className={styles.resultado}>
      <p>Total de sementes: <strong>{dados ? `${dados.kg} kg` : "--"} </strong></p>
      <p>Sacos Necessários: <strong>{dados ? `${dados.sacos} sacos` : "--"} </strong></p>
    </div>
  );
}
