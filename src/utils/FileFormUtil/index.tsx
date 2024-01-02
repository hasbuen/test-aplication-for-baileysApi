import Factory from "@/services/factory";
import { EMensagem } from "@/enums";

/**
 * Controlador de formulário para o envio de arquivo.
 *
 * Esta função manipula a lógica de validação e envio de arquivo através de um formulário.
 *
 * @async
 * @function
 * @param {boolean} tokenValidado - Indica se o token está validado.
 * @param {string} token - A string do token.
 * @param {boolean} telefoneValidado - Indica se o telefone está validado.
 * @param {string} telefone - A string do telefone.
 * @param {boolean} arquivoValidado - Indica se o arquivo está validado.
 * @param {File | null} arquivo - O arquivo a ser enviado, pode ser nulo.
 * @returns {Promise<EMensagem>} Um enum de mensagem indicando o resultado do envio do arquivo.
 * @throws {EMensagem} Retorna uma mensagem de falha se ocorrer um erro durante o envio do arquivo.
 * @see {@link Factory} Para mais detalhes sobre a classe Factory utilizada.
 */
export const FileFormController = async (
  tokenValidado: boolean,
  token: string,
  telefoneValidado: boolean,
  telefone: string,
  arquivoValidado: boolean,
  arquivo: File | null
): Promise<EMensagem> => {
  // Verifica se o token não está validado
  if (!tokenValidado) {
    return EMensagem.TOKEN_INVALIDO;
  }

  // Verifica se o telefone não está validado
  if (!telefoneValidado) {
    return EMensagem.TELEFONE_INVALIDO;
  }

  // Verifica se o arquivo não está validado
  if (!arquivoValidado) {
    return EMensagem.ARQUIVO_INVALIDO;
  }

  try {
    // Cria uma instância da classe Factory
    const factoryInstance = new Factory();

    // Verifica se o token é nulo ou uma string vazia
    if (token === null || token === "") {
      return EMensagem.TOKEN_INVALIDO;
    }

    // Chama o método para enviar o arquivo e obtém o resultado
    const confereEnvio = await factoryInstance.enviarArquivo(token, telefone, arquivo);

    // Retorna uma mensagem de sucesso ou falha com base no resultado do envio
    return confereEnvio ? EMensagem.SUCESSO_ENVIO_ARQUIVO : EMensagem.FALHA_ENVIO_ARQUIVO;
  } catch (error) {
    // Retorna uma mensagem de falha em caso de erro durante o envio do arquivo
    return EMensagem.FALHA_ENVIO_ARQUIVO;
  }
};

export default FileFormController;