// ==========================================================================
// INDABA LUXURY TRAVEL - EXPERIENCES DATA & CONTROLLER (EXPERIENCIAS.JS)
// ==========================================================================

const experiencesData = [
  {
    code: "ZAR",
    name: "SUDÁFRICA",
    badge: "Safari Privado & Conservación",
    bannerImg: "./assets/sudafrica-main.jpg",
    desc: "Rastreo de fauna salvaje en reservas privadas del Gran Kruger, vuelos escénicos en helicóptero sobre Cape Town y el refinamiento de los viñedos históricos de Franschhoek.",
    sanctuary: {
      title: "Singita Lebombo & Delaire Graff Estate",
      desc: "Arquitectura biófila suspendida sobre el río N’wanetsi en Kruger. Villas privadas con alberca de inmersión, bodegas privadas y servicio de mayordomía 24/7.",
      aviation: "Cessna Grand Caravan & Eurocopter B3",
      dining: "Menú degustación maridado & Chef privado",
      guide: "Guía Naturalista Senior & Fotógrafo VIP",
      duration: "10 Días / 9 Noches"
    },
    highlights: [
      {
        day: "Días 1 - 4",
        title: "Safari Rastreador en Concesión Privada Lebombo",
        desc: "Acceso exclusivo a 13,000 hectáreas vírgenes sin otros vehículos. Rastreo nocturno de leopardos con cámaras termográficas de vanguardia y botánicos locales.",
        img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
      },
      {
        day: "Días 5 - 7",
        title: "Cena en la Boma & Convivencia con Rangers Zulu",
        desc: "Encuentro privado bajo las estrellas africanas con líderes de conservación y guardianes tradicionales para comprender la cosmovisión y protección del hábitat.",
        img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80"
      },
      {
        day: "Días 8 - 10",
        title: "Helicóptero sobre la Península del Cabo & Catas Secretas",
        desc: "Sobrevuelo privado de Table Mountain hacia las bodegas familiares de Franschhoek, con apertura de añadas históricas no comerciales.",
        img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    code: "AUD",
    name: "AUSTRALIA",
    badge: "Outback Salvaje & Gran Barrera",
    bannerImg: "./assets/australia-main.jpg",
    desc: "Aventura aérea sobre las formaciones rocosas de Bungle Bungle, expedición en la Gran Barrera de Coral y estadía en lodges ultrasecretos del Outback.",
    sanctuary: {
      title: "El Questro Homestead & Lizard Island Resort",
      desc: "Ubicado al borde del acantilado sobre el desfiladero del río Chamberlain, con acceso privado y solo para 18 huéspedes simultáneos en toda la reserva.",
      aviation: "Pilatus PC-12 Turbohélice Privado",
      dining: "Gastronomía australiana de mar a la mesa",
      guide: "Biólogo Marino y Custodio Indígena",
      duration: "12 Días / 11 Noches"
    },
    highlights: [
      {
        day: "Días 1 - 4",
        title: "Gargantas Ancestrales & Vuelo sobre Kimberley",
        desc: "Exploración en helicóptero privado con aterrizaje en cascadas vírgenes donde ningún camino terrestre tiene acceso. Baño privado en piscinas naturales sagradas.",
        img: "./assets/australia-main.jpg"
      },
      {
        day: "Días 5 - 8",
        title: "Inmersión Marina en el Arrecife Exterior Secreto",
        desc: "Navegación en catamarán privado hacia los puntos de buceo más pristinos de la Gran Barrera, guiados por biólogos marinos de referencia mundial.",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
      },
      {
        day: "Días 9 - 12",
        title: "Arte Rupestre Aborigen de 40,000 años",
        desc: "Acceso con permisos especiales a galerías de arte sagrado en roca guiado por ancianos de la comunidad aborigen local.",
        img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    code: "IDR",
    name: "INDONESIA",
    badge: "Archipiélago Privado & Borneo",
    bannerImg: "./assets/indonesia-main.jpg",
    desc: "Navegación privada en velero Phinisi de ultra-lujo por las aguas cristalinas de Raja Ampat y rescate ético de orangutanes en la selva de Tanjung Puting.",
    sanctuary: {
      title: "Aqua Blu Expedition Yacht & Nihi Sumba",
      desc: "Un yate de expedición naval británico de 60 metros transformado en palacio flotante de 15 suites, fondeado en lagunas privadas de Raja Ampat.",
      aviation: "Hidroavión privado Twin Otter",
      dining: "Fusión indonesia de alta escuela por Master Chef",
      guide: "Expedicionista National Geographic",
      duration: "14 Días / 13 Noches"
    },
    highlights: [
      {
        day: "Días 1 - 5",
        title: "Navegación por el Laberinto Kárstico de Raja Ampat",
        desc: "Kayaquismo en lagunas bioluminiscentes nocturnas, buceo con mantas gigantes oceánicas y fondeo en playas sin huella humana previa.",
        img: "./assets/indonesia-main.jpg"
      },
      {
        day: "Días 6 - 9",
        title: "Santuario de Orangutanes en Barco Klotok VIP",
        desc: "Navegación por los ríos de Borneo para observar orangutanes en su hábitat natural, apoyando directamente la preservación de la selva virgen.",
        img: "./assets/orangutan1.jpg"
      },
      {
        day: "Días 10 - 14",
        title: "Retiro y Caballos Salvajes en Nihi Sumba",
        desc: "Villas sobre acantilados con vistas al Índico, spa safari en el valle de Nihi Oka y conexión con las tradiciones de la isla de Sumba.",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    code: "CRC",
    name: "COSTA RICA",
    badge: "Selva Virgen & Lujo Biófilo",
    bannerImg: "./assets/costarica-main.jpg",
    desc: "El corazón de la mayor biodiversidad del continente americano. Santuarios eco-lujosos en la Península de Osa y villas termales al pie de volcanes milenarios.",
    sanctuary: {
      title: "Lapa Rios Rainforest Sanctuary & Nayara Tented Camp",
      desc: "Bungalows abiertos a 100 metros sobre el mar dentro de una reserva privada de 1,000 hectáreas. 100% libre de plásticos y energía solar de última generación.",
      aviation: "Chárter privado Sansa Caravan & Bell 407",
      dining: "Alta cocina costarricense orgánica de huerto propio",
      guide: "Biólogo tropical galardonado",
      duration: "9 Días / 8 Noches"
    },
    highlights: [
      {
        day: "Días 1 - 3",
        title: "Caminata de Dosel y Fauna en Península de Osa",
        desc: "Rastreo matutino de jaguares, guacamayas rojas y perezosos con telemetría de audio bioacústico guiada por naturalistas residentes.",
        img: "./assets/costarica-main.jpg"
      },
      {
        day: "Días 4 - 6",
        title: "Aguas Termales Minerales Privadas en Nayara Tented",
        desc: "Tiendas estilo safari africano con albercas privadas de aguas termales volcánicas inmersas en la espesura del bosque húmedo de Arenal.",
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
      },
      {
        day: "Días 7 - 9",
        title: "Buceo de Expedición en la Isla del Caño",
        desc: "Encuentro con tiburones de arrecife, tortugas carey y delfines en una de las reservas marinas más ricas del Pacífico este tropical.",
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    code: "SEK",
    name: "SUECIA",
    badge: "Expedición Ártica & Auroras",
    bannerImg: "./assets/suecia-main.jpg",
    desc: "Caza astronómica guiada de auroras boreales en Abisko, safaris en trineo de huskies sobre lagos congelados y arquitectura de diseño escandinavo en Laponia.",
    sanctuary: {
      title: "Arctic Bath Hotel & Treehotel Biosphere",
      desc: "Hotel flotante sobre el río Lule congelado con saunas de madera de abedul, spa ártico y suites de diseño bioclimático suspendidas entre pinos centenarios.",
      aviation: "Transfer privado en helicóptero bimotor",
      dining: "Gastronomía nórdica salvaje con Estrella Verde Michelin",
      guide: "Astrofísico & Musher Lapón Profesional",
      duration: "8 Días / 7 Noches"
    },
    highlights: [
      {
        day: "Días 1 - 3",
        title: "Observación Astronómica en la Estación Abisko",
        desc: "El microclima con menos nubes del Ártico para presenciar auroras boreales en tiempo real con telescopios y cámaras infrarrojas.",
        img: "./assets/suecia-main.jpg"
      },
      {
        day: "Días 4 - 6",
        title: "Travesía en Trineo de Huskies & Nieve Virgen",
        desc: "Conduce tu propio tiro de perros huskies por valles árticos deshabitados con almuerzo caliente en lavvu tradicional sami junto a una fogata.",
        img: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80"
      },
      {
        day: "Días 7 - 8",
        title: "Sauna Tradicional Ártica & Baño de Hielo Revitalizante",
        desc: "Rituales de bienestar nórdico guiados por terapeutas locales combinando calor seco de leña y sumersión terapéutica en agua helada del río.",
        img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

let selectedExpIndex = 0;

// DOM Elements
const tabBtns = document.querySelectorAll(".exp-tab-btn");
const destBanner = document.getElementById("destBanner");
const destBadge = document.getElementById("destBadge");
const destTitle = document.getElementById("destTitle");
const destDesc = document.getElementById("destDesc");
const destCtaBtn = document.getElementById("destCtaBtn");
const expCardsGrid = document.getElementById("expCardsGrid");
const sanctuaryTitle = document.getElementById("sanctuaryTitle");
const sanctuaryDesc = document.getElementById("sanctuaryDesc");
const specAviation = document.getElementById("specAviation");
const specDining = document.getElementById("specDining");
const specGuide = document.getElementById("specGuide");
const specDuration = document.getElementById("specDuration");
const siteHeader = document.getElementById("siteHeader");
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

function renderExperience(index) {
  const exp = experiencesData[index];
  if (!exp) return;

  // Update tabs active state
  tabBtns.forEach((btn, idx) => {
    btn.classList.toggle("active", idx === index);
  });

  // Update Banner
  destBanner.style.backgroundImage = `url('${exp.bannerImg}')`;
  destBadge.textContent = exp.badge;
  destTitle.textContent = exp.name;
  destDesc.textContent = exp.desc;
  destCtaBtn.href = `reserva.html?dest=${exp.code}`;

  // Update Sanctuary HUD
  sanctuaryTitle.textContent = exp.sanctuary.title;
  sanctuaryDesc.textContent = exp.sanctuary.desc;
  specAviation.textContent = exp.sanctuary.aviation;
  specDining.textContent = exp.sanctuary.dining;
  specGuide.textContent = exp.sanctuary.guide;
  specDuration.textContent = exp.sanctuary.duration;

  // Render 3 Highlight Cards
  expCardsGrid.innerHTML = "";
  exp.highlights.forEach(hl => {
    const card = document.createElement("article");
    card.className = "exp-detail-card";
    card.innerHTML = `
      <div class="exp-card-img-box">
        <img src="${hl.img}" alt="${hl.title}" class="exp-card-img">
        <span class="exp-day-pill">${hl.day}</span>
      </div>
      <div class="exp-card-body">
        <h3>${hl.title}</h3>
        <p>${hl.desc}</p>
      </div>
    `;
    expCardsGrid.appendChild(card);
  });
}

// Tab Click Handlers
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const idx = parseInt(btn.getAttribute("data-index"), 10);
    selectedExpIndex = idx;
    renderExperience(idx);
  });
});

// Scroll Header & Mobile Menu
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    siteHeader?.classList.add("scrolled");
  } else {
    siteHeader?.classList.remove("scrolled");
  }
});

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// Initial Render
renderExperience(0);
console.log("Indaba Experiences Controller Loaded.");
