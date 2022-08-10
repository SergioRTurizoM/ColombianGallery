const cuadro = document.querySelector(".imagen");
const back = document.querySelector(".anterior");
const next = document.querySelector(".siguiente");

let galeria = [
  `<img class="imagenes" src="./assets/foto1.png" alt="colombia" />`,
  `<img class="imagenes" src="./assets/foto2.png" alt="colombia" />`,
  `<img class="imagenes" src="./assets/foto3.png" alt="colombia" />`,
  `<img class="imagenes" src="./assets/foto4.png" alt="colombia" />`,
  `<img class="imagenes" src="./assets/foto5.png" alt="colombia" />`,
];

let picture = 0;

const siguiente = document.querySelector(".siguiente").addEventListener("click", () => {
    if (picture < galeria.length - 1) {
      picture++;
      cuadro.innerHTML = galeria[picture];
    }
  });

const anterior = document.querySelector(".anterior").addEventListener("click", () => {
    if (picture > 0) {
      picture--;
      cuadro.innerHTML = galeria[picture];
    }
  });

const uno = document.querySelector("#uno").addEventListener("click", () =>  cuadro.innerHTML = galeria[0]);

const dos = document.querySelector("#dos").addEventListener("click", () => cuadro.innerHTML = galeria[1]);

const tres = document.querySelector("#tres").addEventListener("click", () => cuadro.innerHTML = galeria[2]);

const cuatro = document.querySelector("#cuatro").addEventListener("click", () => {
    cuadro.innerHTML = galeria[3];
  });

const cinco = document.querySelector("#cinco").addEventListener("click", () => { cuadro.innerHTML = galeria[4];});
