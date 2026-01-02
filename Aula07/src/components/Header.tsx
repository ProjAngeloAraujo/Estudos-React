function Header () {

    return (
        <header className=" bg-black flex h-[8vh] justify-between items-center text-white text-center p-[1vw] md:text-1xl lg:text-2xl font-bold ">

            BG LTDA

            <main className=" flex gap-[2vw] items-center h-[100%] " >

                <a>Home</a>
                <a>Sobre</a>
                <a>Contato</a>
                <button className=" bg-green-600 h-[5vh] rounded-[1vw] px-[0.5vw] " >Criar Conta</button>

            </main>

        </header>
    )

}

export default Header