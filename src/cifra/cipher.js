const tamanhodoAlfabeto = 26;
const letraAmaiscula = 65;
const letraZmaiscula = 90;
const letraAminuscula = 97;
const letraZminuscula = 122;

const cipher = {
    encode(offset, string) {
        if (typeof offset != 'number' || (offset != 0 && offset % 1 != 0)) {
            throw new TypeError();
        }
        if (typeof string != 'string') {
            throw new TypeError();
        }
        let mensagemSecreta = "";
        for (let i = 0; i < string.length; i++) {
            const quantidaDeletras = string[i];
            const codDaletraaASC = quantidaDeletras.charCodeAt(0);

            if (codDaletraaASC >= letraAmaiscula && codDaletraaASC <= letraZmaiscula) {
                const retornoEncode = ((codDaletraaASC - letraAmaiscula + offset) % tamanhodoAlfabeto + letraAmaiscula);
                const novaLetra = String.fromCharCode(retornoEncode);
                mensagemSecreta += novaLetra;

            } else if (codDaletraaASC >= letraAminuscula && codDaletraaASC <= letraZminuscula) {
                const retornoEncode = ((codDaletraaASC - letraAminuscula + offset) % tamanhodoAlfabeto + letraAminuscula);
                const novaLetra = String.fromCharCode(retornoEncode);
                mensagemSecreta +=  novaLetra;

            } else {
                const novaLetra = String.fromCharCode(codDaletraaASC);
                mensagemSecreta += novaLetra;
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
            const codDaletraaASC = quantidaDeletras.charCodeAt(0);

            if (codDaletraaASC >= letraAmaiscula && codDaletraaASC <= letraZmaiscula) {
                const retornoDecode = ((codDaletraaASC - letraZmaiscula - offset) % tamanhodoAlfabeto + letraZmaiscula);
                const novaLetra = String.fromCharCode(retornoDecode);
                mensagemCodificada = mensagemCodificada + novaLetra;

            } else if (codDaletraaASC >= letraAminuscula && codDaletraaASC <= letraZminuscula) {
                const retornoDecode = ((codDaletraaASC - letraZminuscula - offset) % tamanhodoAlfabeto + letraZminuscula);
                const novaLetra = String.fromCharCode(retornoDecode);
                mensagemCodificada = mensagemCodificada + novaLetra;

            } else {
                const novaLetra = String.fromCharCode(codDaletraaASC);
                mensagemCodificada = mensagemCodificada + novaLetra;
            }
        }
        return mensagemCodificada;
    }
}
export default cipher;



