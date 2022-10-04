console.log("Entro a JS");

const base_url_api = "https://swapi.dev/api/";
const infoDarth = document.getElementById("infoDarth");
const infoLeia = document.getElementById("infoLeia");
const nombreDarth = document.getElementById("nombreDarth");
const nombreLeia = document.getElementById("nombreLeia");

const imgLogo = document.getElementById("imgLogo");
const infoPersonajes = document.getElementById("infoPersonajes");

fetch(`${base_url_api}people/4`)
  .then((response) => response.json())
  .then((data) => {
    nombreDarth.innerText = data.name.toUpperCase();
    infoDarth.innerHTML = `
    Año de nacimiento: ${data.birth_year} <br><br>
    Gender:  ${data.gender.toUpperCase()} <br><br>
    Altura: ${data.height} inch 
    `;
  })
  .catch((error) => console.log(error));

fetch(`${base_url_api}people/5`)
  .then((response) => response.json())
  .then((data) => {
    nombreLeia.innerText = data.name.toUpperCase();
    infoLeia.innerHTML = `
    Año de nacimiento: ${data.birth_year} <br><br>
    Gender:  ${data.gender.toUpperCase()} <br><br>
    Altura: ${data.height} inch 
    `;
  })
  .catch((error) => console.log(error));

function mostrarTabla() {
  console.log("Entro a funcion TABLE");
  infoPersonajes.style.display = "none";
}

function mostrarPesonajes() {
  infoPersonajes.style.display = "";
}

/*
const imgPokemon = document.getElementById("imgPokemon");
const pokemonNombre = document.getElementById("pokemonNombre");
const pokemonPeso = document.getElementById("pokemonPeso");

function randomPokemon() {
  console.log("Pokédex funcionando");
  const pokemonNumber = generateRandomNumber(1, 151);
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      imgPokemon.src = data.sprites.other.home.front_default;
      pokemonNombre.innerText = data.name.toUpperCase();
      pokemonPeso.innerText = `Peso: ${data.weight} kg`;
    })
    .catch((error) => console.log(error));
}

function generateRandomNumber(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}


const base_url_api = "http://ucamp.alumnos.dev4humans.com.mx";
const tblDatos = document.getElementById("tbl");
const grafica = document.getElementById("myChart").getContext("2d");

(function cargarAnimales() {
  fetch(base_url_api + "/Main/endpoint_animales_zoo", { method: "GET" })
    .then((response) => response.json())
    .then((result) => {
      const label_for_chart = result.data.map((item) => item.nombre);
      const data_for_chart = result.data.map((item) => item.cantidad);

      const myChart = new Chart(grafica, {
        type: "bar",
        data: {
          labels: label_for_chart,
          datasets: [
            {
              label: "Cantidad de Animales",
              data: data_for_chart,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      tblAnimales.innerHTML = "";
      for (const animal of result.data) {
        let tr = `<tr>
        <td>${animal.id}</td>
        <td>${animal.nombre.toUpperCase()}</td>
        <td>${animal.cantidad}</td>
        </tr>`;
        tblAnimales.innerHTML += tr;
      }
    })
    .catch((error) => {
      console.log("Error detectado");
    });
})();*/
