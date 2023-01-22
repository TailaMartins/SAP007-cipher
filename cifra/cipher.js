const tamanhoDoAlfabeto = 26;
const letraAmaiscula = 65;
const letraZmaiscula = 90;
const letraAminuscula = 97;
const letraZminuscula = 122;

export const cipher = {
  encode(offset, string) {
    if (typeof offset != "number" || (offset != 0 && offset % 1 != 0)) {
      throw new TypeError();
    }
    if (typeof string != "string") {
      throw new TypeError();
    }
    let mensagem = "";
    for (let i = 0; i < string.length; i++) {
      const quantidaDeletras = string[i];
      const codDaletraaASC = quantidaDeletras.charCodeAt(0);

      if (
        codDaletraaASC >= letraAmaiscula &&
        codDaletraaASC <= letraZmaiscula
      ) {
        const retornoEncode =
          ((codDaletraaASC - letraAmaiscula + offset) % tamanhoDoAlfabeto) +
          letraAmaiscula;
        const novaLetra = String.fromCharCode(retornoEncode);
        mensagem += novaLetra;
      } else if (
        codDaletraaASC >= letraAminuscula &&
        codDaletraaASC <= letraZminuscula
      ) {
        const retornoEncode =
          ((codDaletraaASC - letraAminuscula + offset) % tamanhoDoAlfabeto) +
          letraAminuscula;
        const novaLetra = String.fromCharCode(retornoEncode);
        mensagem += novaLetra;
      } else {
        const novaLetra = String.fromCharCode(codDaletraaASC);
        mensagem += novaLetra;
      }
    }
    return mensagem;
  },
  decode(offset, string) {
    if (typeof offset != "number" || (offset != 0 && offset % 1 != 0)) {
      throw new TypeError();
    }
    if (typeof string != "string") {
      throw new TypeError();
    }
    let mensagemCodificada = "";
    for (let i = 0; i < string.length; i++) {
      const quantidaDeletras = string[i];
      const codDaletraaASC = quantidaDeletras.charCodeAt(0);

      if (
        codDaletraaASC >= letraAmaiscula &&
        codDaletraaASC <= letraZmaiscula
      ) {
        const retornoDecode =
          ((codDaletraaASC - letraZmaiscula - offset) % tamanhoDoAlfabeto) +
          letraZmaiscula;
        const novaLetra = String.fromCharCode(retornoDecode);
        mensagemCodificada = mensagemCodificada + novaLetra;
      } else if (
        codDaletraaASC >= letraAminuscula &&
        codDaletraaASC <= letraZminuscula
      ) {
        const retornoDecode =
          ((codDaletraaASC - letraZminuscula - offset) % tamanhoDoAlfabeto) +
          letraZminuscula;
        const novaLetra = String.fromCharCode(retornoDecode);
        mensagemCodificada = mensagemCodificada + novaLetra;
      } else {
        const novaLetra = String.fromCharCode(codDaletraaASC);
        mensagemCodificada = mensagemCodificada + novaLetra;
      }
    }
    return mensagemCodificada;
  },
};
