class Factory {
    constructor() {}

    async sendText(token: string, telefone: string, mensagem: string ): Promise<boolean> {
        const endpoint = import.meta.env.VITE_ENDPOINT;
        
        const url = new URL(endpoint);

        const body = {
            telefone,
            body: mensagem,
        };

        const headers = new Headers();
        headers.append('X_TOKEN', token);
        headers.append('Content-Type', 'application/json');

        const options: RequestInit = {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        };

        try {
            await fetch(url.toString(), options);
            
            return true;
        } catch (error) {
            return false;
        }
    }

    async sendFile(number: string, token: string, file: any): Promise<boolean> {
        const endpoint = import.meta.env.VITE_ENDPOINT;

        const url = new URL(endpoint);

        const formData = new FormData();
        formData.append('number', number);
        formData.append('medias', file);

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
            await response.json();

            return true;
        } catch (error) {
            return false;
        }
    }
}

export default Factory;
