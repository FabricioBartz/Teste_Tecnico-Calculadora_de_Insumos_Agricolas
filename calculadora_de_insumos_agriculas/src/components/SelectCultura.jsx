export default function SelectCultura({ culturaSelecionada, setCulturaSelecionada }) { 
  return (
    <select
          id="cultura"
          value={culturaSelecionada}
          onChange={(e) => setCulturaSelecionada(e.target.value)}
        >
          <option value="">Selecione a Cultura</option>
          <option value="soja">Soja</option>
          <option value="milho">Milho</option>
        </select>
  );
}