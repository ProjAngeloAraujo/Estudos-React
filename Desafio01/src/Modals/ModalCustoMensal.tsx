import { getOrcamentoMes } from "../actions/OrcamentoFunction"
import { Caixa } from "../components/Caixa";

interface Data {
    DataMensal: string;
}

export function MOdalCustoMensal ( { DataMensal }: Data ) {

    const OrcamentoMes = getOrcamentoMes(DataMensal)

    return (
        <div className=" w-[100%] flex " >
            <Caixa>
                <p>banana</p>
            </Caixa>
        </div>
    )
}