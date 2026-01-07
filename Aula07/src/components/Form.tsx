
function Form () {

    return (
        <section className=" bg-black h-[80vh] flex justify-around items-center " >

            <form className=" bg-zinc-800 h-[75vh] w-[25vw] min-w-[320px] flex flex-col justify-around items-center p-[5vw] rounded-2xl shadow-xl shadow-zinc-700/40 hover:shadow-2xl hover:shadow-zinc-500/50 transition-all duration-300 " >

                <h3 className=" text-white text-4xl font-bold text-center " >Crie sua conta grátis</h3>

                <label htmlFor="nome" className=" text-white text-1xl md:text-1xl lg:text-2xl w-[100%] flex justify-between items-center flex-wrap " >Nome:  
                    <input type="text" id="nome" placeholder="Nome..." className=" px-[0.5vw] bg-black border-[2px] border-zinc-600 rounded-xl " />
                </label>
                
                <label htmlFor="email" className=" text-white text-1xl md:text-1xl lg:text-2xl w-[100%] flex justify-between items-center flex-wrap " >E-mail: 
                    <input type="text" id="email" placeholder="E-mail.." className=" px-[0.5vw] bg-black border-[2px] border-zinc-600 rounded-xl " />
                </label>

                <label htmlFor="senha" className=" text-white text-1xl md:text-1xl lg:text-2xl w-[100%] flex justify-between items-center flex-wrap " >Senha: 
                    <input type="text" id="senha" placeholder="Senha.." className=" px-[0.5vw] bg-black border-[2px] border-zinc-600 rounded-xl " />
                </label>
                
                <button className="text-white text-center bg-green-600 rounded-lg px-6 py-2 md:text-xl lg:text-2xl font-bold">
                    Começar agora
                </button>

            </form>

        </section>
    )

}

export default Form