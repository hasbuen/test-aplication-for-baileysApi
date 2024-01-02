import { Enviar, Token } from '@/components/UI';
import { EMensagem, ERotulos } from '@/enums';
import { ConfigMenuController } from '@/utils';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Container, Box } from '@mui/material';

import { toast } from 'react-toastify';
import { useState } from 'react';
import ConexaoModalDTO from '@/dtos/conexao.dto';

/**
 * Componente que representa um modal para configuração de token padrão.
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {boolean} props.abrirModal - Indica se o modal deve ser exibido.
 * @param {function} props.fecharModal - Função para fechar o modal.
 */
const ConexaoModal: React.FC<ConexaoModalDTO> = ({ abrirModal, fecharModal }) => {
  // Função para fechar o modal
  const fechandoModal = () => {
    fecharModal();
  };

  // Estados para controle do token
  const [tokenValidado, setRespostaToken] = useState<boolean>(false);
  const [tokenPronto, setToken] = useState<string>('');

  // Função para manipular alterações no token
  const manipulandoTokenAlterado = (aprovaToken: boolean, token: string) => {
    setRespostaToken(aprovaToken);
    setToken(token);
  };

  // Função para enviar o formulário de configuração do token
  const enviarFormulario = async () => {
    const resultado = await ConfigMenuController(
      tokenValidado,
      tokenPronto
    );

    if (typeof resultado === 'string')
      switch (resultado) {
        case EMensagem.SUCESSO_GENERICO.toString():
          toast.success(resultado);
          // Recarrega a página após o sucesso
          window.location.reload();
          break;

        case EMensagem.FALHA_GENERICA.toString():
          toast.error(resultado);
          break;

        default:
          toast.warning(resultado);
          break;
      }
  };

  return (
    <Dialog open={abrirModal} onClose={fechandoModal}>
      <Container maxWidth="sm">
        <Box display="grid" gridTemplateColumns="1fr 1fr">
          <Box gridColumn="span 12">
            <DialogTitle>Token padrão</DialogTitle>
          </Box>

          <Box gridColumn="span 12">
            <DialogContent>
              {/* Componente Token para entrada do token */}
              <Token quandoTokenAlterar={manipulandoTokenAlterado} />

              {/* Componente Enviar para submissão do formulário */}
              <Enviar onClick={enviarFormulario} label={ERotulos.BOTAO_CONFIRMAR} />
            </DialogContent>
          </Box>

          <Box gridColumn="span 12" textAlign="right">
            <DialogActions>
              {/* Botão para fechar o modal */}
              <Button onClick={fechandoModal} color="primary">
                Fechar
              </Button>
            </DialogActions>
          </Box>
        </Box>
      </Container>
    </Dialog>
  );
};

export default ConexaoModal;