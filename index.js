// ==========================================================================
// INDABA LUXURY TRAVEL - HOME CONTROLLER (INDEX.JS)
// ==========================================================================

const heroData = [
  {
    name: "SUDÁFRICA",
    tag: "Santuario Safari & Vida Salvaje",
    coords: "24.01° S, 31.48° E",
    climate: "26°C · Temporada Seca",
    lodge: "Singita Lebombo Lodge",
    carbon: "100% Compensada",
    exclusivity: "Acceso Tier 1",
    img: "./assets/sudafrica-main.jpg"
  },
  {
    name: "AUSTRALIA",
    tag: "Outback & Gran Barrera de Coral",
    coords: "16.91° S, 145.77° E",
    climate: "29°C · Mar Calmo",
    lodge: "El Questro Homestead & Lizard Island",
    carbon: "100% Compensada",
    exclusivity: "Reserva Privada",
    img: "./assets/australia-main.jpg"
  },
  {
    name: "INDONESIA",
    tag: "Archipiélago Phinisi & Selva de Borneo",
    coords: "0.53° S, 130.51° E",
    climate: "30°C · Brisa Marina",
    lodge: "Aqua Blu Superyacht & Nihi Sumba",
    carbon: "100% Compensada",
    exclusivity: "Carta Náutica VIP",
    img: "./assets/indonesia-main.jpg"
  },
  {
    name: "COSTA RICA",
    tag: "Selva Nubosa & Bienestar Biófilo",
    coords: "8.53° N, 83.56° W",
    climate: "27°C · Microclima Tropical",
    lodge: "Lapa Rios Rainforest Sanctuary",
    carbon: "200% Positiva",
    exclusivity: "Ecoturismo de Autor",
    img: "./assets/costarica-main.jpg"
  },
  {
    name: "SUECIA",
    tag: "Expedición Ártica & Auroras Boreales",
    coords: "68.35° N, 18.83° E",
    climate: "-4°C · Cielo Despejado",
    lodge: "Arctic Bath & Treehotel Eco-Suites",
    carbon: "100% Compensada",
    exclusivity: "Acceso Astronómico",
    img: "./assets/suecia-main.jpg"
  }
];

let currentIndex = 0;
let carouselTimer;

// DOM Elements
const heroBg = document.getElementById("heroBg");
const hudTitle = document.getElementById("hudTitle");
const hudTag = document.getElementById("hudTag");
const hudCoords = document.getElementById("hudCoords");
const hudClimate = document.getElementById("hudClimate");
const hudLodge = document.getElementById("hudLodge");
const hudCarbon = document.getElementById("hudCarbon");
const hudExclusivity = document.getElementById("hudExclusivity");
const hudIndicators = document.getElementById("hudIndicators");
const prevBtn = document.getElementById("prevHeroBtn");
const nextBtn = document.getElementById("nextHeroBtn");
const siteHeader = document.getElementById("siteHeader");
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

// Initialize Indicators
function initIndicators() {
  if (!hudIndicators) return;
  hudIndicators.innerHTML = "";
  heroData.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = `hud-dot ${idx === currentIndex ? "active" : ""}`;
    dot.addEventListener("click", () => {
      goToSlide(idx);
      resetAutoPlay();
    });
    hudIndicators.appendChild(dot);
  });
}

function updateHUD(index) {
  const data = heroData[index];
  if (!heroBg || !hudTitle) return;
  
  heroBg.classList.add("fade-out");
  
  setTimeout(() => {
    heroBg.style.backgroundImage = `url('${data.img}')`;
    hudTitle.textContent = data.name;
    hudTag.textContent = data.tag;
    hudCoords.textContent = data.coords;
    hudClimate.textContent = data.climate;
    hudLodge.textContent = data.lodge;
    hudCarbon.textContent = data.carbon;
    hudExclusivity.textContent = data.exclusivity;

    const dots = document.querySelectorAll(".hud-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });

    heroBg.classList.remove("fade-out");
    heroBg.classList.add("active");
  }, 250);
}

function goToSlide(index) {
  currentIndex = (index + heroData.length) % heroData.length;
  updateHUD(currentIndex);
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

function resetAutoPlay() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(nextSlide, 6500);
}

// Event Listeners
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });
}

// Header Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    siteHeader?.classList.add("scrolled");
  } else {
    siteHeader?.classList.remove("scrolled");
  }
});

// Mobile Navigation Toggle
if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// Initial Boot
initIndicators();
resetAutoPlay();
console.log("Indaba Luxury Atelier - Home Loaded.");
