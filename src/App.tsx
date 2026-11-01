import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Github, Briefcase, Kanban, Languages } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiDocker,
  SiAstro,
  SiAngular,
} from "react-icons/si";
import Header from "./components/header/Header";
import ProyectoCard from "./components/card/Card";
import type { Proyecto } from "./types/Index";
import Chat from "./components/llm/Chat";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage?.startsWith("es") ? "es" : "en";
  }, [i18n, i18n.resolvedLanguage]);

  const proyectos: Proyecto[] = [

    {
      titulo: "E-commerce",
      desc: t("projects.ecommerce"),
      tech: ["React", "TypeScript", "Node.js", "Express", "Supabase", "PostgreSQL", "JWT", "MercadoPago API"],
      linkGithub: "https://github.com/Tomirios2005/eCommerceMP",
      linkDeployment: "https://e-commerce-eight-drab-11.vercel.app/",
      icono: <SiReact size={24} />,
    },

    {
      titulo: "Prompt Hub",
      desc: t("projects.prompthub"),
      tech: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "JWT"],
      linkGithub: "https://github.com/Tomirios2005/PromptHub",
      linkDeployment: "https://prompt-hub-ecru.vercel.app/",
      icono: <SiSpringboot size={24} />,
    },
    {
      titulo: "Fintrac",
      desc: t("projects.fintrac"),
      tech: ["React", "TypeScript", "Node.JS", "express", "PostgreSQL", "JWT", "supabase"],
      linkGithub: "https://github.com/Tomirios2005/Gestor-de-gastos",
      icono: <SiNodedotjs size={24} />,
    },
    {
      titulo: "Bank App",
      desc: t("projects.bank"),
      tech: ["MySQL", "Express", "React", "TypeScript"],
      linkGithub: "https://github.com/tomirios2005/banco",
      icono: <SiReact size={24} />,
    },
    {
      titulo: "GameHub",
      desc: t("projects.gamehub"),
      tech: ["React", "Parallax", "Figma", "Canvas"],
      linkGithub:
        "https://github.com/Tomirios2005/TP2-interfaces-react/tree/main",
      linkDeployment: "https://fdezcarlomagno.github.io/TP2-interfaces-react/",
      icono: <SiReact size={24} />,
    },
    {
      titulo: "Scooter Rental System",
      desc: t("projects.scooter"),
      tech: ["Java", "Spring Boot", "MySQL", "MongoDB"],
      linkGithub: "https://github.com/FdezCarlomagno/tpe-microservicios",
      icono: <SiSpringboot size={24} />,
    },
    {
      titulo: "Angular Weather App",
      desc: t("projects.weather"),
      tech: ["Angular", "TypeScript", "OpenWeather API"],
      linkGithub: "https://github.com/Tomirios2005/climaAngular",
      linkDeployment:
        "https://angularclima.vercel.app/",
      icono: <SiAngular size={24} />,
    },
  ];
  const skills = [
    {
      label: "React / TS",
      icon: (
        <span className="flex items-center gap-1.5">
          <SiReact size={22} color="#61DAFB" aria-hidden />
          <SiTypescript size={22} color="#3178C6" aria-hidden />
        </span>
      ),
    },
    { label: "Spring Boot", icon: <SiSpringboot size={22} color="#6DB33F" aria-hidden /> },
    {
      label: "MySQL / PostgreSQL",
      icon: (
        <span className="flex items-center gap-1.5">
          <SiMysql size={22} color="#4479A1" aria-hidden />
          <SiPostgresql size={22} color="#4169E1" aria-hidden />
        </span>
      ),
    },
    { label: "Node.js", icon: <SiNodedotjs size={22} color="#339933" aria-hidden /> },
    { label: "Scrum", icon: <Kanban size={22} color="#7C4DFF" aria-hidden /> },
    { label: t("skills.english"), icon: <Languages size={22} color="#C0392B" aria-hidden /> },
    { label: "Docker", icon: <SiDocker size={22} color="#2496ED" aria-hidden /> },
    { label: "Astro", icon: <SiAstro size={22} color="#FF5D01" aria-hidden /> },
  ];

  const experiencia = [
    {
      rol: t("experience.alpha.role"),
      lugar: "Alpha Efficiency",
      cuando: t("experience.alpha.when"),
      detalle: t("experience.alpha.detail"),
    },
    {
      rol: t("experience.outlier.role"),
      lugar: "Outlier",
      cuando: t("experience.outlier.when"),
      detalle: t("experience.outlier.detail"),
    },
    {
      rol: t("experience.mercor.role"),
      lugar: t("experience.mercor.place"),
      cuando: t("experience.mercor.when"),
      detalle: t("experience.mercor.detail"),
    },
    {
      rol: t("experience.lua.role"),
      lugar: "Wolves RP / FiveM",
      cuando: t("experience.lua.when"),
      detalle: t("experience.lua.detail"),
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
          <p className="text-base md:text-lg text-purple-300 font-medium mb-3 max-w-2xl mx-auto">
            {t("hero.role")}
          </p>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light mb-8">
            {t("hero.lead")}
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
              {t("hero.viewProjects")}
            </button>
            <a
              href="mailto:tomirios2005@gmail.com"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all font-semibold border border-slate-700"
            >
              {t("hero.contact")}
            </a>
            {/* <a
              href="/CV.pdf"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all font-semibold border border-slate-700"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a> */}
          </div>
        </motion.div>
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </section>
      <Chat />

      {/* ABOUT ME */}
      <section id="about" className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t("about.title")}</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              {t("about.p1")}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              {t("about.p2")}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t("about.p3")}
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-3">
            {skills.map(({ label, icon }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-2.5 py-4 px-2 bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl text-center text-sm font-medium transition-colors cursor-default"
              >
                {icon}
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">{t("experience.title")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experiencia.map((job) => (
              <div
                key={job.rol + job.lugar}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3 text-purple-400">
                  <Briefcase size={18} />
                  <span className="text-xs uppercase tracking-widest font-bold">
                    {job.cuando}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{job.rol}</h3>
                <p className="text-purple-300 mb-3">{job.lugar}</p>
                <p className="text-slate-400 leading-relaxed">{job.detalle}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-slate-400">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3">{t("education.title")}</h3>
              <p className="text-white">TUDAI — UNICEN, Tandil</p>
              <p className="text-sm mb-2">{t("education.when")}</p>
              <p className="text-sm">{t("education.detail")}</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3">{t("certs.title")}</h3>
              <ul className="text-sm space-y-2">
                <li>{t("certs.pilot")}</li>
                <li>{t("certs.argentina")}</li>
                <li>{t("certs.web")}</li>
                <li>{t("certs.efset")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="py-16 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">{t("projects.title")}</h2>
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
            {t("footer.rights", { year: new Date().getFullYear() })}
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
              href="https://www.linkedin.com/in/tomas-rios-abab09217"
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
