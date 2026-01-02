/* AutoCraft Garage — UI interactions (kicsi és gyors) */

// Mobil menü toggle
const burger = document.getElementById('burger');
let mobileNav = null;

function createMobileNav() {
  if (mobileNav) return;
  mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  mobileNav.innerHTML = `
    <a href="#home">Kezdőlap</a>
    <a href="#services">Szolgáltatások</a>
    <a href="#about">Rólunk</a>
    <a href="#gallery">Galéria</a>
    <a href="#contact">Elérhetőségek</a>
  `;
  document.body.appendChild(mobileNav);
}

burger?.addEventListener('click', () => {
  createMobileNav();
  mobileNav.classList.toggle('active');
  burger.classList.toggle('open');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile nav after click
      if (mobileNav) mobileNav.classList.remove('active');
    }
  });
});

// Simple contact form placeholder handler
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // lightweight validation example
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    if (!name || !phone) {
      alert('Kérlek add meg a neved és telefonszámod.');
      return;
    }
    alert('Köszönjük! Üzenetedet fogadtuk. (placeholder)');
    form.reset();
  });
}

// "Hívást kérek" gomb hookup (placeholder)
const callBtn = document.getElementById('callBtn');
if (callBtn) {
  callBtn.addEventListener('click', () => {
    alert('Kérjük add meg telefonszámod a visszahíváshoz (placeholder).');
  });
}








const modalData = {
  motor: {
    title: "Motor & Váltó",
    text: "Teljes körű motor és váltószerviz: hibakód kiolvasás, mechanikus és elektronikus hibaelhárítás, kuplung, vezérlés, felújítás és finombeállítás. A műhely minden típuson és problémán dolgozik."
  },
  fek: {
    title: "Fék & Futómű",
    text: "Fékbetét, tárcsa, fékcső csere, futómű javítás és állítás, lengéscsillapítók, szilentek, teljes geometriai ellenőrzés. Biztonság és stabil vezetés minden körülmény között."
  },
  klima: {
    title: "Klíma & Elektromos",
    text: "Klímarendszer töltés és javítás, szivárgáskeresés, akkumulátor, indítási és töltési problémák, teljes elektromos diagnosztika. Modern műszerekkel, gyors megoldásokkal."
  }
};

const overlay = document.getElementById("modalOverlay");
const titleEl = document.getElementById("modalTitle");
const textEl = document.getElementById("modalText");

document.querySelectorAll(".card-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    const type = btn.dataset.modal;
    titleEl.textContent = modalData[type].title;
    textEl.textContent = modalData[type].text;

    overlay.classList.add("active");
  });
});

document.getElementById("modalClose").onclick = () => overlay.classList.remove("active");
overlay.onclick = e => {
  if (e.target === overlay) overlay.classList.remove("active");
};



const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");

if (!localStorage.getItem("cookiesAccepted")) {
  cookieBanner.classList.add("show");
}

acceptCookies.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookieBanner.classList.remove("show");
});
