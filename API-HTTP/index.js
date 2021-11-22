function puxarPost() {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(r => r.json())
    .then(r => {
      console.log(r)
    })
}

puxarPost();

const conteudo = document.querySelector('.body');

function acessarTXT() {
  fetch('./doc.txt')
    .then(response => response.text())
    .then(body => {
      conteudo.innerText = body;
    })
}

acessarTXT();



const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const conteudo1 = document.querySelector('.body1');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(r => r.json())
    .then(json => {
      console.log(json)
      Object.keys(json).forEach(resultado => {
        console.log(resultado)
      });
      //conteudo1.innerText = resultadoCep;
      
      
    })
}

