//components/menus/Conexao/index.tsx
import { Enviar, Token } from '@/components/UI';
import { EMensagem, ERotulos } from '@/enums';
import { ConfigMenuController } from '@/utils';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Container, Box } from '@mui/material';

import { toast } from 'react-toastify';
import { useState } from 'react';


const ConexaoModal: React.FC<ConexaoModalDTO> = ({ abrirModal, fecharModal }) => {
  const fechandoModal = () => {
    fecharModal();
  };

  const [tokenValidado, setRespostaToken] = useState<boolean>(false);
  const [tokenPronto, setToken] = useState<string>('');


  const manipulandoTokenAlterado = (aprovaToken: boolean, token: string) => {
    setRespostaToken(aprovaToken);
    setToken(token);
  };


  const enviarFormulario = async () => {
    const resultado = await ConfigMenuController(
      tokenValidado,
      tokenPronto
    );

    if (typeof resultado === 'string')
      switch (resultado) {
        case EMensagem.SUCESSO_GENERICO.toString():
          toast.success(resultado);
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
            <DialogTitle>Conexão</DialogTitle>
          </Box>

          <Box gridColumn="span 12">
            <DialogContent>



              <Token quandoTokenAlterar={manipulandoTokenAlterado} />




              <Enviar onClick={enviarFormulario} label={ERotulos.BOTAO_CADASTRAR}/>



            </DialogContent>
          </Box>


          <Box gridColumn="span 12" textAlign="right">

            <DialogActions>
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