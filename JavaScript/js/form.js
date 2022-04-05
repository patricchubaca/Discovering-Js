var botaoAdicionar = document.querySelector("#adicionar-paciente");
var alerMessage = document.querySelector("#menssagem-erro");
var alerRegisterMessage = document.querySelector("#message-register");

botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    pacienteTr = montaTr(paciente);  

    if (!validaPaciente(paciente)) {

        alerMessage.classList.remove('d-none');

        const myTimeout = setTimeout(myGreeting, 1800);

        function myGreeting() {
            alerMessage.classList.add('d-none')
        }

        form.reset();

        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

    alerRegisterMessage.classList.remove('d-none');

    const myTimeout = setTimeout(myGreeting, 1800);

    function myGreeting() {
        alerRegisterMessage.classList.add('d-none');
    }

});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function validaPaciente(paciente){
    if (validaPeso(paciente.peso) && validaAltura(paciente.altura)){
        return true;
    } else {
        return false;
    }
}

function validaPeso(peso){

    if(peso >= 0 && peso < 200){

        return true;

    }else{

        return false;
    }   
}

function validaAltura(altura){

    if(altura > 0 && altura  < 200){

      return true;

  }else{

      return false;
  }
}