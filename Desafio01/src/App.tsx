import { ModalTitulo } from "./Modals/ModalTitulo";
import { MOdalCustoMensal } from "./Modals/ModalCustoMensal";
import { Caixa } from "./components/Caixa";
import { useState } from "react";

function App() {

  const [dataSelecionada, setDataSelecionada] = useState<string>("");


  return (
    <body className=" bg-[#f9f2fa] h-screen w-screen p-[2vw] " >

      <ModalTitulo onChangeData={setDataSelecionada} ></ModalTitulo>
      <MOdalCustoMensal DataMensal={dataSelecionada} ></MOdalCustoMensal>
      <div className=" w-[100%] h-[65vh] flex py-[2vh] gap-[3vh]  " >
        <Caixa className={" basis-5/12 min-w-[200px] "} >
        </Caixa>
        <Caixa className={" basis-7/12 min-w-[200px] "} >
        </Caixa>
      </div>

    </body>
  )
}

export default App
