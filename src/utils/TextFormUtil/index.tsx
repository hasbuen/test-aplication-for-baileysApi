import Factory from "@/services/factory";
import { EMensagem } from "@/enums";

/**
 * Função de controle para envio de mensagem de texto.
 *
 * Esta função verifica a validação do token, telefone e mensagem,
 * e tenta enviar a mensagem utilizando a instância da fábrica.
 *
 * @async
 * @function
 * @param {boolean} tokenValidado - Indica se o token foi validado.
 * @param {string} token - O token a ser utilizado no envio da mensagem.
 * @param {boolean} telefoneValidado - Indica se o telefone foi validado.
 * @param {string} telefone - O número de telefone para o envio da mensagem.
 * @param {boolean} mensagemValidada - Indica se a mensagem foi validada.
 * @param {string} mensagem - O texto da mensagem a ser enviada.
 * @returns {Promise<EMensagem>} Uma Promise contendo uma mensagem do tipo EMensagem indicando o resultado do envio.
 */
export const TextFormController = async (
  tokenValidado: boolean,
  token: string,
  telefoneValidado: boolean,
  telefone: string,
  mensagemValidada: boolean,
  mensagem: string
): Promise<EMensagem> => {
  // Verifica se o token foi validado
  if (!tokenValidado) 
    return EMensagem.TOKEN_INVALIDO;
  
  // Verifica se o telefone foi validado
  if (!telefoneValidado) 
    return EMensagem.TELEFONE_INVALIDO;

  // Verifica se a mensagem foi validada
  if (!mensagemValidada)
    return EMensagem.MENSAGEM_INVALIDA;

  try {
    // Instância da fábrica
    const factoryInstance = new Factory();

    // Verifica se o token está vazio ou nulo
    if(token === null || token === '')
      return EMensagem.TOKEN_INVALIDO;

    // Tenta enviar a mensagem utilizando a instância da fábrica
    const confereEnvio = await factoryInstance.enviarMensagem(token, telefone, mensagem);

    // Retorna a mensagem de sucesso ou falha com base no resultado do envio
    return (confereEnvio) ? EMensagem.SUCESSO_ENVIO_MENSAGEM : EMensagem.FALHA_ENVIO_MENSAGEM;
  
  } catch (error) {
    // Retorna a mensagem de falha em caso de erro durante o envio
    return EMensagem.FALHA_ENVIO_MENSAGEM;
  }
};

export default TextFormController;