import { db } from '../../BD/db.ts';

interface RegisterUserDTO {
  Nome: string;
  Senha: string;
}

export class UserService {

  async register ({ Nome, Senha }: RegisterUserDTO): Promise<{ message: string; id?: number }> {

    return new Promise ((resolve, reject) => {
    
      db.run(
        'INSERT INTO usuarios (nome, senha) VALUES (?, ?)',
        [Nome, Senha],
        function (err) {
          if (err) {
            reject({ message: 'Erro ao cadastrar usuário no banco de dados', error: err });
          } else {
            resolve({ message: 'Usuário cadastrado com sucesso!', id: this.lastID });
          }
        }
      );

    });

  }

}