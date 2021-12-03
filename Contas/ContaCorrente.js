import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    _saldo = 0;

    constructor(cliente, agencia) {
        super(cliente, agencia, "Conta corrente");
    }

    sacar(valor){
        super.sacar(valor);
    }

    transferir(valor, conta){
        super.transferir(valor, conta);
    }

}