"use strict"

let gabaritos = {
    "taxonomia": ["b", "b", "b", "e"],
    "teorias_evolutivas": ["e", "a", "b", "b", "c"],
    "virus": ["d", "c", "c", "e", "b"],
}

let resultado = document.querySelector("#resultado")

function corrigir_questoes(assunto) {
    let gabarito = gabaritos[assunto]
    resultado.innerHTML = ""

    for (let i = 0; i < gabarito.length; i++) {
        let num = i + 1
        let questao = document.querySelector(`input[name=qt${num}]:checked`)

        if (questao) {
            let correcao = questao.value === gabarito[i] ? "Correto" : "Errado"
            resultado.innerHTML += `${num}) ${correcao}.<br>`
        } else {
            resultado.innerHTML += `A questão ${num} não foi marcada.<br>`
        }
    }
}