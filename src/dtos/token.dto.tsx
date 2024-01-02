/**
 * Interface que define o formato de um objeto TokenDTO.
 * @interface
 */
export default interface TokenDTO {
  /**
   * Função que será chamada quando o token for alterado.
   *
   * @param {boolean} aprovaToken - Indica se o token foi aprovado de acordo com os critérios de validação.
   * @param {string} token - O token que foi inserido ou modificado.
   */
  quandoTokenAlterar: (aprovaToken: boolean, token: string) => void;
}