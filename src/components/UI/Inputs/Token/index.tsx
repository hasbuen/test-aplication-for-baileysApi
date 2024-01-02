/**
 * Componente que representa um campo de entrada de token.
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.quandoTokenAlterar - Função chamada quando o token é alterado.
 */
import TokenDTO from "@/dtos/token.dto";
import useValidaToken from "@/hooks/useValidaToken";
import Factory from "@/services/factory";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

/**
 * Componente funcional que representa um campo de entrada de token.
 * @param {Object} props - Propriedades do componente.
 * @param {function} props.quandoTokenAlterar - Função chamada quando o token é alterado.
 * @returns {JSX.Element} - Elemento JSX representando o campo de entrada de token.
 */
const Token: React.FC<TokenDTO> = ({ quandoTokenAlterar }) => {
  const { aprovaToken, setToken } = useValidaToken();
  const [novoToken, setNovoToken] = useState(new Factory().obterTokenArmazenado());

  /**
   * Manipula a mudança no campo de entrada de token.
   * @param {React.ChangeEvent<HTMLInputElement>} event - Evento de mudança.
   * @returns {void}
   */
  const manipular = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoToken = event.target.value;
    setNovoToken(novoToken);
  };

  useEffect(() => {
    if (novoToken) {
      setToken(novoToken);
      quandoTokenAlterar(aprovaToken, novoToken);
    }

    if (novoToken === null || novoToken.trim().length === 0) {

      if (new Factory().obterTokenArmazenado().trim().length === 0) 
        setNovoToken('')
    
    } else {
      setNovoToken(novoToken);
    }
  }, [aprovaToken, novoToken, quandoTokenAlterar, setToken]);

  /**
   * Renderiza o campo de entrada de token.
   * @returns {JSX.Element} - Elemento JSX representando o campo de entrada de token.
   */
  return (
    <TextField
      label="Token cadastrado *"
      id="outlined-basic"
      variant="outlined"
      type="text"
      className="input"
      value={novoToken}
      onChange={manipular}
    />
  );
};

export default Token;