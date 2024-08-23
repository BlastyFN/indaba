var pos = 0;
const paises = [
    {
        img: "sudafrica",
        txt: "SUDÁFRICA",
        color: "naranja",
        exp:["Disfruta de nuestro icónico safari!", "Una aventura en medio de la imponente selva", "Cena junto a las maravillosas jirafas"]
    },
    {
        img: "australia",
        txt: "AUSTRALIA",
        color: "arcilla",
        exp: ["Conoce a los koalas de nuestra reserva natural", "Convive con los icónicos kanguros!", "Disfruta del árido clima australiano!"]
    },
    {
        img: "indonesia",
        txt: "INDONESIA",
        color: "hoja",
        exp: ["Disfruta de las instalaciones más lujosas y sustentables de la isla", "Disfruta de una enriquecedora aventura tropical", "Conoce a los imponentes orangutanes de Borneo"]
    },
    {
        img:"costarica",
        txt: "COSTA RICA",
        color: "olivo",
        exp: ["Desayuna en el paraíso tropical de Costa Rica", "Conecta con la fauna de la selva más diversa!", "Relájate en el destino turístico más ecológico de américa"]
    },
    {
        img: "suecia",
        txt: "SUECIA",
        color: "azul",
        exp: ["Lujosas vistas, lujosas experiencias árticas", "Disfruta de las maravillosas auroras boreales", "Una aventura en trineo inolvidable"]
    }
];
const MainTitle = document.getElementById("INDABA-TITLE");
const MainSection = document.getElementById("exp-main");
const expBtns = document.querySelectorAll('.expSel');
const exp1 = document.getElementById("exp1");
const exp2 = document.getElementById("exp2");
const exp3 = document.getElementById("exp3");
const exp1Title = document.getElementById("exp1-title");
const exp2Title = document.getElementById("exp2-title");
const exp3Title = document.getElementById("exp3-title");
const btnContainer = document.getElementById("btn-container-main");
expBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setExperience(btn.id);
  });
});
const setExperience = (expNum) =>{
    MainTitle.className =`expTitle box-shadow fondo-${paises[expNum].color}`;
    MainSection.className = `exp-main box-shadow fondo-${paises[expNum].color}`;
    exp1.className = `art-exp-img foto-cover exp1-${paises[expNum].img}`;
    exp2.className = `art-exp-img foto-cover exp2-${paises[expNum].img}`;
    exp3.className = `art-exp-img foto-cover exp3-${paises[expNum].img}`;
    exp1Title.textContent = paises[expNum].exp[0];
    exp2Title.textContent = paises[expNum].exp[1];
    exp3Title.textContent = paises[expNum].exp[2];
    btnContainer.className = `exp-nav box-shadow foto-cover main-${paises[expNum].img}`;
}
setExperience(0);