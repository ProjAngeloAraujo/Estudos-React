import { ModalTitulo } from "./Modals/ModalTitulo";
import { MOdalCustoMensal } from "./Modals/ModalCustoMensal";
import { useState } from "react";

function App() {

  const [dataSelecionada, setDataSelecionada] = useState<string>("");


  return (
    <body className=" bg-[#f9f2fa] h-screen w-screen p-[2vw] " >

      <ModalTitulo onChangeData={setDataSelecionada} ></ModalTitulo>
      <MOdalCustoMensal DataMensal={dataSelecionada} ></MOdalCustoMensal>


    </body>
  )
}

export default App
