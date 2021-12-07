export class Funcionario{
    constructor(nome, cpf, salario, cargo){
        this.nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._cargo = cargo;
        this._senha;
    }

    get senha(){
        return this._senha;
    }

    cadastrarSenha(novaSenha){
        this._senha = novaSenha;
    }
}