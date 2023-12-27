// App.tsx
import { useState } from 'react';
import Telefone from '../../Telefone';
import Factory from '../../../services/factory';
import Button from '../../Button';
import TokenInput from '../../TokenInput';
import MsgInput from '../../MsgInput';

function TextCard() {
    const [isNumeroValido, setIsNumeroValido] = useState<boolean>(false);
    const [numeroTelefone, setNumeroTelefone] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    const handleValidChange = (isValid: boolean, numero: string) => {
        setIsNumeroValido(isValid);
        setNumeroTelefone(numero);
    };

    const handleTokenChange = (novoToken: string) => {
        setToken(novoToken);
    };

    const handleMensagemChange = (novaMensagem: string) => {
        setMensagem(novaMensagem);
    };

    const handleButtonClick = () => {
        if (!isNumeroValido) {
            console.log('Número de telefone inválido. Ação não realizada.');
            return;
        }

        if (!token) {
            console.log('Token não fornecido. Ação não realizada.');
            return;
        }

        if (!mensagem) {
            console.log('Mensagem de texto não fornecida. Ação não realizada.');
            return;
        }

        // Se todas as verificações passarem, realizar a ação
        const factoryInstance = new Factory();
        factoryInstance.sendText(numeroTelefone, mensagem, token);
    };

    return (
        <div className='card'>

            <div className='title'>

                <h1>Teste de envio</h1>

            </div>

            <div className='content'>

                <div className='row'>

                    <div className='column'>

                        <TokenInput onTokenChange={handleTokenChange} />

                    </div>

                    <div className='column'>

                        <Telefone onValidChange={handleValidChange} />

                    </div>

                </div>

                <div className='column'>

                    <MsgInput onMensagemChange={handleMensagemChange} />

                </div>

            </div>


            <div className='footer'>

                <Button onClick={handleButtonClick} />

            </div>

        </div>
    );
}

export default TextCard;
