export class Funcionario{
    constructor(nome, cpf, salario, cargo){
        this.nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._cargo = cargo;
        this._senha;
    }

    autenticar(senha){
        if(this._senha == senha){
            console.log(`${this.nome} logado com sucesso!`);
        }
    }

    cadastrarSenha(novaSenha){
        this._senha = novaSenha;
    }
}