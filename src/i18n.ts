import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const en = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
  },
  hero: {
    role: "Full Stack Developer | React · TypeScript · Node.js · Java · Spring Boot",
    lead: "Web developer at Alpha Efficiency, based in Tandil. I ship React and TypeScript interfaces on top of REST APIs, and I have hands-on experience evaluating and training LLMs.",
    viewProjects: "View Projects",
    contact: "Contact Me",
  },
  chat: {
    kicker: "AI Assistant",
    title: "Ask me a question",
    subtitle:
      "Ask about Tomás's stack, projects, and experience. Built for recruiters, answered from his profile.",
    question: "Question",
    placeholder: "Stack, projects, availability...",
    thinking: "Thinking...",
    sending: "Sending...",
    send: "Send",
    response: "Response",
    generating: "Generating response...",
    empty: "Your response will appear here after submitting the question.",
    error:
      "Sorry, I couldn't reach Tomás's assistant. Try again in a moment.",
  },
  about: {
    title: "About me",
    p1: "I'm a full stack developer in Tandil, Argentina. I build applications end to end: REST APIs and relational data (PostgreSQL, MySQL) through to interactive interfaces in React and TypeScript. I work in Agile/Scrum and check quality with JUnit, TestNG, and Postman.",
    p2: "Since July 2026 I've been a web developer at Alpha Efficiency, a Chicago-based digital agency, working remotely. Before that I trained and reviewed large language models at Outlier and Mercor: prompt-response datasets, evaluation rubrics, and quality review of model outputs in Spanish.",
    p3: "I finished the Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas (TUDAI) at UNICEN. Native Spanish, English C1 (EF SET 74/100). I also hold a private pilot license (ANAC, 2025).",
  },
  skills: {
    english: "English C1",
  },
  experience: {
    title: "Experience",
    alpha: {
      role: "Web Developer",
      when: "Jul 2026 — Present · Remote",
      detail:
        "Engineering role at a Chicago-based digital agency. I build and maintain web products while working remotely from Tandil.",
    },
    outlier: {
      role: "AI Trainer",
      when: "Feb 2026 — May 2026 · Remote",
      detail:
        "Trained LLMs with prompt-response datasets, reviewed generated code and text for accuracy and safety, and stress-tested behavior with prompt engineering.",
    },
    mercor: {
      role: "AI Reviewer / Evaluator",
      place: "Outlier via Mercor",
      when: "Feb 2026 — Apr 2026 · Remote",
      detail:
        "Scored Spanish LLM outputs for accuracy, coherence, and reasoning. Wrote evaluation rubrics and golden trajectories for RLHF, including health and ecommerce tasks.",
    },
    lua: {
      role: "Lua Developer",
      when: "Nov 2021 — Mar 2022",
      detail:
        "Lua gameplay scripts for a live multiplayer server, plus MySQL schemas and server-side query tuning.",
    },
  },
  education: {
    title: "Education",
    when: "2024 — 2026 · completed",
    detail:
      "University technician degree in software development: OOP in Java, data structures, web development, relational databases, and Agile.",
  },
  certs: {
    title: "Certifications",
    pilot: "Private pilot license — ANAC, Oct 2025",
    argentina: "Front-end — Argentina Programa, Feb 2023",
    web: "Desarrollo Web 1 & 2 — Aprendé Programando, 2022–2023",
    efset: "EF SET English 74/100 — C1, Dec 2022",
  },
  projects: {
    title: "Projects",
    ecommerce:
      "React frontend + Supabase or Node.js/Express backend (configurable) for a simple e-commerce demo. Implements product listing, cart, checkout with MercadoPago integration and admin dashboard.",
    prompthub:
      "React frontend + Java/Spring Boot backend for a prompt management system. Users can create prompts and send them simultaneously to 6 LLMs. Backend integrates with Groq API for fast AI responses.",
    fintrac:
      "React frontend + Node.js/Express backend, PostgreSQL and Supabase Google OAuth2 for tracking income and expenses, with a Groq AI chat.",
    bank: "Full-stack banking demo with accounts and transfers (React + Node.js).",
    gamehub: "React app for videogame fans with API data and mini-games.",
    scooter:
      "Backend API only (no frontend deployed). Spring Boot microservice with MySQL/MongoDB.",
    weather:
      "Real-time weather dashboard using the OpenWeather API, with favourite cities stored in localStorage, built in Angular.",
  },
  footer: {
    rights: "© {{year}} Tomás Ríos. All rights reserved.",
  },
};

