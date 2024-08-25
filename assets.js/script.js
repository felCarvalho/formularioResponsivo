"use strict";

//capturando valores de mensagens, pop-up, e etc.
const formulario = document.querySelector(".form");
const PoupUp = document.querySelector(".container-mensagem-error");
const fundoBlur = document.querySelector(".fundo-blur");
const close = document.querySelector("#button-close");
const mensagemPouUp = document.querySelector(".mensagem-error");

//evento de click acionando o formulario e usando preventDefault para cortar a ligação do form com banco de dados.
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  //selecionando todos inputs
  const inputsValue = document.querySelectorAll("input");
  //aplicando valor true a todos os inputs.
  let verificar = true;

  //loop for percorrendo todos os inputs dentro da NodeList.
  for (let i = 0; i < inputsValue.length; i++) {
    //guardando todos os valores dos input do html na variavel valor e usando trim(para ver se á espaços extra nos valores)
    const valor = inputsValue[i].value.trim();

    //verificando se existe algum campo totalmente sem valor no form e exxibindo caso seja encontrado.
    if (valor === "") {
      verificar = false;
      return;
    }

    if (!verificar === "") {
      mensagemPouUp.textContent = `Formulario enviado com sucesso!`;
      PoupUpAtivado();
    } else {
      mensagemPouUp.textContent = `Preencha todos os campos!`;
      PoupUpAtivado();
    }
  }
});

const PoupUpAtivado = function () {
  PoupUp.classList.remove("delete");
  fundoBlur.classList.remove("delete");
};

const PoupUpDesativado = function () {
  PoupUp.classList.add("delete");
  fundoBlur.classList.add("delete");
};

close.addEventListener("click", function () {
  PoupUpDesativado();
  const input = document.querySelectorAll("input");
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
  return;
});
