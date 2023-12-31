import Factory from "@/services/factory";
import { EMensagem } from "@/enums";

const ConfigMenuController = async (
  tokenValidado: boolean,
  token: string,
  
) => {
  if (!tokenValidado)
    return EMensagem.TOKEN_INVALIDO;

  try {
    const factoryInstance = new Factory();
    const tokenArmazenado = await factoryInstance.obterTokenArmazenado();

    if (token !== tokenArmazenado) {
      return (await factoryInstance.armazenarToken(token)) ? EMensagem.SUCESSO_GENERICO : EMensagem.FALHA_GENERICA;
    }

    if(token === null || token === '')
      return EMensagem.TOKEN_INVALIDO;

    return EMensagem.TOKEN_ARMAZENADO;
  } catch (error) {
    return EMensagem.FALHA_GENERICA;
  }
};

export default ConfigMenuController;