import { Titulo } from "./components/Texto"

function App() {
  return (
    <body className=" bg-[#f9f2fa] h-screen w-screen p-[2vw] " >

      <div className=" bg-white flex items-center py-[1vh] ">
        <p>testtinho</p>

        <div className="mx-auto">
          <Titulo>
            Texto
          </Titulo>
        </div>
      </div>

    </body>
  )
}

export default App
