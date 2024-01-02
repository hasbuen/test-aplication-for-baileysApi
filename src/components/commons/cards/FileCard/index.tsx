import { useState } from 'react';
import { Token, Telefone, Arquivo, Enviar } from '@/components/UI';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FileFormController } from '@/utils';
import { EMensagem, ERotulos } from '@/enums';

/**
 * Componente que representa um formulário para envio de arquivo.
 * @component
 */
function FileCard() {
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

  // Estado para verificar se o arquivo foi validado
  const [arquivoValidado, setRespostaArquivo] = useState<boolean>(false);
  const [arquivoPronto, setArquivo] = useState<File | null>(null);

  // Função chamada quando o arquivo é alterado
  const manipulandoArquivoAlterado = (aprovaArquivo: boolean, arquivo: File | null) => {
    setRespostaArquivo(aprovaArquivo);
    setArquivo(arquivo);
  };

  // Função para enviar o formulário
  const enviarFormulario = async () => {
    // Chama a função de controle do formulário com os dados atuais
    const resultado = await FileFormController(
      tokenValidado,
      tokenPronto,
      telefoneValidado,
      telefonePronto,
      arquivoValidado,
      arquivoPronto
    );

    // Exibe notificações com base no resultado
    if (typeof resultado === 'string') {
      switch (resultado) {
        case EMensagem.SUCESSO_ENVIO_ARQUIVO.toString():
          toast.success(resultado);
          break;

        case EMensagem.FALHA_ENVIO_ARQUIVO.toString():
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
          {/* Componente para seleção de arquivo */}
          <Arquivo quandoArquivoAlerar={manipulandoArquivoAlterado} />
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

export default FileCard;