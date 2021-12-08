export class SistemaAutenticacao{
    static login(logando, senha){
        if(SistemaAutenticacao.ehAutenticavel(logando)){
            return logando.autenticar(senha);
        }
        return false;
    }

    ehAutenticavel(logando){
        return "autenticar" in logando && logando.autenticar instanceof Function;
    }

}