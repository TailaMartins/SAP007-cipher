const cipher = {
    encode(offset, string) {
        if(typeof offset != 'number' || (offset != 0 && offset % 1 != 0)){
            throw new TypeError();
        }
        if (typeof string != 'string') {
            throw new TypeError();

        }

        let mensagemSecreta = "";
        for (let i = 0; i < string.length; i++) {
            const element = string[i];
            let codDaletraaASC = element.charCodeAt(0);
            let retornoEncode = ((codDaletraaASC - 65 + offset) % 26 + 65);
            let novaLetra = String.fromCharCode(retornoEncode);
            mensagemSecreta = mensagemSecreta + novaLetra;
        }

        return mensagemSecreta;

    },
    decode(offset, string) {
        if(typeof offset != 'number' || (offset != 0 && offset % 1 != 0)){
            throw new TypeError();
        }
        if (typeof string != 'string') {
            throw new TypeError();

        }
        let mensagemSecreta = "";
        for (let i = 0; i < string.length; i++) {
            const element = string[i];
            let codDaletraaASC = element.charCodeAt(0);
            let retornoDecode = ((codDaletraaASC - 90 - offset) % 26 + 90);
            let novaLetra = String.fromCharCode(retornoDecode);
            mensagemSecreta = mensagemSecreta + novaLetra;
        }

        return mensagemSecreta;


    }

}
    

export default cipher;

// ((codDaletraaASC - codDa1letra + deslocamento) % tamanhodoAlfabeto + codDa1letra)


 
