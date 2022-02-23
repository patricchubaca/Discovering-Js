var paciente = document.querySelector("#primeiro-paciente")

var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc")
var imc = tdImc.textContent;

var tdGordura = paciente.querySelector(".info-gordura")
var gordura = tdGordura.textContent;

var imc = peso / (altura * altura);

tdImc.textContent = imc;

console.log(peso);
console.log(altura);
console.log(imc);
console.log(gordura);