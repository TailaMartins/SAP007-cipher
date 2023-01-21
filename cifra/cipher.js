const alphabetSize = 26;
const letterAUppercase = 65;
const letterZUppercase = 90;
const lettterALowercase = 97;
const letterZLowercase = 122;

// const cipher = {
//     encode(offset, string) {
//         if (typeof offset != 'number' || (offset != 0 && offset % 1 != 0)) {
//             throw new TypeError();
//         }
//         if (typeof string != 'string') {
//             throw new TypeError();
//         }
//         let mensagem = "";
//         for (let i = 0; i < string.length; i++) {
//             const quantidaDeletras = string[i];
//             const codDaletraaASC = quantidaDeletras.charCodeAt(0);

//             if (codDaletraaASC >= letraAmaiscula && codDaletraaASC <= letraZmaiscula) {
//                 const retornoEncode = ((codDaletraaASC - letraAmaiscula + offset) % alphabet size + letraAmaiscula);
//                 const novaLetra = String.fromCharCode(retornoEncode);
//                 mensagem += novaLetra;

//             } else if (codDaletraaASC >= letraAminuscula && codDaletraaASC <= letraZminuscula) {
//                 const retornoEncode = ((codDaletraaASC - letraAminuscula + offset) % alphabet size + letraAminuscula);
//                 const novaLetra = String.fromCharCode(retornoEncode);
//                 mensagem +=  novaLetra;

//             } else {
//                 const novaLetra = String.fromCharCode(codDaletraaASC);
//                 mensagem += novaLetra;
//             }
//         }
//         return mensagem;
//     },
//     decode(offset, string) {
//         if (typeof offset != 'number' || (offset != 0 && offset % 1 != 0)) {
//             throw new TypeError();
//         }
//         if (typeof string != 'string') {
//             throw new TypeError();
//         }
//         let mensagemCodificada = "";
//         for (let i = 0; i < string.length; i++) {
//             const quantidaDeletras = string[i];
//             const codDaletraaASC = quantidaDeletras.charCodeAt(0);

//             if (codDaletraaASC >= letraAmaiscula && codDaletraaASC <= letraZmaiscula) {
//                 const retornoDecode = ((codDaletraaASC - letraZmaiscula - offset) % alphabet size + letraZmaiscula);
//                 const novaLetra = String.fromCharCode(retornoDecode);
//                 mensagemCodificada = mensagemCodificada + novaLetra;

//             } else if (codDaletraaASC >= letraAminuscula && codDaletraaASC <= letraZminuscula) {
//                 const retornoDecode = ((codDaletraaASC - letraZminuscula - offset) % alphabet size + letraZminuscula);
//                 const novaLetra = String.fromCharCode(retornoDecode);
//                 mensagemCodificada = mensagemCodificada + novaLetra;

//             } else {
//                 const novaLetra = String.fromCharCode(codDaletraaASC);
//                 mensagemCodificada = mensagemCodificada + novaLetra;
//             }
//         }
//         return mensagemCodificada;
//     }
// }
// export default cipher;

export const cipher = {
  encode(offset, string) {
    let message;
    for (let value of string) {
      message = value.charCodeAt(0);

      if (message >= letterAUppercase && message <= letterZUppercase) {
        const returnEncode =
          ((message - letterAUppercase + offset) % alphabetSize) +
          letterAUppercase;
        const newLetter = String.fromCharCode(returnEncode);
        message += newLetter;
        console.log(newLetter);
      }
    }
  },
};
