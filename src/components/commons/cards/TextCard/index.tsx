import { useState } from 'react';
import { Token, Telefone, Mensagem, Enviar } from '@/components/UI';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextFormController } from '@/utils';
import { EMensagem, ERotulos } from '@/enums';

/**
 * Componente que representa um formulário para envio de mensagem de texto.
 * @component
 * @name TextCard
 */
function TextCard() {
  // Estado para verificar se o token foi validado
  const [tokenValidado, setRespostaToken] = useState<boolean>(false);
  const [tokenPronto, setToken] = useState<string>('');

  // Função chamada quando o token é alterado
  const manipulandoTokenAlterado = (aprovaToken: boolean, token: string) => {
    setRespostaToken(aprovaToken);
    setToken(token);
  };

  // Estado para verificar se o telefone foi validado
  const [telefoneValidado, setRespostaTelefone] = useState<boolean>(false);
  const [telefonePronto, setTelefone] = useState<string>('');

  // Função chamada quando o telefone é alterado
  const manipulandoTelefoneAlterado = (aprovaTelefone: boolean, telefone: string) => {
    setRespostaTelefone(aprovaTelefone);
    setTelefone(telefone);
  };

  // Estado para verificar se a mensagem foi validada
  const [mensagemValidada, setRespostaMensagem] = useState<boolean>(false);
  const [mensagemPronta, setMensagem] = useState<string>('');

  // Função chamada quando a mensagem é alterada
  const manipulandoMensagemAlterada = (aprovaMensagem: boolean, mensagem: string) => {
    setRespostaMensagem(aprovaMensagem);
    setMensagem(mensagem);
  };

  // Função para enviar o formulário
  const enviarFormulario = async () => {
    // Chama a função de controle do formulário com os dados atuais
    const resultado = await TextFormController(
      tokenValidado,
      tokenPronto,
      telefoneValidado,
      telefonePronto,
      mensagemValidada,
      mensagemPronta
    );

    // Exibe notificações com base no resultado
    if (typeof resultado === 'string') {
      switch (resultado) {
        case EMensagem.SUCESSO_ENVIO_MENSAGEM.toString():
          toast.success(resultado);
          break;

        case EMensagem.FALHA_ENVIO_MENSAGEM.toString():
          toast.error(resultado);
          break;

        default:
          toast.warning(resultado);
          break;
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
        <Box gridColumn="span 12">
          <h1>Teste de Envio</h1>
        </Box>
        <Box gridColumn="span 6">
          {/* Componente para inserção do token */}
          <Token quandoTokenAlterar={manipulandoTokenAlterado} />
        </Box>
        <Box gridColumn="span 6">
          {/* Componente para inserção do telefone */}
          <Telefone quandoTelefoneAlterar={manipulandoTelefoneAlterado} />
        </Box>
        <Box gridColumn="span 12">
          {/* Componente para inserção da mensagem */}
          <Mensagem quandoMensagemAlerar={manipulandoMensagemAlterada} />
        </Box>
        <Box gridColumn="span 12" textAlign="right">
          {/* Botão para enviar o formulário */}
          <Enviar onClick={enviarFormulario} label={ERotulos.BOTAO_ENVIAR} />
        </Box>
      </Box>

      {/* Contêiner para exibição de notificações */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </Container>
  );
}

export default TextCard;