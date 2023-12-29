import { useState } from 'react';
import { Token, Telefone, Mensagem, Botao } from '@/components/UI';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TextFormController } from '@/utils';

function TextForm() {
    const [tokenValidado, setRespostaToken] = useState<boolean>(false);
    const [tokenPronto, setToken] = useState<string>('');

    const manipulandoTokenAlterado = (aprovaToken: boolean, token: string) => {
        setRespostaToken(aprovaToken);
        setToken(token);
    };

    const [telefoneValidado, setRespostaTelefone] = useState<boolean>(false);
    const [telefonePronto, setTelefone] = useState<string>('');

    const manipulandoTelefoneAlterado = (aprovaTelefone: boolean, telefone: string) => {
        setRespostaTelefone(aprovaTelefone);
        setTelefone(telefone);
    };

    const [mensagemValidada, setRespostaMensagem] = useState<boolean>(false);
    const [mensagemPronta, setMensagem] = useState<string>('');

    const manipulandoMensagemAlterada = (aprovaMensagem: boolean, mensagem: string) => {
        setRespostaMensagem(aprovaMensagem);
        setMensagem(mensagem);
    };

    const enviarFormulario = async () => {
        const resultado = await TextFormController(
            tokenValidado,
            tokenPronto,
            telefoneValidado,
            telefonePronto,
            mensagemValidada,
            mensagemPronta
        );

        if (typeof resultado === 'string')
            toast.warning(resultado);

    };

    return (
        <Container maxWidth="sm">
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <Box gridColumn="span 12">
                    <h1>Teste de Envio</h1>
                </Box>
                <Box gridColumn="span 6">

                    <Token quandoTokenAlterar={manipulandoTokenAlterado} />

                </Box>
                <Box gridColumn="span 6">

                    <Telefone quandoTelefoneAlterar={manipulandoTelefoneAlterado} />

                </Box>
                <Box gridColumn="span 12">

                    <Mensagem quandoMensagemAlerar={manipulandoMensagemAlterada} />

                </Box>
                <Box gridColumn="span 12" textAlign="right">

                    <Botao onClick={enviarFormulario} />

                </Box>
            </Box>

            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </Container>
    );
}

export default TextForm;
