import { useState } from 'react'

function App() {

  const like = 0
  const [Ativo, setAtivo] = useState(false)
  const likeAction = () => {
    if(!Ativo){
      setAtivo(true)
    } else {
      setAtivo(false)
    }
  }

  return (
    <div>
      <p>Likes: {like + (Ativo ? 1 : 0)}</p>
      <button onClick={likeAction}>{Ativo ? "Descutir" : "Curtir"}</button>
    </div>
  )
}

export default App