/*---------- início import ---------*/
import { Funcionario } from "./Funcionario.js";
/*--------- fim import ----------*/

export class Gerente extends Funcionario{
    constructor(nome, cpf, salario){
        super(nome, cpf, salario, "Gerente");
    }
}