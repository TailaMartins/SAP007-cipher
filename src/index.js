import {cipher} from './cifra/cipher.js'


const select = document.querySelector("#select");
const textMessage = document.querySelector(".textarea")
const encryptionButton = document.querySelector(".encryption-button")

const numberOption = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
];

numberOption.forEach((item)=>{
 const option = new Option(item,item);
  select.options[select.options.length] = option;
})

cipher.encode(1,"GATINHO");


function encryptedMessage(){
  if(textMessage.value == ''){
    return;
  }
  const string = textMessage.value;
  const offset = select.value
  console.log(select.value);
}

encryptionButton.addEventListener('click',encryptedMessage )

// const botaoCodificar = document.getElementById("codi-mensagem");
// function codMensagem(evt) {
//     evt.preventDefault();
//     const string = document.getElementById("mensagem-secreta").value;
//     const offset = parseInt(document.getElementById("posicoes-deslocamento").value);
//     const codiFicando = cipher.encode(offset, string);
//     document.getElementById("mensagem-cifrada").innerHTML = codiFicando;
// }
// botaoCodificar.addEventListener('click', codMensagem);

// const botaoDescodificar = document.getElementById("descodi-mensagem");
// function descMensagem(evt) {
//     evt.preventDefault();
//     const string = document.getElementById("mensagem-codificada").value;
//     const offset = parseInt(document.getElementById("inverter-deslocamento").value);
//     const descoDificando = cipher.decode(offset, string);
//     document.getElementById("mensagem-descifrada").innerHTML = descoDificando;
// }
// botaoDescodificar.addEventListener('click', descMensagem);

// document.getElementById("limpar").addEventListener("click", () => {window.location.reload()});
