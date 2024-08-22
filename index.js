
const mainIMG = document.getElementById("mainFrame");
const mainTXT = document.getElementById("country-title");

const paises = [
    {
        img: "sudafrica",
        txt: "SUDÁFRICA"
    },
    {
        img: "australia",
        txt: "AUSTRALIA",
    },
    {
        img: "indonesia",
        txt: "INDONESIA"
    },
    {
        img:"costarica",
        txt: "COSTA RICA"
    },
    {
        img: "suecia",
        txt: "SUECIA"
    }
];


var pos = 0;
function changeBCK() {
    mainTXT.textContent = paises[pos].txt;
    mainIMG.className = `img-main main-${paises[pos].img} foto-cover`
    if (pos == 4) {
        pos = 0;
    }
    else{
        pos++;
    }
    
  }
  
  // Ejecuta changeBCK cada 7000 milisegundos (7 segundos)
  const intervalo = setInterval(changeBCK, 12000);


console.log('Script cargado correctamente'); // Mensaje de depuración para verificar