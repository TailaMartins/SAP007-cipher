/*conts cipher é um objeto pois tem propriedades e definições*/
const cipher = {
    encode(offset, string) {
        /*encode é a função que recebe um offset e uma string*/
        if (typeof offset != 'number' || (offset != 0 && offset % 1 != 0)) {
            /*if é uma condição; tyeof é o tipo ; !=0 é um operador logico de negação */
            throw new TypeError();
            /*throw ele tipo joga um erro*/
        }
        if (typeof string != 'string') {
            throw new TypeError();
            /*é onde vai dar erro,()deixei vazio pois não me senti segura de escrever o erro*/
        }

        let mensagemSecreta = "";
        for (let i = 0; i < string.length; i++) {
            const quantidaDeletras = string[i];
            let codDaletraaASC = quantidaDeletras.charCodeAt(0);
            /*laço for que contem um contador e função* que vai verficar o que o usuario escrever e transformar em numeraçao ASC*/

            if (codDaletraaASC >= 32 && codDaletraaASC <= 48) {
                /*condição e as regras de intruções*/
                let retornoEncode = ((codDaletraaASC - 32 + offset) % 26 + 32);
                let novaLetra = String.fromCharCode(retornoEncode);
                mensagemSecreta = mensagemSecreta + novaLetra;

            } else if (codDaletraaASC >= 58 && codDaletraaASC <= 64) {
                let retornoEncode = ((codDaletraaASC - 58 + offset) % 26 + 58);
                let novaLetra = String.fromCharCode(retornoEncode);
                mensagemSecreta = mensagemSecreta + novaLetra;

            } else if (codDaletraaASC >= 65 && codDaletraaASC <= 90) {
                let retornoEncode = ((codDaletraaASC - 65 + offset) % 26 + 65);
                let novaLetra = String.fromCharCode(retornoEncode);
                mensagemSecreta = mensagemSecreta + novaLetra;

            } else if (codDaletraaASC >= 91 && codDaletraaASC <= 96) {
                let retornoEncode = ((codDaletraaASC - 91 + offset) % 26 + 91);
                let novaLetra = String.fromCharCode(retornoEncode);
                mensagemSecreta = mensagemSecreta + novaLetra;

            } else if (codDaletraaASC >= 97 && codDaletraaASC <= 122) {
                let retornoEncode = ((codDaletraaASC - 97 + offset) % 26 + 97);
                let novaLetra = String.fromCharCode(retornoEncode);
                mensagemSecreta = mensagemSecreta + novaLetra;

            } else if (codDaletraaASC >= 123 && codDaletraaASC <= 254) {
                let retornoEncode = ((codDaletraaASC - 123 + offset) % 26 + 123);
                let novaLetra = String.fromCharCode(retornoEncode);
                mensagemSecreta = mensagemSecreta + novaLetra;

            }
        }
        return mensagemSecreta;
    },
    decode(offset, string) {
        if (typeof offset != 'number' || (offset != 0 && offset % 1 != 0)) {
            throw new TypeError();
        }
        if (typeof string != 'string') {
            throw new TypeError();
        }
        let mensagemCodificada = "";
        for (let i = 0; i < string.length; i++) {
            const quantidaDeletras = string[i];
            let codDaletraaASC = quantidaDeletras.charCodeAt(0);

            if (codDaletraaASC >= 32 && codDaletraaASC <= 48) {
                let retornoDecode = ((codDaletraaASC - 48 - offset) % 26 + 48);
                let novaLetra = String.fromCharCode(retornoDecode);
                mensagemCodificada = mensagemCodificada + novaLetra;

            } else if (codDaletraaASC >= 58 && codDaletraaASC <= 64) {
                let retornoDecode = ((codDaletraaASC - 64 - offset) % 26 + 64);
                let novaLetra = String.fromCharCode(retornoDecode);
                mensagemCodificada = mensagemCodificada + novaLetra;

            } else if (codDaletraaASC >= 65 && codDaletraaASC <= 90) {
                let retornoDecode = ((codDaletraaASC - 90 - offset) % 26 + 90);
                let novaLetra = String.fromCharCode(retornoDecode);
                mensagemCodificada = mensagemCodificada + novaLetra;

            } else if (codDaletraaASC >= 91 && codDaletraaASC <= 96) {
                let retornoDecode = ((codDaletraaASC - 96 - offset) % 26 + 96);
                let novaLetra = String.fromCharCode(retornoDecode);
                mensagemCodificada = mensagemCodificada + novaLetra;

            } else if (codDaletraaASC >= 97 && codDaletraaASC <= 122) {
                let retornoDecode = ((codDaletraaASC - 122 - offset) % 26 + 122);
                let novaLetra = String.fromCharCode(retornoDecode);
                mensagemCodificada = mensagemCodificada + novaLetra;

            } else if (codDaletraaASC >= 123 && codDaletraaASC <= 254) {
                let retornoDecode = ((codDaletraaASC - 254 - offset) % 26 + 254);
                let novaLetra = String.fromCharCode(retornoDecode);
                mensagemCodificada = mensagemCodificada + novaLetra;
            }
        }
        return mensagemCodificada;
    }
}
export default cipher;

// ((codDaletraaASC - codDa1letra + deslocamento) % tamanhodoAlfabeto + codDa1letra)



