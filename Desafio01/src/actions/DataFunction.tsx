import transactions from "../../Databases/transactions.json";

export function getMesAnoUnicos(): string[] {
  const map = new Map<string, { ano: number; mesIndex: number }>();

  transactions.forEach(item => {
    const date = new Date(item.date);
    const ano = date.getFullYear();
    const mesIndex = date.getMonth();

    map.set(`${ano}-${mesIndex}`, { ano, mesIndex });
  });

  return Array.from(map.values())
    .sort((a, b) =>
      a.ano !== b.ano ? a.ano - b.ano : a.mesIndex - b.mesIndex
    )
    .map(({ ano, mesIndex }) => {
      const mes = new Date(ano, mesIndex).toLocaleString("pt-BR", {
        month: "long"
      });

      const mesFormatado =
        mes.charAt(0).toUpperCase() + mes.slice(1);

      return `${mesFormatado}  ${ano}`;
    });
}