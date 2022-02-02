
import cipher from "./cipher.js";

//console.log(cipher);

const botaoCodificar = document.getElementById("codiMensagem");
function codMensagem(evt) {
    evt.preventDefault();
    let string = document.getElementById("mensagemSecreta").value;
    let offset = parseInt(document.getElementById("posiçoesDeslocamento").value);
    const codiFicando = cipher.encode(offset, string);
    document.getElementById("mensagemCifrada").innerHTML = codiFicando;
}
botaoCodificar.addEventListener('click', codMensagem);

const botaoDescodificar = document.getElementById("descodiMensagem");
function descMensagem(evt) {
    evt.preventDefault();
    let string = document.getElementById("mensagemCodificada").value;
    let offset = parseInt(document.getElementById("inverterDeslocamento").value);
    const descoDificando = cipher.decode(offset, string);
    document.getElementById("mensagemDescifrada").innerHTML = descoDificando;
}
botaoDescodificar.addEventListener('click', descMensagem);







