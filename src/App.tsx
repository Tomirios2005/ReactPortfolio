import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Database,
  Code2,
  Linkedin,
  Github,
  Monitor,
  Shield,
  Cloud,
} from "lucide-react";
import Header from "./components/header/Header";
import ProyectoCard from "./components/card/Card";
import type { Proyecto } from "./types/Index";

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  const proyectos: Proyecto[] = [
    {
      titulo: "Prompt Hub",
      desc: "REST API for e-commerce with Spring Boot, JWT auth, and PostgreSQL. Includes docs and collection.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "JWT"],
      linkGithub: "https://github.com/Tomirios2005/PromptHub",
      linkDeployment: "https://prompt-hub-ecru.vercel.app/",
      icono: <Monitor size={24} />,
    },
    {
      titulo: "Bank App",
      desc: "Full-stack banking demo with accounts and transfers (React + Node.js).",
      tech: ["MySQL", "Express", "React", "TypeScript"],
      linkGithub: "https://github.com/tomirios2005/banco",
      icono: <Shield size={24} />,
    },
    {
      titulo: "GameHub",
      desc: "React app for videogame fans with API data and mini-games.",
      tech: ["React", "Parallax", "Figma", "Canvas"],
      linkGithub:
        "https://github.com/Tomirios2005/TP2-interfaces-react/tree/main",
      linkDeployment: "https://fdezcarlomagno.github.io/TP2-interfaces-react/",
      icono: <Cloud size={24} />,
    },
    {
      titulo: "Scooter Rental System",
      desc: "Backend API only (no frontend deployed). Spring Boot microservice with MySQL/MongoDB.",
      tech: ["Java", "Spring Boot", "MySQL", "MongoDB"],
      linkGithub: "https://github.com/FdezCarlomagno/tpe-microservicios",
      icono: <Database size={24} />,
    },
    {
      titulo: "Angular Weather App",
      desc: "Real-time weather dashboard using OpenWeather API for real time weather and localstorage for storing favourite cities in Angular",
      tech: ["Angular", "TypeScript", "OpenWeather API"],
      linkGithub: "https://github.com/Tomirios2005/climaAngular",
      linkDeployment:
        "https://angularclima-hix5bv9h5-tomirios2005s-projects.vercel.app/",
      icono: <Code2 size={24} />,
    },
  ];
  const skills = [
    {
      label: "React / TS",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect
            width="32"
            height="32"
            rx="6"
            fill="#61DAFB"
            fillOpacity="0.15"
          />
          <circle cx="16" cy="16" r="3" fill="#61DAFB" />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.5"
            stroke="#61DAFB"
            strokeWidth="1.5"
            fill="none"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.5"
            stroke="#61DAFB"
            strokeWidth="1.5"
            fill="none"
            transform="rotate(60 16 16)"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.5"
            stroke="#61DAFB"
            strokeWidth="1.5"
            fill="none"
            transform="rotate(120 16 16)"
          />
        </svg>
      ),
    },
    {
      label: "Spring Boot",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect
            width="32"
            height="32"
            rx="6"
            fill="#6DB33F"
            fillOpacity="0.15"
          />
          <path
            d="M7 8.5C7 8.5 8.5 7 11 7C13.5 7 14.5 9 16 9C17.5 9 18.5 7 21 7C23.5 7 25 8.5 25 8.5"
            stroke="#6DB33F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7 13C7 13 8.5 11.5 11 11.5C13.5 11.5 14.5 13.5 16 13.5C17.5 13.5 18.5 11.5 21 11.5C23.5 11.5 25 13 25 13"
            stroke="#6DB33F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect x="13" y="16" width="6" height="9" rx="1" fill="#6DB33F" />
          <rect
            x="11"
            y="14"
            width="10"
            height="3"
            rx="1"
            fill="#6DB33F"
            fillOpacity="0.7"
          />
        </svg>
      ),
    },
    {
      label: "MySQL / PostgreSQL",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect
            width="32"
            height="32"
            rx="6"
            fill="#4479A1"
            fillOpacity="0.15"
          />
          <ellipse
            cx="16"
            cy="10"
            rx="9"
            ry="4"
            fill="#4479A1"
            fillOpacity="0.8"
          />
          <path
            d="M7 10v6c0 2.2 4 4 9 4s9-1.8 9-4v-6"
            stroke="#4479A1"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M7 16v6c0 2.2 4 4 9 4s9-1.8 9-4v-6"
            stroke="#4479A1"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
    },
    {
      label: "Node.js",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect
            width="32"
            height="32"
            rx="6"
            fill="#3C873A"
            fillOpacity="0.15"
          />
          <path
            d="M8 22C8 22 9 14 16 14M16 14C23 14 24 22 24 22M16 14V8"
            stroke="#3C873A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="6.5" r="2" fill="#3C873A" />
          <circle cx="8" cy="23.5" r="2" fill="#3C873A" />
          <circle cx="24" cy="23.5" r="2" fill="#3C873A" />
        </svg>
      ),
    },
    {
      label: "Scrum",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect
            width="32"
            height="32"
            rx="6"
            fill="#7C4DFF"
            fillOpacity="0.15"
          />
          <rect
            x="7"
            y="7"
            width="8"
            height="8"
            rx="1.5"
            fill="#7C4DFF"
            fillOpacity="0.7"
          />
          <rect x="17" y="7" width="8" height="8" rx="1.5" fill="#7C4DFF" />
          <rect x="7" y="17" width="8" height="8" rx="1.5" fill="#7C4DFF" />
          <rect
            x="17"
            y="17"
            width="8"
            height="8"
            rx="1.5"
            fill="#7C4DFF"
            fillOpacity="0.4"
          />
        </svg>
      ),
    },
    {
      label: "English C1",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect
            width="32"
            height="32"
            rx="6"
            fill="#C0392B"
            fillOpacity="0.12"
          />
          <rect
            x="6"
            y="8"
            width="20"
            height="16"
            rx="2"
            stroke="#C0392B"
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="6"
            y="8"
            width="8"
            height="16"
            fill="#C0392B"
            fillOpacity="0.15"
            rx="2"
          />
          <text
            x="9.5"
            y="20"
            fontSize="7"
            fontWeight="600"
            fill="#C0392B"
            fontFamily="sans-serif"
          >
            GB
          </text>
          <text
            x="18"
            y="20"
            fontSize="7"
            fontWeight="600"
            fill="#C0392B"
            fillOpacity="0.6"
            fontFamily="sans-serif"
          >
            US
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-purple-500/30 overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-[80vh] flex items-center justify-center py-20"
      >
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="text-center z-10 px-6"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            TOMÁS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              RÍOS
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light mb-8">
            Full-stack developer focused on Java/Spring + React ecosystems.
            Building clean, scalable APIs and UX-driven interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("proyectos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 transition-all font-semibold"
            >
              View Projects
            </button>
            <a
              href="mailto:tomirios2005@gmail.com"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all font-semibold border border-slate-700"
            >
              Contact Me
            </a>
            <a
              href="/CV.pdf"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all font-semibold border border-slate-700"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </motion.div>
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About me</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              I&apos;m a software engineer in training at UNICEN and TUDAI,
              currently improving AI model pipelines and backend systems. My
              focus is on crafting dependable code, clean architecture, and
              efficient team collaboration.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              I love building products that solve real problems, and I&apos;m
              especially passionate about scalable APIs, performance
              optimization, and user-friendly frontend experiences. I&apos;m
              looking for roles in backend/infra teams with room for growth into
              cloud-native microservices.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              What sets me apart is my combination of strong logical thinking
              (from academic projects) and practical delivery (production-like
              deployments). I enjoy mentoring peers and learning new frameworks
              each month.
            </p>
          </motion.div>
          <div className="grid grid-cols-3 gap-3">
            {skills.map(({ label, icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2.5 p-5 bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl text-center text-sm font-medium transition-colors cursor-default"
              >
                {icon}
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="py-16 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {proyectos.map((p, i) => (
              <ProyectoCard key={i} proyecto={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="py-10 text-center border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-4 items-center text-sm text-slate-400">
          <div className="md:text-left">
            © {new Date().getFullYear()} Tomás Ríos. All rights reserved.
          </div>
          <div className="text-center">
            Email:{" "}
            <a
              href="mailto:tomirios2005@gmail.com"
              className="text-purple-400 hover:text-purple-300"
            >
              tomirios2005@gmail.com
            </a>
          </div>
          <div className="flex justify-center md:justify-end gap-3">
            <a
              href="https://github.com/tomirios2005"
              className="bg-slate-900 p-2 rounded-full hover:text-purple-500 transition-all border border-slate-800"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/tomas-rios-abab09217"
              className="bg-slate-900 p-2 rounded-full hover:text-purple-500 transition-all border border-slate-800"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
