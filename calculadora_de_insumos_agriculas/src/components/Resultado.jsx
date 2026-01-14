// função para exibir o resultado

export default function Resultado({ dados }) {
  return (
    <div>
      <p>Total de sementes: <strong>{dados ? `${dados.kg} kg` : "--"} kg</strong></p>
      <p>Sacos Necessários: <strong>{dados ? `${dados.sacos} sacos` : "--"} sacos</strong></p>
    </div>
  );
}
