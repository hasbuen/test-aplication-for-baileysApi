class Factory {
    constructor() {}

    async sendText(number: string, msg: string, token: string): Promise<void> {
        const endpoint = import.meta.env.VITE_ENDPOINT;
        
        const url = new URL(endpoint);

        // Configurar parâmetros do corpo da requisição
        const body = {
            number,
            body: msg,
        };

        // Configurar cabeçalhos da requisição
        const headers = new Headers();
        headers.append('X_TOKEN', token);
        headers.append('Content-Type', 'application/json');

        // Configurar opções da requisição
        const options: RequestInit = {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        };

        try {
            const response = await fetch(url.toString(), options);
            const responseData = await response.json();
            
            // Lógica para tratar a resposta da API
            console.log('Resposta da API:', responseData);
        } catch (error) {
            // Lógica para tratar erros
            console.error('Erro ao enviar mensagem de texto:', error);
        }
    }

    async sendFile(number: string, file: any, token: string): Promise<void> {
        const endpoint = import.meta.env.VITE_ENDPOINT;

        const url = new URL(endpoint);

        // Configurar parâmetros do corpo da requisição
        const formData = new FormData();
        formData.append('number', number);
        formData.append('medias', file);

        // Configurar cabeçalhos da requisição
        const headers = new Headers();
        headers.append('X_TOKEN', token);
        headers.append('Content-Type', 'multipart/form-data');

        // Configurar opções da requisição
        const options: RequestInit = {
            method: 'POST',
            headers,
            body: formData,
        };

        try {
            const response = await fetch(url.toString(), options);
            const responseData = await response.json();
            
            // Lógica para tratar a resposta da API
            console.log('Resposta da API:', responseData);
        } catch (error) {
            // Lógica para tratar erros
            console.error('Erro ao enviar arquivo:', error);
        }
    }
}

export default Factory;
