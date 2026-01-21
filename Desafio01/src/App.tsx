import { ModalTitulo } from "./Modals/ModalTitulo";
import { MOdalCustoMensal } from "./Modals/ModalCustoMensal";
import { ModalGrafico } from "./Modals/ModalGrafico";
import { ModalTabela } from "./Modals/ModalTabela";
import { useState } from "react";

function App() {

  const [dataSelecionada, setDataSelecionada] = useState<string>("");


  return (
    <body className=" bg-[#f9f2fa] h-screen w-screen p-[2vw] " >

      <ModalTitulo onChangeData={setDataSelecionada} ></ModalTitulo>
      <MOdalCustoMensal DataMensal={dataSelecionada} ></MOdalCustoMensal>
      <div className=" w-[100%] h-[65vh] flex py-[2vh] gap-[3vh]  " >
        <ModalGrafico DataMensal={dataSelecionada} ></ModalGrafico>
        <ModalTabela></ModalTabela>
      </div>

    </body>
  )
}

export default App
