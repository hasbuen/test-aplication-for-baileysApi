
/* logica de envio por fetch ou post será feito por aqui */

class factory {

    constructor(){ }

    function sendText(msg: string): void {

        return console.log(`texto enviado: ${msg}`)

    }; 

    function sendFile(file: any): void {

        return console.log(`arquivo enviado`)
        
    }; 
}

export default factory;