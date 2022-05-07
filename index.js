
import cipher from "./cifra/cipher.js";

const botaoCodificar = document.getElementById("codi-mensagem");
function codMensagem(evt) {
    evt.preventDefault();
    const string = document.getElementById("mensagem-secreta").value;
    const offset = parseInt(document.getElementById("posicoes-deslocamento").value);
    const codiFicando = cipher.encode(offset, string);
    document.getElementById("mensagem-cifrada").innerHTML = codiFicando;
}
botaoCodificar.addEventListener('click', codMensagem);

const botaoDescodificar = document.getElementById("descodi-mensagem");
function descMensagem(evt) {
    evt.preventDefault();
    const string = document.getElementById("mensagem-codificada").value;
    const offset = parseInt(document.getElementById("inverter-deslocamento").value);
    const descoDificando = cipher.decode(offset, string);
    document.getElementById("mensagem-descifrada").innerHTML = descoDificando;
}
botaoDescodificar.addEventListener('click', descMensagem);

document.getElementById("limpar").addEventListener("click", () => {window.location.reload()});







