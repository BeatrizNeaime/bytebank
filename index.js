/*---------- início import ---------*/
import { Cliente } from "../Bytebank/Contas/Cliente.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
/*--------- fim import ----------*/


/*--------- início variáveis ----------*/
const diretor = new Diretor("Bia", 11122233, 1000);
const gerente = new Gerente("Pipe", 66655544499, 990);
const cliente = new Cliente("Ale", 55544488822, "chucrute");
/*--------- fim variáveis ----------*/

diretor.cadastrarSenha("senha1");
gerente.cadastrarSenha("senha2");

SistemaAutenticacao.login(diretor, "senha1");



