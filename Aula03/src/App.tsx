import { useState, useEffect } from 'react'
import { Modal } from './components/modal'

function App() {

  const [Open, setOpen] = useState(false);

  useEffect( () => {
    
  }, [])

  return (
    <>
      <div>
        <h2>Mostrar Modal</h2>
        <button onClick={() => { setOpen(!Open) }}>{ Open ? "Fechar" : "Abrir" }</button>
      </div>
      <Modal isOpen={Open} />
    </>
  )
}

export default App