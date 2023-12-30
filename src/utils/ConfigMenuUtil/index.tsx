import Factory from "@/services/factory";
import { EMensagem } from "@/enums";

/**
 * Controlador para o formulário de arquivo.
 *
 * Este controlador realiza as validações necessárias e envia o arquivo para o serviço de fábrica.
 *
 * @param {boolean} tokenValidado - Indica se o token foi validado com sucesso.
 * @param {string} token - O token a ser validado e usado no envio do arquivo.

 * @returns {EMensagem} - Uma mensagem indicando o resultado do envio do arquivo.
 *
 * @throws {EMensagem} - Lança uma mensagem de falha caso ocorra um erro no envio do arquivo.
 */
const ConfigMenuController = async (
  tokenValidado: boolean,
  token: string,
  
) => {
  if (!tokenValidado)
    return EMensagem.TOKEN_INVALIDO;


  try {
    const factoryInstance = new Factory();
    const confereEnvio = await factoryInstance.armazenarToken(token);

    return (confereEnvio) ? EMensagem.SUCESSO_GENERICO : EMensagem.FALHA_GENERICA;

  } catch (error) {
    return EMensagem.FALHA_GENERICA;
  }
};

export default ConfigMenuController;