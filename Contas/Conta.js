import { Cliente } from "./Cliente.js";

export class Conta{
    constructor(cliente, ag, tipoConta, saldo){
        this._cliente = cliente;
        this._saldo = saldo;
        this._agencia = ag;
        this._tipoConta = tipoConta;
        if(this.constructor == Conta){
            throw new Error(`Não é possível criar uma conta tipo Conta`);
        }
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

     get cliente(){
         return this._cliente;
     }

    get saldo(){
        return this._saldo;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        } 
        this._saldo += valor;   
    }

    transferir(valor, conta){
        this.sacar(valor);
        conta.depositar(valor);
        console.log(`> Extrato \n Titular: ${this.cliente.nome} \n Destino: ${conta.cliente.nome} \n Valor: R$${valor} \n Saldo atual: R${this.saldo}`);
        console.log(`****************************`);
    }

    exibeConta(){
        console.log(`Tipo de conta: ${this._tipoConta}`);
        console.log(`Titular: ${this.cliente.nome}`);
        console.log(`Agência: ${this._agencia}  \nSaldo: R$${this.saldo}`);
        console.log(`****************************`);
    }

}