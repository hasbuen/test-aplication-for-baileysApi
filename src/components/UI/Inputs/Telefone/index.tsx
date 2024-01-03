/**
 * Componente que representa um campo de entrada de telefone.
 * @component
 * @name Telefone
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.quandoTelefoneAlterar - Função chamada quando o telefone é alterado.
 */
import React, { useState } from 'react';
import useValidaTelefone from '@/hooks/useValidaTelefone';
import { TextField } from '@mui/material';
import TelefoneDTO from '@/dtos/telefone.dto';

/**
 * Componente funcional que representa um campo de entrada de telefone.
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.quandoTelefoneAlterar - Função chamada quando o telefone é alterado.
 * @returns {JSX.Element} - Elemento JSX representando o campo de entrada de telefone.
 */
const Telefone: React.FC<TelefoneDTO> = ({ quandoTelefoneAlterar }) => {
  const { aprovaTelefone, validaTelefone } = useValidaTelefone();
  const [telefone, setResposta] = useState('');

  /**
   * Manipula a mudança no campo de entrada de telefone.
   * @param {React.ChangeEvent<HTMLInputElement>} event - Evento de mudança.
   * @returns {void}
   */
  const manipular = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoTelefone = event.target.value;
    setResposta(novoTelefone);

    validaTelefone(novoTelefone);
    quandoTelefoneAlterar(aprovaTelefone, novoTelefone);
  };

  /**
   * Renderiza o campo de entrada de telefone.
   * @returns {JSX.Element} - Elemento JSX representando o campo de entrada de telefone.
   */
  return (
    <TextField
      label="Número *"
      id="outlined-basic"
      variant="outlined"
      type="text"
      className="input"
      value={telefone}
      onChange={manipular}
    />
  );
};

export default Telefone;