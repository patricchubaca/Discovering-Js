function puxarPost() {
  fetch('https://pokeapi.co/api/v2/pokemon/3')
    .then(r => r.json())
    .then(r => {
      console.log(r)
    })
}

puxarPost();


function acessarTXT() {
  fetch('./doc.txt')
    .then(r => r.text())
    .then(r => {
      console.log(r)
    })
}

acessarTXT();

