import { useState } from 'react';

/**
 * Hook personalizado para validar uma mensagem de texto.
 *
 * Este hook fornece funcionalidades para validar uma mensagem de texto com base em critérios específicos,
 * como o comprimento máximo permitido.
 *
 * @function
 * @returns {Object} Um objeto contendo o estado de aprovação da mensagem e a função para validar a mensagem.
 * @property {boolean} aprovaMensagem - Indica se a mensagem é aprovada de acordo com os critérios de validação.
 * @property {function} validaMensagem - Função para validar a mensagem de texto com base no comprimento máximo permitido.
 */
const useValidaMensagem = () => {
  /**
   * Estado para indicar se a mensagem é aprovada.
   * @type {boolean}
   */
  const [aprovaMensagem, setResposta] = useState(false);

  /**
   * Função para validar a mensagem de texto com base no comprimento máximo permitido.
   *
   * @param {string} mensagem - A mensagem de texto a ser validada.
   */
  const validaMensagem = (mensagem: string) => {
    // Define um limite de comprimento para a mensagem (256 caracteres neste exemplo)
    const limiteComprimento = 256;

    // Atualiza o estado indicando se a mensagem é aprovada com base no comprimento
    setResposta(mensagem.length > limiteComprimento ? false : true);
  };

  // Retorna um objeto contendo o estado de aprovação da mensagem e a função para validar a mensagem
  return { aprovaMensagem, validaMensagem };
};

export default useValidaMensagem;