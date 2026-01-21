import transactions from "../../Databases/transactions.json";

export function getOrcamentoMes(mesAno: string): number {
  let soma = 0;

  const texto = mesAno
    .replace("/", "")
    .trim()
    .replace(/\s+/g, " ");

  const partes = texto.split(" ");

  if (partes.length < 2) return 0;

  const mesTexto = partes[0];
  const ano = Number(partes[1]);

  const meses: Record<string, number> = {
    janeiro: 0,
    fevereiro: 1,
    março: 2,
    abril: 3,
    maio: 4,
    junho: 5,
    julho: 6,
    agosto: 7,
    setembro: 8,
    outubro: 9,
    novembro: 10,
    dezembro: 11
  };

  const mesIndex = meses[mesTexto.toLowerCase()];

  if (mesIndex === undefined || isNaN(ano)) return 0;

  transactions.forEach(item => {
    const data = new Date(item.date);

    if (
      data.getFullYear() === ano &&
      data.getMonth() === mesIndex
    ) {
      soma += item.amount;
    }
  });

  return Number(soma.toFixed(2));

}
