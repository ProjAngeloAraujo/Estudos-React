import { Caixa } from "../components/Caixa"
import { Subtitulo } from "../components/Texto"
import { Chart } from "react-google-charts";
import { GerarGrafioMes } from "../actions/GraficoFunction";

interface Data {
    DataMensal: string;
}

export function ModalGrafico ( { DataMensal }: Data ) {

    const data = GerarGrafioMes(DataMensal);
    console.log(data)

    return (
        <Caixa className={" basis-5/12 min-w-[200px] "} >
            <Subtitulo>DESPESAS POR CATEGORIA</Subtitulo>
            <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"50vh"}
            />
        </Caixa>
    )
}