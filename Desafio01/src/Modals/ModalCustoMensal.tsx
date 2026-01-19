import { getOrcamentoMes } from "../actions/OrcamentoFunction"
import { Caixa } from "../components/Caixa";
import { Subtitulo,TextoOrcamento } from "../components/Texto";

interface Data {
    DataMensal: string;
}

export function MOdalCustoMensal ( { DataMensal }: Data ) {

    const OrcamentoMes = getOrcamentoMes(DataMensal)

    return (
        <div className=" w-[100%] flex " >
            <Caixa className={"flex items-center justify-center gap-[2vh] "} >
                <Subtitulo>
                    TOTAL GASTO NESSE MÊS
                </Subtitulo>
                <TextoOrcamento>
                   ${OrcamentoMes}
                </TextoOrcamento>
            </Caixa>
        </div>
    )
}