'use client';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const navVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 py-3 ${ // Py-3 fixed always to remove shrinking effect
        isScrolled
          ? 'bg-[#050811]/90 backdrop-blur-lg border-b border-cyan-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-[#0a0f1c]/50 backdrop-blur-md border-b border-slate-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed justify-between to justify-center. Keep justify-between on desktop: md:justify-between */}
        <div className="flex justify-center md:justify-between items-center">

          {/* Added justify-center for mobile brand centering */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={navVariants} 
            className="flex items-center justify-center md:justify-start gap-3 md:gap-4"
          >

            {/* --- LOGO SUPERPUESTO (Fondo Transparente) --- */}
            {/* Preserved User's exact values: w-12/md:w-20 */}
            <div className="relative flex items-center w-12 md:w-20 h-10 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Inversiones Galiang Logo"
                // INSTRUCCIONES PARA AJUSTAR TAMAÑO:
                // 1. Cambia w-[100px] (móvil) o md:w-[125px] (PC) para hacerlo más grande o pequeño.
                // 2. Si al hacerlo más grande se monta mucho sobre el texto, ajusta el -left-4 para moverlo más a la izquierda.
                // Preserved User's exact absolute sizes
                className="absolute w-[100px] md:w-[110px] h-auto max-w-none -left-4 md:-left-2 top-1/2 -translate-y-1/2 drop-shadow-lg"
              />
            </div>

            {/* Texto de la Marca (Con z-10 para que quede por encima si el logo lo toca) */}
            {/* Added text-center for mobile, md:text-left for desktop */}
            <div className="flex flex-col justify-center z-10 text-center md:text-left">
              <span className="font-extrabold text-lg md:text-xl tracking-tight text-white leading-none mb-1">
                Inversiones Galiang <span className="text-cyan-400 text-xs font-mono font-normal">C.A.</span>
              </span>
              <span className="text-[9px] md:text-[10px] text-slate-400 font-mono tracking-widest hidden sm:block">
                CENTRO_DE_DESARROLLO
              </span>
            </div>
          </motion.div>

          {/* --- ENLACES DE ESCRITORIO --- */}
          <div className="hidden md:flex items-center space-x-2">

            {['EMPRESA', 'CLIENTES', 'SERVICIOS'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group px-4 py-2 text-sm font-medium font-mono text-slate-400 transition-colors hover:text-cyan-400"
              >
                <span className="relative z-10">/{item}</span>
                <span className="absolute inset-x-2 bottom-0 h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              </a>
            ))}

            <div className="pl-4 ml-2 border-l border-slate-700/50">
              <a
                href="#contacto"
                className="group relative inline-flex items-center gap-2 px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-mono font-bold hover:bg-cyan-400 hover:text-[#050811] transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                <Terminal className="h-4 w-4" />
                <span>CONTACTO</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
};