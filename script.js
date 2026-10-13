const translations = {
  es: {
    "nav.work": "Portafolio",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Shopify Developer & Ecommerce Builder",
    "hero.title": "Tiendas Shopify rápidas, personalizadas y listas para vender.",
    "hero.text": "Creo experiencias ecommerce con Liquid, CSS personalizado, automatizaciones, Klaviyo y flujos pensados para convertir visitantes en clientes.",
    "hero.ctaPrimary": "Ver portafolio",
    "hero.ctaSecondary": "Trabajemos juntos",
    "hero.metric1": "Secciones a medida",
    "hero.metric2": "Email flows",
    "work.eyebrow": "Portafolio",
    "work.title": "Proyectos y capacidades que vendo todos los días.",
    "work.storeTag": "Tienda Shopify",
    "work.monse": "Experiencia ecommerce de moda con enfoque premium, navegación clara y base Shopify preparada para escalar.",
    "work.madame": "Tienda enfocada en presentación de producto, conversión y una experiencia visual pulida.",
    "work.visit": "Visitar sitio",
    "work.flowTitle": "Automatizaciones con Flow",
    "work.flow": "Reglas para operaciones, segmentación, alertas, etiquetas, prevención de errores y trabajo más rápido del equipo.",
    "work.klaviyoTitle": "Email marketing flows",
    "work.klaviyo": "Flujos de bienvenida, abandono de carrito, post-compra y recuperación con lógica clara y mensajes de marca.",
    "work.customTitle": "Secciones personalizadas",
    "work.custom": "Bloques editables para Shopify OS 2.0, estilos responsive y componentes que el equipo puede mantener.",
    "work.speedTag": "Ejecución",
    "work.speedTitle": "Fast work",
    "work.speed": "Trabajo rápido sin perder orden: entregables concretos, comunicación simple y foco en resolver lo que mueve ventas.",
    "services.eyebrow": "Servicios",
    "services.title": "Todo lo necesario para mejorar una tienda Shopify.",
    "services.setupTitle": "Builds y mejoras de tienda",
    "services.setup": "Landing pages, ajustes de tema, páginas de producto, navegación, performance y responsive QA.",
    "services.codeTitle": "Liquid, CSS y componentes",
    "services.code": "Secciones configurables, estilos a medida y soluciones limpias para necesidades fuera del tema base.",
    "services.growthTitle": "Automatización y retención",
    "services.growth": "Shopify Flow, Klaviyo, email marketing y lógica operativa para ahorrar tiempo y aumentar recompra.",
    "process.eyebrow": "Forma de trabajo",
    "process.title": "Claro, rápido y con criterio comercial.",
    "process.text": "Trabajo con prioridades visibles, entregas cortas y una mezcla de criterio técnico y ecommerce para que cada cambio tenga propósito.",
    "process.step1Title": "Diagnóstico",
    "process.step1": "Reviso la tienda y defino oportunidades.",
    "process.step2Title": "Implementación",
    "process.step2": "Construyo, ajusto y pruebo en mobile primero.",
    "process.step3Title": "Entrega",
    "process.step3": "Dejo cambios listos para usar y mantener.",
    "footer.eyebrow": "Reseñas y contacto",
    "footer.title": "Puedes revisar mi experiencia y escribirme en Upwork o LinkedIn."
  },
  en: {
    "nav.work": "Portfolio",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.eyebrow": "Shopify Developer & Ecommerce Builder",
    "hero.title": "Fast, custom Shopify stores built to sell.",
    "hero.text": "I build ecommerce experiences with Liquid, custom CSS, automations, Klaviyo, and flows designed to turn visitors into customers.",
    "hero.ctaPrimary": "View portfolio",
    "hero.ctaSecondary": "Let's work",
    "hero.metric1": "Custom sections",
    "hero.metric2": "Email flows",
    "work.eyebrow": "Portfolio",
    "work.title": "Projects and skills I deliver every day.",
    "work.storeTag": "Shopify store",
    "work.monse": "A premium fashion ecommerce experience with clear navigation and a Shopify foundation ready to scale.",
    "work.madame": "A product-focused store built around presentation, conversion, and a polished visual experience.",
    "work.visit": "Visit site",
    "work.flowTitle": "Shopify Flow automations",
    "work.flow": "Operational rules for alerts, tagging, segmentation, error prevention, and faster team workflows.",
    "work.klaviyoTitle": "Email marketing flows",
    "work.klaviyo": "Welcome, cart abandonment, post-purchase, and winback flows with clear logic and brand-fit messaging.",
    "work.customTitle": "Custom sections",
    "work.custom": "Editable Shopify OS 2.0 blocks, responsive styling, and components your team can keep using.",
    "work.speedTag": "Execution",
    "work.speedTitle": "Fast work",
    "work.speed": "Quick execution with structure: concrete deliverables, simple communication, and focus on what moves sales.",
    "services.eyebrow": "Services",
    "services.title": "Everything needed to improve a Shopify store.",
    "services.setupTitle": "Store builds and improvements",
    "services.setup": "Landing pages, theme adjustments, product pages, navigation, performance, and responsive QA.",
    "services.codeTitle": "Liquid, CSS, and components",
    "services.code": "Configurable sections, custom styles, and clean solutions for needs beyond the base theme.",
    "services.growthTitle": "Automation and retention",
    "services.growth": "Shopify Flow, Klaviyo, email marketing, and operational logic to save time and increase repeat purchases.",
    "process.eyebrow": "Work style",
    "process.title": "Clear, fast, and commercially minded.",
    "process.text": "I work with visible priorities, short delivery cycles, and a mix of technical and ecommerce judgment so every change has a purpose.",
    "process.step1Title": "Audit",
    "process.step1": "I review the store and define opportunities.",
    "process.step2Title": "Implementation",
    "process.step2": "I build, refine, and test mobile first.",
    "process.step3Title": "Delivery",
    "process.step3": "I leave changes ready to use and maintain.",
    "footer.eyebrow": "Reviews and contact",
    "footer.title": "You can review my experience and message me on Upwork or LinkedIn."
  }
};

const i18nNodes = document.querySelectorAll("[data-i18n]");
const languageButtons = document.querySelectorAll(".lang-button");
const shopifyBadge = document.querySelector(".scroll-shopify");

function setLanguage(language) {
  const dictionary = translations[language] || translations.es;

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = language;
  localStorage.setItem("portfolio-language", language);
}

function animateShopifyBadge() {
  if (!shopifyBadge) return;

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  const travel = Math.min(window.innerHeight * 0.58, 420);
  const y = -progress * travel;
  const rotate = -8 + progress * 34;
  const opacity = 0.92 - progress * 0.18;

  shopifyBadge.style.setProperty("--shopify-rotate", `${rotate}deg`);
  shopifyBadge.style.setProperty("--shopify-opacity", opacity.toFixed(2));
  shopifyBadge.style.translate = `0 ${y}px`;
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener("scroll", animateShopifyBadge, { passive: true });
window.addEventListener("resize", animateShopifyBadge);

setLanguage(localStorage.getItem("portfolio-language") || "es");
animateShopifyBadge();
