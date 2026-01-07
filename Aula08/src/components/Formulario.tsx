import { useState,  } from "react"

function Formulario () {

    const [Nome, setNome] = useState('');
    const [Senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');


    async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        console.log("aaaaaa")

        const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Nome, Senha })
        });

        const data = await response.json();
        
        if(data){
            setMensagem(data.message);
            console.log(data.message);
        } else {
            setMensagem("erro desconhecido");
            console.log("erro desconhecido");
        }

    }


    return (
        <div className=" h-[100vh] w-[100vw] bg-black flex items-center justify-center " >

            <form onSubmit={e => Cadastrar(e)} className=" h-[60vh] w-[40vh] bg-green-800 p-[2vw] flex flex-col items-center justify-around rounded-lg shadow-xl shadow-zinc-700/40 hover:shadow-2xl hover:shadow-zinc-500/50 transition-all duration-300 "> 

                <label className=" text-white text-2xl " >
                    nome:
                    <input type="text" className=" text-black rounded-xl p-[1vh] " value={Nome} onChange={e => setNome(e.target.value)} />
                </label>

                <label className=" text-white text-2xl " >
                    senha:
                    <input type="password" className=" text-black rounded-xl p-[1vh] " value={Senha} onChange={e => setSenha(e.target.value)} />
                </label>

                <button className=" text-black rounded-xl p-[1vh] text-3xl bg-white " type="submit" >Enviar</button>

            </form>

            {mensagem && <p className=" text-white " >{mensagem}</p>}

        </div>
    )

}

export default Formulario