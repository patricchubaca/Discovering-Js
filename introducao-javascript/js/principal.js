
var pacientes = document.querySelectorAll(".paciente")

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
    }
    if (pesoValido == true) {
        var imc = peso / (altura * altura);
        tdImc.textContent = Math.round(imc);

        console.log(`O peso do ${nome} é ${peso} Kg então seu IMC é igual = ${Math.round(imc)}`);
    }
}

