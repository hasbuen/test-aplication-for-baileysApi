import TokenDTO from "@/dtos/token.dto";
import useValidaToken from "@/hooks/useValidaToken";
import Factory from "@/services/factory";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const Token: React.FC<TokenDTO> = ({ quandoTokenAlterar }) => {
  const { aprovaToken, setToken } = useValidaToken();
  const [novoToken, setNovoToken] = useState(new Factory().obterTokenArmazenado());

  const manipular = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoToken = event.target.value;
    setNovoToken(novoToken);
  };

  useEffect(() => {
    if (novoToken) {
      setToken(novoToken);
      quandoTokenAlterar(aprovaToken, novoToken);
    }

    if (novoToken === null || novoToken === '') {

      const capturaTokenNoStorage = new Factory().obterTokenArmazenado();

      if (capturaTokenNoStorage === null || capturaTokenNoStorage === '') {
        setNovoToken('')
      } else {
        setNovoToken(capturaTokenNoStorage);
      }

    } else {
      setNovoToken(novoToken);
    }
  }, [aprovaToken, novoToken, quandoTokenAlterar, setToken]);


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
