import { useState, useEffect } from "react"
import { Titulo, Titulo2 } from "../components/Texto"
import { getMesAnoUnicos } from "../actions/DataFunction"

type ModalTituloProps = {
  onChangeData: (data: string) => void;
};


export function ModalTitulo ({ onChangeData }: ModalTituloProps) {

    const TituloData = getMesAnoUnicos();
    const [IndexData, setIndexData] = useState(0);

    function DiminuirIndex() {
        setIndexData(prev => Math.max(prev - 1, 0));
    }

    function AumentarIndex() {
        setIndexData(prev =>
            Math.min(prev + 1, TituloData.length - 1)
        );
    }

    useEffect(() => {
        onChangeData(TituloData[IndexData]);
    }, [IndexData]);


    return (
        
        <div className=" flex items-center py-[0.5vh] ">
            <Titulo2>DASHBOARD ORÇAMENTO</Titulo2>

            <div className="mx-auto flex gap-[1vh] ">

                <button 
                onClick={DiminuirIndex}
                className="
                text-[#2a2079]
                font-bold
                text-[20px]
                md:text-[32px]
                lg:text-[5vh]
                " > { "<<" } </button>

                <Titulo>
                    {TituloData[IndexData]}
                </Titulo>

                <button onClick={AumentarIndex}
                className="
                text-[#2a2079]
                font-bold
                text-[20px]
                md:text-[32px]
                lg:text-[5vh]
                " > { ">>" } </button>

            </div>

        </div>
    )
}