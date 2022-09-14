var alerMessage = document.querySelector("#menssagem-erro");
var alerRegisterMessage = document.querySelector("#message-register");


function messageRegister(){

    alerRegisterMessage.classList.remove('d-none');

    const myTimeout = setTimeout(myGreeting, 1800);

    function myGreeting() {

        alerRegisterMessage.classList.add('d-none');
    }    
}

function messageError(){

    alerMessage.classList.remove('d-none');

    const myTimeout = setTimeout(myGreeting, 1800);

    function myGreeting() {

        alerMessage.classList.add('d-none');
    }
}