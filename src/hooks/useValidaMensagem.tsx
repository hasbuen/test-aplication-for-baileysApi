import { useState } from 'react';

const useValidaMensagem = () => {
  const [aprovaMensagem, setResposta] = useState(false);

  const validaMensagem = (mensagem: string) => {
    setResposta(mensagem.length > 256 ? false : true);
  };

  return { aprovaMensagem, validaMensagem };
};

export default useValidaMensagem;