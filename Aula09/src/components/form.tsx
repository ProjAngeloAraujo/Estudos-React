"use client"
import { useState } from "react"

export function AuthForm() {

    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    const dados = {
        Nome,
        Email,
        Senha
    }

    async function Cadastrar(e: React.FormEvent<HTMLFormElement>)  {

        e.preventDefault();

        try {
            const response = await fetch ("hhtp://localhost:3000/Cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            });

            const result = await response.json();

            if(result){
                console.log("Cadastro realizado com sucesso!");
                console.log(result)
            } else {
                console.log("Erro ao obeter resposta!")
            }

        } catch {
            console.log("Erro ao fazer o cadastro");
        }

    }

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Criar Conta</h2>
        <p className="text-gray-600">Preencha seus dados para começar</p>
      </div>

      <form onSubmit={Cadastrar} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nome Completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="João Silva"
            value={Nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="joao@exemplo.com"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={Senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
