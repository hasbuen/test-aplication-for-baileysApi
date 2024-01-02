/**
 * Interface que define o formato de um objeto MensagemDTO.
 * @interface
 */
export default interface MensagemDTO {
  /**
   * Função que será chamada quando a mensagem for alterada.
   *
   * @param {boolean} aprovaMensagem - Indica se a mensagem foi aprovada de acordo com os critérios de validação.
   * @param {string} mensagem - A mensagem de texto que foi inserida ou modificada.
   */
  quandoMensagemAlerar: (aprovaMensagem: boolean, mensagem: string) => void;
}
