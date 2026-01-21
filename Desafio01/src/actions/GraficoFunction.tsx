import transactions from "../../Databases/transactions.json";

export function GerarGrafioMes(mesAno: string): (string | number)[][] {

  let Grafico: (string | number)[][] = [
    ["Categoria", "Total"]
  ];

  const texto = mesAno
    .replace("/", "")
    .trim()
    .replace(/\s+/g, " ");

  const partes = texto.split(" ");
  if (partes.length < 2) return [];

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
  if (mesIndex === undefined || isNaN(ano)) return [];

  transactions.forEach(item => {
    const data = new Date(item.date);

    if (
        data.getFullYear() === ano &&
        data.getMonth() === mesIndex
    ) {
        const index = Grafico.findIndex(
        linha => linha[0] === item.category
        );

        if (index !== -1) {
            Grafico[index][1] = (Grafico[index][1] as number) + item.amount;
        } else {
            Grafico.push([item.category, item.amount]);
        }
    }
    });

  return Grafico;
}