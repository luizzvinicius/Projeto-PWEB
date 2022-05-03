"use strict";

let conteudo = document.getElementById("conteudo");
let nav = document.querySelector("#nav")
let abrirBtn = document.querySelector("#abrirBtn")
let fecharBtn = document.querySelector("#fecharBtn")

abrirBtn.addEventListener("click", () => {
  nav.classList.add("aberto")
  conteudo.classList.add("empurrado")
})

fecharBtn.addEventListener("click", () => {
  nav.classList.remove("aberto")
  conteudo.classList.remove("empurrado")
})