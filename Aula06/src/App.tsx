

function App() {
  return (
    <div className="h-screen bg-black p-8 flex flex-col">

      <h1 className="text-white text-3xl">Ângelo</h1>

      <p className="text-white m-9">Lindo?</p>

      <div className="h-screen bg-green-500 flex flex-col flex-1 gap-3 justify-center items-center ">

        <input type="text" name="nome" placeholder="Seu nome" className=" w-1/6 h-[8%] p-2 border-none !rounded-3xl !text-3xl " />
        <label htmlFor="nome" className=" !text-3xl text-white " >Coloca o Nome ai</label>

        <input type="text" name="pai" placeholder="Seu pai"  className=" w-1/6 h-[8%] p-2 border-none !rounded-3xl !text-3xl " />
        <label htmlFor="pai" className=" !text-3xl text-white " >Coloca o Pai ai</label>

      </div>

    </div>
  )
}

export default App
