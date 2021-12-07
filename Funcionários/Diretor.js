/*---------- início import ---------*/
import { Funcionario } from "./Funcionario.js";
/*--------- fim import ----------*/

export class Diretor extends Funcionario{
    constructor(nome, cpf, salario){
        super(nome, cpf, salario, "Diretor");
    }
}