
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdNome = paciente.querySelector(".info-nome")
    var nome = tdNome.textContent;

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")

    var tdGordura = paciente.querySelector(".info-gordura")
    var gordura = tdGordura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if (peso < 0 || peso > 1000) {
        console.log("peso invalido");
        pesoValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
    }
    if (pesoValido == true) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

function calculaImc(peso,altura){

    var imc = 0;

imc = peso / (altura * altura);

return imc.toFixed(2);
}
