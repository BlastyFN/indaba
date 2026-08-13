// ==========================================================================
// INDABA LUXURY TRAVEL - RESERVATION CONTROLLER (RESERVA.JS)
// ==========================================================================

const hoy = new Date();
const destino = document.getElementById("destinos");
const fecha = document.getElementById("fecha");
const presupuesto = document.getElementById("presupuesto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const exchTxt = document.getElementById("exch");
const currencyBox = document.getElementById("currencyBox");
const currencyRateText = document.getElementById("currencyRateText");
const currencyTierBadge = document.getElementById("currencyTierBadge");
const reservaForm = document.getElementById("reservaForm");
const siteHeader = document.getElementById("siteHeader");
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

// Fallback rates if API fails
let tasas = {
  USD: 1,
  ZAR: 18.5,
  AUD: 1.54,
  IDR: 15800,
  CRC: 512,
  SEK: 10.45
};

// Set Min Date to Today
const yyyy = hoy.getFullYear();
const mm = String(hoy.getMonth() + 1).padStart(2, "0");
const dd = String(hoy.getDate()).padStart(2, "0");
fecha.setAttribute("min", `${yyyy}-${mm}-${dd}`);

// Check URL Params for preselected destination
const urlParams = new URLSearchParams(window.location.search);
const destParam = urlParams.get("dest");
if (destParam && destino) {
  destino.value = destParam;
}

// Fetch Live Exchange Rates
fetch("https://open.er-api.com/v6/latest/USD")
  .then(res => res.json())
  .then(data => {
    if (data && data.rates) {
      tasas = data.rates;
      console.log("Live exchange rates loaded:", tasas);
      calculateLiveCurrency();
    }
  })
  .catch(err => {
    console.warn("Using fallback exchange rates:", err);
  });

function calculateLiveCurrency() {
  const moneda = destino.value;
  const usdAmount = parseFloat(presupuesto.value);

  if (moneda && !isNaN(usdAmount) && usdAmount > 0) {
    currencyBox.style.display = "flex";
    const rate = tasas[moneda] || 1;
    const totalLocal = (rate * usdAmount).toLocaleString("es-MX", {
      maximumFractionDigits: 2
    });

    exchTxt.textContent = `${totalLocal} ${moneda}`;
    currencyRateText.textContent = `1 USD = ${rate.toFixed(2)} ${moneda} · Conversión aproximada:`;

    // Dynamic Tier logic
    if (usdAmount >= 30000) {
      currencyTierBadge.textContent = "Nivel Sugerido: Royal Villa & Vuelo Privado Dedicado (Tier Ultra)";
      currencyTierBadge.style.color = "var(--gold-light)";
    } else if (usdAmount >= 15000) {
      currencyTierBadge.textContent = "Nivel Sugerido: Signature Suite & Transfers en Helicóptero (Tier 1)";
      currencyTierBadge.style.color = "var(--emerald-accent)";
    } else {
      currencyTierBadge.textContent = "Nivel Sugerido: Atelier Classic Luxury & Lodges de Autor";
      currencyTierBadge.style.color = "var(--text-secondary)";
    }
  } else {
    currencyBox.style.display = "none";
  }
}

// Input Listeners
presupuesto.addEventListener("input", calculateLiveCurrency);
destino.addEventListener("change", calculateLiveCurrency);

// Form Submission & Validation
reservaForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let valid = true;

  // Name Validation
  if (!nombre.value.trim() || nombre.value.trim().length < 3) {
    nombre.classList.add("error");
    valid = false;
  } else {
    nombre.classList.remove("error");
  }

  // Email Validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(correo.value.trim())) {
    correo.classList.add("error");
    valid = false;
  } else {
    correo.classList.remove("error");
  }

  // Phone Validation
  const phonePattern = /^[\d\s+()-]{8,20}$/;
  if (!phonePattern.test(telefono.value.trim())) {
    telefono.classList.add("error");
    valid = false;
  } else {
    telefono.classList.remove("error");
  }

  // Destination Validation
  if (!destino.value) {
    destino.classList.add("error");
    valid = false;
  } else {
    destino.classList.remove("error");
  }

  // Date Validation
  if (!fecha.value) {
    fecha.classList.add("error");
    valid = false;
  } else {
    fecha.classList.remove("error");
  }

  // Budget Validation
  if (!presupuesto.value || parseFloat(presupuesto.value) <= 0) {
    presupuesto.classList.add("error");
    valid = false;
  } else {
    presupuesto.classList.remove("error");
  }

  if (valid) {
    const destName = destino.options[destino.selectedIndex].text;
    Swal.fire({
      title: "Solicitud de Itinerario Recibida",
      html: `
        <div style="text-align: left; font-family: 'Ubuntu', sans-serif; font-size: 0.95rem; color: #CBD5E1; line-height: 1.7;">
          <p style="margin-bottom: 0.8rem;">Estimado/a <strong style="color: #F3E5AB;">${nombre.value}</strong>,</p>
          <p>Hemos ingresado tu solicitud al atelier de diseño de expediciones.</p>
          <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(212,175,55,0.3); margin: 1rem 0;">
            <p><strong style="color: #FFFFFF;">Destino:</strong> ${destName}</p>
            <p><strong style="color: #FFFFFF;">Fecha Estimada:</strong> ${fecha.value}</p>
            <p><strong style="color: #FFFFFF;">Inversión Proyectada:</strong> $${parseFloat(presupuesto.value).toLocaleString()} USD</p>
          </div>
          <p>Un Concierge Ejecutivo te contactará a través de <strong style="color: #00E5BE;">${correo.value}</strong> o vía telefónica en menos de 2 horas hábiles.</p>
        </div>
      `,
      icon: "success",
      background: "#0D1219",
      color: "#FFFFFF",
      confirmButtonText: "Entendido, Gracias",
      confirmButtonColor: "#D4AF37",
      customClass: {
        popup: "glass-card",
        title: "brand-font"
      }
    });

    reservaForm.reset();
    currencyBox.style.display = "none";
  } else {
    Swal.fire({
      title: "Por favor revisa los campos",
      text: "Asegúrate de completar todos los campos requeridos con información válida.",
      icon: "warning",
      background: "#0D1219",
      color: "#FFFFFF",
      confirmButtonColor: "#D4AF37"
    });
  }
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

console.log("Indaba Reservation Atelier Controller Loaded.");
