var paciente = document.querySelector("#primeiro-paciente")

var tdNome = paciente.querySelector(".info-nome")
var nome = tdNome.textContent;

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




console.log(`O peso do ${nome} é ${peso} Kg então seu IMC é igual = ${imc}`);
console.log(altura);
console.log(imc);
console.log(gordura);

var segundoPaciente = document.querySelector("#segundo-paciente");

var tdPeso = segundoPaciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var segundotdAltura = segundoPaciente.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = segundoPaciente.querySelector(".info-imc")
var imc = tdImc.textContent;

var imc = peso / (altura * altura);

tdImc.textContent = imc;

console.log(peso);
console.log(altura);
console.log(imc);
console.log(gordura);







