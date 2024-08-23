
const mainIMG = document.getElementById("mainFrame");
const mainTXT = document.getElementById("country-title");
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
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
leftArrow.addEventListener('click', () => {
    pos = (pos - 1 + paises.length) % paises.length;
    changeBCK();
  });
  const moveRight = () =>{
    pos = (pos + 1) % paises.length;
    changeBCK();
  }
  
  rightArrow.addEventListener('click', moveRight);


  
function changeBCK() {

    mainIMG.classList.add('fade-in-out');
    setTimeout(() => {
        mainTXT.textContent = paises[pos].txt;
        mainIMG.className = `img-main main-${paises[pos].img} foto-cover box-shadow`;
        mainIMG.classList.remove('fade-in-out');

        
    }, 1500); 
  }

  const intervalo = setInterval(moveRight, 15000);


console.log('Script cargado correctamente');