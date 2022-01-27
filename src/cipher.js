const cipher = {                                                                                          /* Isso é um objeto, pois nele tem propriedades e definiçoes   */
    encode(offset, string) {                                                                             /* essa é a função que recebe string e o offset */
         if(typeof offset != 'number' || (offset != 0 && offset % 1 != 0)){                             /* aqui vai dar erro se o usuario usar outro tipo de argumento que não seja do tipo number no offset */
            throw new TypeError();                                                                     /* aqui o erro porem deixei vazio, entaõ não vai dar nenhuma mensagem de erro, porem vai dar erro */
        }
         if (typeof string != 'string') {                                                            /* aqui tambem é pra dar erro se usuario colocar outro tipo de argumento */
            throw new TypeError();                                                                  /* aqui é o erro que também está vazio*/

         }

        let mensagemSecreta = "";                                                              /* aqui é a minha variavel */
        for (let i = 0; i < string.length; i++) {                                             /* aqui é o meu laço for */
            const element = string[i];                                                       /* aqui e o meu for com uma const que recebe minha string o[i] é oindice da minha const que vai ser verificado */
            let codDaletraaASC = element.charCodeAt(0);                                     /* charCode ele me da o codigo da letra Asc */
            let retornoEncode = ((codDaletraaASC - 65 + offset) % 26 + 65);                /* aqui é a logica que foi passada  */
            let novaLetra = String.fromCharCode(retornoEncode);                           /* fromCharcode ele me retorna a letra */
            mensagemSecreta = mensagemSecreta + novaLetra;                               /* aqui ele está concatenando */
        }

        return mensagemSecreta;                                                        /* aqui é o retorno */

    },
    decode(offset, string) {                                                         /* segue o mesmo fluxo que o meu encode só que ao contrario */
         if(typeof offset != 'number' || (offset != 0 && offset % 1 != 0)){
            throw new TypeError();
        }
         if (typeof string != 'string') {
             throw new TypeError();

        }
        let mensagemCodificada = "";
        for (let i = 0; i < string.length; i++) {
            const element = string[i];
            let codDaletraaASC = element.charCodeAt(0);
            let retornoDecode = ((codDaletraaASC - 90 - offset) % 26 + 90);
            let novaLetra = String.fromCharCode(retornoDecode);
            mensagemCodificada = mensagemCodificada + novaLetra;
        }

        return mensagemCodificada;


    }

}
    

export default cipher;

// ((codDaletraaASC - codDa1letra + deslocamento) % tamanhodoAlfabeto + codDa1letra)


 
