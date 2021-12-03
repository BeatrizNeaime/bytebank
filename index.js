import { Cliente } from "../Bytebank/Contas/Cliente.js";
import { ContaCorrente } from "../Bytebank/Contas/ContaCorrente.js";
import { ContaPoupanca } from "../Bytebank/Contas/ContaPoupanca.js";

const cliente1 = new Cliente("Bea", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const cc1 = new ContaCorrente(cliente2, 270, 1001);
const pp1 = new ContaPoupanca(cliente1, "0145", 20);

cc1.exibeConta();
cc1.depositar(100);
cc1.exibeConta();
cc1.transferir(20, pp1);
cc1.exibeConta();
pp1.exibeConta();
