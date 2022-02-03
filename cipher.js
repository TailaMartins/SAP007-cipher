//const cipher é um objeto pois tem propriedades e definições
const cipher = {
    encode(offset, string) {
        //encode é a função que recebe um offset e uma string
        if (typeof offset != 'number' || (offset != 0 && offset % 1 != 0)) {
            //if é uma condição; tyeof é o tipo ; !=0 é um operador logico de negação 
            throw new TypeError();
            //throw ele tipo joga um erro
        }
        if (typeof string != 'string') {
            throw new TypeError();
            //é onde vai dar erro,()deixei vazio pois não me senti segura de escrever o erro
        }
        let mensagemSecreta = "";
        for (let i = 0; i < string.length; i++) {
            const quantidaDeletras = string[i];
            let codDaletraaASC = quantidaDeletras.charCodeAt(0);
            //laço for que contem um contador e variavel* que vai verficar o que o usuario 
            //escreve e transformar em numeraçao ASCii
            
            if (codDaletraaASC >= 65 && codDaletraaASC <= 90) {
                let retornoEncode = ((codDaletraaASC - 65 + offset) % 26 + 65);
                let novaLetra = String.fromCharCode(retornoEncode);
                mensagemSecreta = mensagemSecreta + novaLetra;

            } else if (codDaletraaASC >= 97 && codDaletraaASC <= 122) {
                let retornoEncode = ((codDaletraaASC - 97 + offset) % 26 + 97);
                let novaLetra = String.fromCharCode(retornoEncode);
                mensagemSecreta = mensagemSecreta + novaLetra;

            // Aqui ele vai vericar os caracteres especiais, ele não vai cifrar, apenas vai 
            //permitir que o usuario digite com os caracteres.
            } else if (codDaletraaASC >= 32 && codDaletraaASC <= 47) {
                let novaLetra = String.fromCharCode(codDaletraaASC);
                mensagemSecreta = mensagemSecreta + novaLetra;

            } else if (codDaletraaASC >= 58 && codDaletraaASC <= 64) {
                let novaLetra = String.fromCharCode(codDaletraaASC);
                mensagemSecreta = mensagemSecreta + novaLetra;

            } else if(codDaletraaASC >=123 && codDaletraaASC <= 254){
                let novaLetra = String.fromCharCode(codDaletraaASC);
                mensagemSecreta = mensagemSecreta + novaLetra;

            //Se o usuario digitar qualquer caractere que não esteja na condição(if e else) irá pedir que digite a mensagem
            } else {  
                alert(mensagemSecreta = "Digite sua mensagem");
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

            if (codDaletraaASC >= 65 && codDaletraaASC <= 90) {
                let retornoDecode = ((codDaletraaASC - 90 - offset) % 26 + 90);
                let novaLetra = String.fromCharCode(retornoDecode);
                mensagemCodificada = mensagemCodificada + novaLetra;

            } else if (codDaletraaASC >= 97 && codDaletraaASC <= 122) {
                let retornoDecode = ((codDaletraaASC - 122 - offset) % 26 + 122);
                let novaLetra = String.fromCharCode(retornoDecode);
                mensagemCodificada = mensagemCodificada + novaLetra;
                
            } else if (codDaletraaASC >= 32 && codDaletraaASC <= 47) {
                let novaLetra = String.fromCharCode(codDaletraaASC);
                mensagemCodificada = mensagemCodificada + novaLetra;

            } else if (codDaletraaASC >= 58 && codDaletraaASC <= 64) {
                let novaLetra = String.fromCharCode(codDaletraaASC);
                mensagemCodificada = mensagemCodificada + novaLetra;

            }else if(codDaletraaASC >= 123 && codDaletraaASC <= 254){
                let novaLetra = String.fromCharCode(codDaletraaASC);
                mensagemCodificada = mensagemCodificada + novaLetra;
            }else {
                alert(mensagemCodificada = "Digite sua mensagem");
            }
        }
        return mensagemCodificada;
    }
}
export default cipher;

// ((codDaletraaASC - codDa1letra + deslocamento) % tamanhodoAlfabeto + codDa1letra)
// variavel ela armazena uma informação que eu preciso
// let = pode mudar a informação
// const = não muda



