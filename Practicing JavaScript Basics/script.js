var videoGames = ['Switch', 'XBOX', '3DS',
  playstation = [ 'PS1', 'PS2', 'PS3']
];

const carros = ['celta', 'opala', 'moto',
      marcas = 'bicicleta', 'patinete'
];

var itensFestaAniversario = ['bolo', 'salgado', 'refrigerante',
  DOCINHOS = 'Dois Amores', 'Beijinho', 'Brigadeiro'
];

for (var i = 0; i < videoGames.length; i++) {
  if (videoGames[i] == playstation) {
    for (var j = 0; j < playstation.length; j++) {
      console.log(playstation[j].toUpperCase());
    }

    break;
  }
  
}


carros.forEach((item) => {
  console.log(item.toUpperCase());
});

itensFestaAniversario.forEach((item) => {
  console.log(item.toUpperCase());
});
