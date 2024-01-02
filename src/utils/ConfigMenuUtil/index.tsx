import Factory from "@/services/factory";
import { EMensagem } from "@/enums";

/**
 * Função controladora para lidar com a lógica do menu de configuração.
 *
 * @param tokenValidado - Um booleano indicando se o token está validado.
 * @param token - A string do token.
 * @returns Um enum de mensagem indicando o resultado da operação do menu de configuração.
 */
const ConfigMenuController = async (
  tokenValidado: boolean,
  token: string,
): Promise<EMensagem> => {
  // Verifica se o token não está validado
  if (!tokenValidado) {
    return EMensagem.TOKEN_INVALIDO;
  }

  try {
    // Cria uma instância da classe Factory
    const factoryInstance = new Factory();

    // Recupera o token armazenado da instância da Factory
    const tokenArmazenado = await factoryInstance.obterTokenArmazenado();

    // Verifica se o token fornecido é diferente do token armazenado
    if (token !== tokenArmazenado) {
      // Armazena o novo token e retorna uma mensagem de sucesso ou falha
      return (await factoryInstance.armazenarToken(token))
        ? EMensagem.SUCESSO_GENERICO
        : EMensagem.FALHA_GENERICA;
    }

    // Verifica se o token é nulo ou uma string vazia
    if (token === null || token === "") {
      return EMensagem.TOKEN_INVALIDO;
    }

    // Retorna uma mensagem de sucesso indicando que o token está armazenado
    return EMensagem.TOKEN_ARMAZENADO;
  } catch (error) {
    // Retorna uma mensagem genérica de falha em caso de erro
    return EMensagem.FALHA_GENERICA;
  }
};

export default ConfigMenuController;
