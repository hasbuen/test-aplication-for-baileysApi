import Factory from "@/services/factory";
import { EMensagem } from "@/enums";

/**
 * Controlador para o formulário de arquivo.
 *
 * Este controlador realiza as validações necessárias e envia o arquivo para o serviço de fábrica.
 *
 * @param {boolean} tokenValidado - Indica se o token foi validado com sucesso.
 * @param {string} token - O token a ser validado e usado no envio do arquivo.
 * @param {boolean} telefoneValidado - Indica se o número de telefone foi validado com sucesso.
 * @param {string} telefone - O número de telefone a ser validado e usado no envio do arquivo.
 * @param {boolean} arquivoValidado - Indica se o arquivo foi validado com sucesso.
 * @param {File | null} arquivo - O arquivo a ser enviado. Pode ser nulo se não houver arquivo.
 * 
 * @returns {EMensagem} - Uma mensagem indicando o resultado do envio do arquivo.
 *
 * @throws {EMensagem} - Lança uma mensagem de falha caso ocorra um erro no envio do arquivo.
 */
const FileFormController = async (
  tokenValidado: boolean,
  token: string,

  telefoneValidado: boolean,
  telefone: string,

  arquivoValidado: boolean,
  arquivo: File | null
  
) => {
  if (!tokenValidado)
    return EMensagem.TOKEN_INVALIDO;

  if (!telefoneValidado)
    return EMensagem.TELEFONE_INVALIDO;

  if (!arquivoValidado) 
    return  EMensagem.ARQUIVO_INVALIDO;

  try {
    const factoryInstance = new Factory();
    const confereEnvio = await factoryInstance.enviarArquivo(token, telefone, arquivo);

    return (confereEnvio) ? EMensagem.SUCESSO_ENVIO_ARQUIVO : EMensagem.FALHA_ENVIO_ARQUIVO;

  } catch (error) {
    return EMensagem.FALHA_ENVIO_ARQUIVO;
  }
};

export default FileFormController;