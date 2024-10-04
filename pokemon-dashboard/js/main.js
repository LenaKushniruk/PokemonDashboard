const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250 + 1);


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        pokemonImage.src =  realData.sprites.front_default;
    });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
        if(catchNumber === 0){
            pokemonText.innerText = "Pokèmon fled!"
        }
        else{
            pokemonText.innerText = "Pokèmon Caught!"
        }
        pokemonGamePlayed = true;
    }
}

const nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input");
inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = inputField.value;

        let age = fetch("https://api.agify.io?name=" + name)
            .then(function(response){
                return response.json();
            })
            .then(function(echteData) {
                inputField.style.display = "none";
                nameText.innerText = echteData.age;

            });
    }
}


const labels = [
    "Gen 1",
    "Gen 2",
    "Gen 3",
    "Gen 4",
    "Gen 5",
  ];
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Pokemons in Gens",
        data: [130, 150, 149, 155, 180],
        backgroundColors: ['red'],
      }
    ]
  }
  
  const config = {
    type: 'doughnut',
    data: data,
    options: {},
    maintainAspectRatio: false,
}

new Chart(document.getElementById('js--chart--1'), config);

//


function getPokemon() {
    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
    ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
    ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;
  
    const labels = ['normal', 'fighting', 'poison', 'ground', 'rock', 
    'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 
    'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow',];
  
    for (i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * 500 + 1);
      let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
        .then(function (response) {
          return response.json();
        })
        .then(function (pokemon) {
          switch (pokemon.types[0].type.name) {
            case 'normal':
              normal = normal + 1;
              break;
            case ' fighting':
              fighting = fighting + 1;
              break;
            case 'flying':
              flying = flying + 1;
              break;
            case 'poison':
              poison = poison + 1;
              break;
            case ' ground':
              ground = ground + 1;
              break;
            case ' rock':
              rock = rock + 1;
              break;
            case 'bug':
              bug = bug + 1;
            case 'ghost':
              ghost = ghost + 1;
              break;
            case 'steel':
              steel = steel + 1;
              break;
            case 'fire':
              fire = fire + 1;
              break;
            case 'water':
              water = water + 1;
              break;
            case 'grass':
              grass = grass + 1;
              break;
            case 'electric':
              electric = electric + 1;
              break;
            case 'psychic':
              psychic = psychic + 1;
              break;
            case 'ice':
              ice = ice + 1;
              break;
            case 'dragon':
              dragon = dragon + 1;
              break;
            case 'dark':
              dark = dark + 1;
              break;
            case 'fairy':
              fairy = fairy + 1;
              break;
            case 'unknown':
              unknown = unknown + 1;
              break;
            case 'shadow':
              shadow = shadow + 1;
              break;
          }
        }).then(function(){
          dataPokemon.datasets[0].data = [normal, fighting, poison, ground, rock, 
            bug, ghost, steel, fire, water, grass, electric, 
            psychic, ice, dragon, dark, fairy, unknown, shadow];
            graph.update();
        });
    }
    const dataPokemon = {
      labels: labels,
      datasets: [
        {
          label: "Pokemon types",
          data: [],
          backgroundColor: ['#D21312', '#009FBD', '#210062', '#77037B', '#FF6000'],
        }
      ]
    }
  
    const configPokemon = {
      type: 'bar',
      data: dataPokemon,
    }
    
    const graph = new Chart(document.getElementById('js--chart--2'), configPokemon);
  }
  
  getPokemon();


  const labels2 = [
    "Gen 1",
    "Gen 2",
    "Gen 3",
    "Gen 4",
    "Gen 5",
  ];
  
  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "Total Pokemons in Gens",
        data: [130, 150, 149, 155, 180],
        backgroundColors: ['red'],
      }
    ]
  }
  
  const config2 = {
    type: 'line',
    data: data,
    options: {},
    maintainAspectRatio: false,
}

new Chart(document.getElementById('js--chart--3'), config2);
