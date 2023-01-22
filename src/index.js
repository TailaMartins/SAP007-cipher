import { cipher } from "./cifra/cipher.js";

const select = document.querySelector(".select");
const selectDecifrar = document.querySelector("#select-decifrar");
const mensagemParaCifrar = document.querySelector(".mensagem");
const cifraButton = document.querySelector(".cifra-button");
const mensagemCifrada = document.querySelector(".resultado-mensagem");
const mensagemDeErro = document.querySelector(".mensagem-de-erro");
const mensagemDeErroDecifrar = document.querySelector(".mensagem-de-erro-decifrar")
const mensagemParaDecifrar = document.querySelector(".decifrar-mensagem");
const mensagemDecifrada = document.querySelector(".resultado-decifra");
const decifraButton = document.querySelector(".button-decifrar");

const numberOption = ["Offset", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
];

numberOption.forEach((item) => {
  const option = new Option(item, item);
  select.options[select.options.length] = option;
});

numberOption.forEach((el) => {
  const option = new Option(el, el);
  selectDecifrar.options[selectDecifrar.options.length] = option;
});

function erro() {
  mensagemDeErro.innerHTML = ""
  mensagemDeErroDecifrar.innerHTML = ""
}

function cifrarTexto(e) {
  e.preventDefault();
  if (mensagemParaCifrar.value == "" || select.value == "Offset") {
    mensagemDeErro.innerHTML = "Por favor preencha os campos Mensagem ou Offset"
    return setTimeout((erro), 2000)
  }
  const string = mensagemParaCifrar.value;
  const offset = Number(select.value);
  const resultadoCifra = cipher.encode(offset, string);
  mensagemCifrada.innerText = resultadoCifra;
}

function decifrarTexto(e) {
  e.preventDefault();
  if (mensagemParaDecifrar.value == "") {
    mensagemDeErroDecifrar.innerHTML = "Por favor preencha os campos Mensagem ou Offset"
    return setTimeout((erro), 2000)
  }
  const stringDecifrar = mensagemParaDecifrar.value;
  const offsetDecifrar = Number(selectDecifrar.value);
  const resultadoCifra = cipher.decode(offsetDecifrar, stringDecifrar);
  mensagemDecifrada.innerText = resultadoCifra;
}

cifraButton.addEventListener("click", cifrarTexto);
decifraButton.addEventListener("click", decifrarTexto);
