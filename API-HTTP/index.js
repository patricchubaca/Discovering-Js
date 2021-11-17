function puxarPost() {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(r => r.json())
    .then(r => {
      console.log(r)
    })
}

puxarPost();