const es = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
  },
  hero: {
    role: "Desarrollador Full Stack | React · TypeScript · Node.js · Java · Spring Boot",
    lead: "Desarrollador web en Alpha Efficiency, desde Tandil. Armo interfaces en React y TypeScript sobre APIs REST, y tengo experiencia evaluando y entrenando LLMs.",
    viewProjects: "Ver proyectos",
    contact: "Contactame",
  },
  chat: {
    kicker: "Asistente",
    title: "Haceme una pregunta",
    subtitle:
      "Preguntá por el stack, los proyectos y la experiencia de Tomás. Pensado para reclutadores, responde con su perfil.",
    question: "Pregunta",
    placeholder: "Stack, proyectos, disponibilidad...",
    thinking: "Pensando...",
    sending: "Enviando...",
    send: "Enviar",
    response: "Respuesta",
    generating: "Generando respuesta...",
    empty: "La respuesta va a aparecer acá después de enviar la pregunta.",
    error:
      "Disculpá, no pude conectar con el asistente de Tomás. Volvé a intentar en un rato.",
  },
  about: {
    title: "Sobre mí",
    p1: "Soy desarrollador full stack en Tandil, Argentina. Construyo aplicaciones de punta a punta: APIs REST y datos relacionales (PostgreSQL, MySQL) hasta interfaces en React y TypeScript. Trabajo con Agile/Scrum y cuido la calidad con JUnit, TestNG y Postman.",
    p2: "Desde julio de 2026 soy desarrollador web en Alpha Efficiency, una agencia digital de Chicago, en modalidad remota. Antes entrené y evalué modelos de lenguaje en Outlier y Mercor: datasets de prompt y respuesta, rúbricas de evaluación y revisión de calidad de salidas en español.",
    p3: "Terminé la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas (TUDAI) en la UNICEN. Español nativo, inglés C1 (EF SET 74/100). También tengo licencia de piloto privado (ANAC, 2025).",
  },
  skills: {
    english: "Inglés C1",
  },
  experience: {
    title: "Experiencia",
    alpha: {
      role: "Desarrollador web",
      when: "Jul 2026 — Actualidad · Remoto",
      detail:
        "Rol de ingeniería en una agencia digital con sede en Chicago. Desarrollo y mantengo productos web trabajando en remoto desde Tandil.",
    },
    outlier: {
      role: "Entrenador de IA",
      when: "Feb 2026 — May 2026 · Remoto",
      detail:
        "Entrené LLMs con datasets de prompt y respuesta, revisé código y texto generado en precisión y seguridad, y probé comportamientos con prompt engineering.",
    },
    mercor: {
      role: "Revisor / evaluador de IA",
      place: "Outlier vía Mercor",
      when: "Feb 2026 — Abr 2026 · Remoto",
      detail:
        "Puntué salidas de LLMs en español por precisión, coherencia y razonamiento. Escribí rúbricas y golden trajectories para RLHF, incluidas tareas de salud y ecommerce.",
    },
    lua: {
      role: "Desarrollador Lua",
      when: "Nov 2021 — Mar 2022",
      detail:
        "Scripts Lua de gameplay para un servidor multijugador en vivo, más esquemas MySQL y ajuste de consultas del lado del servidor.",
    },
  },
  education: {
    title: "Educación",
    when: "2024 — 2026 · terminada",
    detail:
      "Tecnicatura universitaria en desarrollo de software: POO en Java, estructuras de datos, desarrollo web, bases relacionales y Agile.",
  },
  certs: {
    title: "Certificaciones",
    pilot: "Licencia de piloto privado — ANAC, oct 2025",
    argentina: "Front-end — Argentina Programa, feb 2023",
    web: "Desarrollo Web 1 y 2 — Aprendé Programando, 2022–2023",
    efset: "EF SET English 74/100 — C1, dic 2022",
  },
  projects: {
    title: "Proyectos",
    ecommerce:
      "Frontend en React y backend configurable (Supabase o Node.js/Express) para un e-commerce. Incluye listado de productos, carrito, checkout con MercadoPago y panel de administración.",
    prompthub:
      "Frontend en React y backend en Java/Spring Boot para gestionar prompts. Se pueden enviar a 6 LLMs a la vez. El backend usa la API de Groq.",
    fintrac:
      "Frontend en React y backend en Node.js/Express, PostgreSQL y Google OAuth2 con Supabase, para ingresos y gastos, con chat de Groq.",
    bank: "Demo bancaria full stack con cuentas y transferencias (React + Node.js).",
    gamehub: "App en React para fans de los videojuegos, con datos de una API y minijuegos.",
    scooter:
      "Solo API de backend (sin frontend deployado). Microservicio en Spring Boot con MySQL y MongoDB.",
    weather:
      "Dashboard del clima en tiempo real con la API de OpenWeather y ciudades favoritas en localStorage, hecho en Angular.",
  },
  footer: {
    rights: "© {{year}} Tomás Ríos. Todos los derechos reservados.",
  },
};

void i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  fallbackLng: "en",
  supportedLngs: ["en", "es"],
  interpolation: { escapeValue: false },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

export default i18n;
