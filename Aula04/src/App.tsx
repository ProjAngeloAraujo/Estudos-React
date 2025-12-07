import { useState, useEffect } from 'react'
import { Modal } from './components/modal'

function App() {

  const [Open, setOpen] = useState(false);

  useEffect( () => {
    if(Open){
      console.log("Modal foi aberto")
    }
  }, [Open])

  return (
    <>
      <div>
        <h2>Mostrar Modal</h2>
        <button onClick={() => { setOpen(!Open) }}>{ Open ? "Fechar" : "Abrir" }</button>
      </div>
      <Modal isOpen={Open} setModalOpen={() => setOpen(!Open)}/>
    </>
  )
}

export default App