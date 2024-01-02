/**
 * Componente que representa um campo de entrada de mensagem.
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.quandoMensagemAlerar - Função chamada quando a mensagem é alterada.
 */
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import useValidaMensagem from '@/hooks/useValidaMensagem.tsx';
import MensagemDTO from '@/dtos/mensagem.dto';

/**
 * Componente funcional que representa um campo de entrada de mensagem.
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.quandoMensagemAlerar - Função chamada quando a mensagem é alterada.
 * @returns {JSX.Element} - Elemento JSX representando o campo de entrada de mensagem.
 */
const Mensagem: React.FC<MensagemDTO> = ({ quandoMensagemAlerar }) => {
  const [mensagem, setMensagem] = useState('');
  const { aprovaMensagem, validaMensagem } = useValidaMensagem();

  /**
   * Manipula a mudança no campo de entrada de mensagem.
   * @param {React.ChangeEvent<HTMLInputElement>} event - Evento de mudança.
   * @returns {void}
   */
  const manipular = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novaMensagem = event.target.value;

    setMensagem(novaMensagem);

    validaMensagem(novaMensagem);
    quandoMensagemAlerar(aprovaMensagem, novaMensagem);
  };

  /**
   * Renderiza o campo de entrada de mensagem.
   * @returns {JSX.Element} - Elemento JSX representando o campo de entrada de mensagem.
   */
  return (
    <TextField
      label="Mensagem *"
      id="outlined-basic"
      variant="outlined"
      type="text"
      className="input"
      value={mensagem}
      onChange={manipular}
    />
  );
};

export default Mensagem;