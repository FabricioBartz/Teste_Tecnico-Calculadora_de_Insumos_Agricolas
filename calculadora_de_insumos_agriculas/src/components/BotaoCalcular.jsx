export default function Botao({ texto, aoClicar }) {
  return (
    <button type="submit" onClick={aoClicar} className="botao-calcular">
      {texto}
    </button>
  );
}
