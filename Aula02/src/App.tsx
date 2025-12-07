import { useState, useEffect } from 'react'

function App() {

  const [Nome, setNome] = useState("");

  useEffect( () => {
    if (Nome === "João"){
      alert("Nome correto")
    }
  }, [Nome])

  return (
    <>
      <div>
        <input value={Nome} onChange={(event) => { setNome(event.target.value) }}/>
        <p>Meu nome é: {Nome}</p>
      </div>
    </>
  )
}

export default App