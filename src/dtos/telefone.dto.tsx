/**
 * Interface que define o formato de um objeto TelefoneDTO.
 * @interface
 */
export default interface TelefoneDTO {
    /**
     * Função que será chamada quando o número de telefone for alterado.
     *
     * @param {boolean} aprovaTelefone - Indica se o número de telefone foi aprovado de acordo com os critérios de validação.
     * @param {string} telefone - O número de telefone que foi inserido ou modificado.
     */
    quandoTelefoneAlterar: (aprovaTelefone: boolean, telefone: string) => void;
  }  