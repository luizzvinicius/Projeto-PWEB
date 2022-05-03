"use strict"

let senha = document.querySelector('#senha')
let confsenha = document.querySelector('#confsenha')

function validarCadastro() {
    if (senha.value != confsenha.value) {
        alert('Senhas diferentes')
        senha.focus()
    } else {
        window.location.href = "index.html"
    }
}