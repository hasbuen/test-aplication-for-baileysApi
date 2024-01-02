/**
 * Interface que define o formato de um objeto ConexaoModalDTO.
 * @interface
 */
interface ConexaoModalDTO {
  /**
   * Indica se o modal deve ser aberto.
   * @type {boolean}
   */
  abrirModal: boolean;

  /**
   * Função que será chamada para fechar o modal.
   * @function
   * @returns {void}
   */
  fecharModal: () => void;
}

export default ConexaoModalDTO;