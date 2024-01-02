// useTelefoneValidation.ts

import { useState } from 'react';
import validator from 'validator';

/**
 * Hook personalizado para validar um número de telefone.
 *
 * Este hook fornece funcionalidades para validar um número de telefone usando a biblioteca `validator`.
 *
 * @function
 * @returns {Object} Um objeto contendo o estado de aprovação do número de telefone e a função para validar o número.
 * @property {boolean} aprovaTelefone - Indica se o número de telefone é aprovado de acordo com os critérios de validação.
 * @property {function} validaTelefone - Função para validar o número de telefone usando a biblioteca `validator`.
 */
const useValidaTelefone = () => {
  /**
   * Estado para indicar se o número de telefone é aprovado.
   * @type {boolean}
   */
  const [aprovaTelefone, setResposta] = useState(false);

  /**
   * Função para validar o número de telefone usando a biblioteca `validator`.
   *
   * @param {string} telefone - O número de telefone a ser validado.
   */
  const validaTelefone = (telefone: string) => {
    // Utiliza a função `isMobilePhone` da biblioteca `validator` para validar o número de telefone
    const resultado = validator.isMobilePhone(telefone, 'any', { strictMode: false });
    
    // Atualiza o estado indicando se o número de telefone é aprovado
    setResposta(resultado);
  };

  // Retorna um objeto contendo o estado de aprovação do número de telefone e a função para validar o número
  return { aprovaTelefone, validaTelefone };
};

export default useValidaTelefone;