import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Database, Code2, Mail, Linkedin } from 'lucide-react';
import Header from './components/header/Header';
import ProyectoCard from './components/card/Card';
import type { Proyecto } from './types/Index';

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  const proyectos: Proyecto[] = [

    {
      titulo: "Prompt Hub",
      desc: "API REST for an e-commerce application with Spring Boot, JWT authentication, and MySQL database.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "JWT"],
      linkGithub: "https://github.com/Tomirios2005/PromptHub",
      linkDeployment: "https://prompt-hub-ecru.vercel.app/",
      icono: <Cpu size={24} />
    },
    {
      titulo: "Bank app",
      desc: "Small React application with accounts and money with functional transfers and a node.js/express backend.",
      tech: ["MySql, Express", "React", "TypeScript"],
      linkGithub: "https://github.com/tomirios2005/banco",
      icono: <Cpu size={24} />
    },
    {
      titulo:"GameHub",
      desc: "FrontEnd application for videogame lovers that consumes an apiRest. With a React frontend and two functional games",
      tech: ["React","paralax effects", "figma", "canvas"],
      linkGithub: "https://github.com/Tomirios2005/TP2-interfaces-react/tree/main",
      linkDeployment: "https://fdezcarlomagno.github.io/TP2-interfaces-react/",
      icono: <Cpu size={24} />
    
    },
    {
      titulo: "Scooter rental system",
      desc: "Spring boot api for renting and managing scooters, with MySQL and mongoDB database",
      tech: ["Java", "Spring Boot", "MySQL"],
      linkGithub: "https://github.com/FdezCarlomagno/tpe-microservicios",
      icono: <Database size={24} />
    },
    {
      titulo: "Angular weather app",
      desc: "Angular application with real time weather from an API",
      tech: ["Angular", "JavaScript", "OpenWeather API"],
      linkGithub: "https://github.com/Tomirios2005/climaAngular",
      linkDeployment: "https://angularclima-hix5bv9h5-tomirios2005s-projects.vercel.app/",
      icono: <Code2 size={24} />
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-purple-500/30 overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="text-center z-10 px-6">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
            TOMÁS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">RÍOS</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Software Developer Student @ <span className="text-white">UNICEN</span> & AI Trainer
          </p>
        </motion.div>
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </section>

      {/* SOBRE MÍ */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Estudio la <span className="text-white">TUDAI</span> mientras entreno modelos de IA. Combino la rigurosidad lógica de la UNICEN con la innovación de la inteligencia artificial.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {['React/TS', 'Spring Boot', 'MySQL/PostgreSQL', "PHP","Scrum", 'English C1'].map(skill => (
              <div key={skill} className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center font-bold">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-24 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Proyectos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {proyectos.map((p, i) => <ProyectoCard key={i} proyecto={p} />)}
          </div>
        </div>
      </section>

      {/* FOOTER */}
              
      <footer className="py-20 text-center border-t border-slate-900">
        <div className="flex justify-center gap-6">
          <a href="mailto:tomirios2005@gmail.com" className="p-4 bg-slate-900 rounded-full hover:text-purple-500 transition-all border border-slate-800"><Mail size={24} /></a>
          <a href="https://linkedin.com/in/tomas-rios-abab09217" className="p-4 bg-slate-900 rounded-full hover:text-purple-500 transition-all border border-slate-800"><Linkedin size={24} /></a>
        </div>
      </footer>
    </div>
  );
};

export default App;