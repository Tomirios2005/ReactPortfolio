import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Cpu, Coffee, Key, Terminal, Cloud, Layers, Zap } from 'lucide-react';
import type { Proyecto } from '../../types/Index';

const techIcon = (tech: string) => {
  const normalized = tech.toLowerCase();
  if (normalized.includes('react')) return <Cpu size={12} className="inline-block mr-1" />;
  if (normalized.includes('typescript') || normalized.includes('ts')) return <Code size={12} className="inline-block mr-1" />;
  if (normalized.includes('java')) return <Coffee size={12} className="inline-block mr-1" />;
  if (normalized.includes('spring')) return <Zap size={12} className="inline-block mr-1" />;
  if (normalized.includes('mysql') || normalized.includes('postgres') || normalized.includes('mongo')) return <Database size={12} className="inline-block mr-1" />;
  if (normalized.includes('node')) return <Terminal size={12} className="inline-block mr-1" />;
  if (normalized.includes('jwt') || normalized.includes('auth')) return <Key size={12} className="inline-block mr-1" />;
  if (normalized.includes('angular')) return <Layers size={12} className="inline-block mr-1" />;
  if (normalized.includes('openweather') || normalized.includes('weather') || normalized.includes('api')) return <Cloud size={12} className="inline-block mr-1" />;
  return <Code size={12} className="inline-block mr-1" />;
};

const ProyectoCard = ({ proyecto }: { proyecto: Proyecto }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-purple-500/50 transition-all group shadow-lg"
  >
    <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
      {proyecto.icono}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{proyecto.titulo}</h3>
    <p className="text-slate-400 text-sm mb-6 grow leading-relaxed">{proyecto.desc}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {proyecto.tech.map(t => (
        <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-purple-400 bg-purple-500/5 px-2 py-1 rounded-md border border-purple-500/20 flex items-center gap-1">
          {techIcon(t)}
          {t}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      <a href={proyecto.linkGithub} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
        <Github size={20}/>
      </a>
      {proyecto.linkDeployment && (
        <div className='flex gap-4'>
      <a href={proyecto.linkDeployment} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
        <ExternalLink size={20}/>
      </a>
    </div>
        
      )}
    </div>
    
  </motion.div>
);

export default ProyectoCard;