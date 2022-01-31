# Cifra de César

## Índice

- [Cifra de César](#cifra-de-césar)

  - [1. Prefácio](#1-prefácio)
  - [2. Perfil do Usuario](#2-perfil-do-usuario)
  - [3. Ux (User experience)](#3-ux-user-experience)
  
---

## 1. Prefácio

Trata-se de um tipo de cifra de substituição, na qual cada letra de um texto a ser criptografado é substituída por outra letra,
presente no alfabeto porém deslocada um certo número de posições à esquerda ou à direita.
Por exemplo: Se usarmos um deslocamento a esquerda(offset) de 8 posicoes:

Alfabeto sem cifrar: ABCDEFGHIJKLMNOPQRSTUVWXYZ

Alfabeto com cifra: IJKLMNOPQRSTUVWXYZABCDEFGH

A letra A será: I

A palavra gato será: OIBW


## 2. Perfil do Usuario
Esse projeto foi feito para que pessoas que queiram escrever uma mensagem para outra pessoa, possa criptografar a mensagem e com o conhecimento da chave(offset) certa possa decodificar a mensagem.

## 3. Ux (User experience)
O projeto foi desenvolvido para que qualquer pessoa que sinta a necessidade de escrever um texto codificado e queira que somente o destinatario possa ter acesso ao texto descodifique a mensagem, para isso o usuario deverá informar a chave de deslocamento escolhida 
assim como o texto cifrado.

Ferramenta ultilizada:
O prototipo foi feito no [Mockflow](https://wireframepro.mockflow.com/#/space/Me2J3mzlonb) 
por ter uma interface mais amigavel e intuitiva.
