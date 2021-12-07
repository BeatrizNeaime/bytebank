/*---------- início import ---------*/
import { Conta } from "./Conta.js";
/*--------- fim import ----------*/

export class ContaPoupanca extends Conta{
    constructor(cliente, agencia, saldoInicial){
        super(cliente,agencia, "Conta Poupança", saldoInicial);
    }

    transferir(valor, conta){
        super.transferir(valor, conta);
    }
}