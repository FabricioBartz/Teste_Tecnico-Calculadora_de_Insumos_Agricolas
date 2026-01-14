//função para inserir a área em hectares

export default function InputArea({ area, setArea }) { 
  return (
    <input
      placeholder="Área (ha)"
      name="Área"
      type="number"
      value={area}
      onChange={(e) => setArea(e.target.value)}
    />
  );
}
