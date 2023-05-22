var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou! UHU! 🥳";
  } else if (chute > 10) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10!!! 😡";
  } else if (chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10!!! 😡";
  }
  if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Seu chute é menor que o número secreto... tá quase lá! 😉";
  }
  if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Seu chute é maior que o número secreto... tente novamente. 🤔";
  }
}