/*---------- início import ---------*/
import { Conta } from "./Conta.js";
/*--------- fim import ----------*/

export class ContaCorrente extends Conta {
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