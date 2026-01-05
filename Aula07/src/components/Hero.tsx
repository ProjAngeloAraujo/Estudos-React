function Hero(){
    return (
        
        <main className="bg-black flex flex-wrap h-auto md:h-[92vh]">

            <aside className="bg-black flex flex-col w-full md:flex-1 min-h-[50vh] md:h-full justify-center items-center gap-[2vw] ">

                <section className="flex flex-col">

                    <h2 className="text-white text-center p-[1vw] text-2xl md:text-2xl lg:text-7xl font-bold">
                        Crie sua conta e comece hoje
                    </h2>

                    <h3 className="text-white text-center p-[1vw] text-lg md:text-xl lg:text-2xl font-bold">
                        Uma plataforma simples, rápida e feita para você aprender de verdade
                    </h3>
                    
                </section>

                <section className="flex gap-[2vw] mt-4">

                    <button className="text-white text-center bg-green-600 rounded-lg md:rounded-[1vw] px-6 py-2 md:text-xl lg:text-2xl font-bold">
                        Começar agora
                    </button>

                    <button className="text-white text-center md:text-xl lg:text-2xl font-bold">
                        Saiba mais
                    </button>

                </section>

            </aside>

            <article className="bg-black w-full md:flex-1 h-[50vh] md:h-full flex justify-center items-center">

                <img src="/img.png" className="w-[80%] md:w-auto md:h-[50%] lg:h-[70%] object-contain" />

            </article>

        </main>

    )
}

export default Hero