import type { Request, Response } from 'express';
import { UserService } from '../services/user.service.ts';

export async function userController(req: Request, res: Response) {

    const { Nome, Senha } = req.body;
    const userService = new UserService();

    if (!Nome || !Senha) {
        return res.status(400).json({ erro: 'Dados inválidos' });
    }

    try {

        const resultado = await userService.register({ Nome, Senha });

        return res.status(201).json(resultado); 

    } catch (error) {
        console.error("Erro no registro:", error);
        return res.status(500).json({ 
            erro: 'Falha ao salvar no banco de dados',
            detalhes: error 
        });
    }

}
