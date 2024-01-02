/**
 * Interface que define o formato de um objeto ArquivoDTO.
 * @interface
 */
export default interface ArquivoDTO {
  /**
   * Função que será chamada quando o arquivo for alterado.
   *
   * @param {boolean} aprovaArquivo - Indica se o arquivo foi aprovado de acordo com os critérios de validação.
   * @param {File | null} arquivo - O arquivo que foi selecionado ou `null` se nenhum arquivo foi selecionado.
   */
  quandoArquivoAlerar: (aprovaArquivo: boolean, arquivo: File | null) => void;
}