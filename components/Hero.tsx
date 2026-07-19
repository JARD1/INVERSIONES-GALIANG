'use client';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

// Curva Bézier del Infinito (Figura 8 perfecta)
const INFINITY_PATH = "M 400,250 C 520,70 730,70 730,250 C 730,430 520,430 400,250 C 280,70 70,70 70,250 C 70,430 280,430 400,250 Z";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden z-10">
      {/* Luces de fondo dinámicas */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-blue-700/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* COLUMNA DE TEXTO */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl z-20">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Ecosistema iSeries Conectado</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Soluciones IT <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">A Prueba Del Futuro.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              Conectamos la robustez de los sistemas legacy con la agilidad del ecosistema moderno. Definimos, diseñamos y ejecutamos la optimización de tus procesos mediante un flujo ETL ininterrumpido.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a href="#contacto" className="group relative px-8 py-4 bg-cyan-500 text-slate-900 font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <span className="relative z-10 flex items-center gap-2">Iniciar Proyecto <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
              </a>
            </motion.div>
          </motion.div>

          {/* COLUMNA DE LA ILUSTRACIÓN (AHORA EL SERVIDOR ES GIGANTESCO) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            // Aumenté aún más la altura del contenedor para que la máquina respire
            className="relative flex items-center justify-center w-full h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[800px] mt-8 lg:mt-0 z-10"
          >
            {/* ViewBox ajustado para abarcar el tamaño colosal de la máquina */}
            <svg viewBox="0 -20 800 540" className="w-full h-full drop-shadow-2xl overflow-visible">
              <defs>
                <filter id="neonGlow"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1e293b" /></linearGradient>
                
                {/* --- PLANTILLA DE LA HORMIGA MECÁNICA (Escalada al 130%) --- */}
                <g id="antBot">
                  <g transform="translate(0, -16) scale(1.3)">
                    {/* Patas */}
                    <path d="M -8,3 L -12,10 M 0,3 L -2,10 M 8,3 L 12,10" stroke="#3b82f6" fill="none" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Cuerpo */}
                    <ellipse cx="-10" cy="0" rx="7" ry="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="4.5" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
                    <circle cx="8" cy="2" r="3.5" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
                    {/* Antenas y Ojo */}
                    <path d="M 10,-1 L 14,-5 M 10,1 L 14,-1" stroke="#22d3ee" fill="none" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="9" cy="1" r="1" fill="#22d3ee" filter="url(#neonGlow)" />
                    {/* Paquete de Datos (Cubo ETL) */}
                    <rect x="-4" y="-8" width="8" height="6" rx="1" fill="#10b981" filter="url(#neonGlow)" />
                  </g>
                </g>
              </defs>

              {/* --- RUTA DEL INFINITO (Cables) --- */}
              <path d={INFINITY_PATH} fill="none" stroke="#1e293b" strokeWidth="6" />
              <path d={INFINITY_PATH} fill="none" stroke="#22d3ee" strokeWidth="3" strokeDasharray="8 16" className="animate-flow" filter="url(#neonGlow)" />

              {/* --- 4 HORMIGAS ANIMADAS CORRIENDO --- */}
              <g><use href="#antBot" /><animateMotion dur="10s" begin="0s" repeatCount="indefinite" path={INFINITY_PATH} rotate="auto" /></g>
              <g><use href="#antBot" /><animateMotion dur="10s" begin="-2.5s" repeatCount="indefinite" path={INFINITY_PATH} rotate="auto" /></g>
              <g><use href="#antBot" /><animateMotion dur="10s" begin="-5s" repeatCount="indefinite" path={INFINITY_PATH} rotate="auto" /></g>
              <g><use href="#antBot" /><animateMotion dur="10s" begin="-7.5s" repeatCount="indefinite" path={INFINITY_PATH} rotate="auto" /></g>

              {/* --- NODOS EXTERNOS (WEB y API) (Escalados al 130%) --- */}
              <g transform="translate(70, 250) scale(1.3)">
                <circle cx="0" cy="0" r="35" fill="#0f172a" stroke="#818cf8" strokeWidth="3" filter="url(#neonGlow)" />
                <text x="0" y="5" fill="#818cf8" fontSize="16" fontFamily="monospace" fontWeight="bold" textAnchor="middle">WEB</text>
              </g>

              <g transform="translate(730, 250) scale(1.3)">
                <circle cx="0" cy="0" r="35" fill="#0f172a" stroke="#10b981" strokeWidth="3" filter="url(#neonGlow)" />
                <text x="0" y="5" fill="#10b981" fontSize="16" fontFamily="monospace" fontWeight="bold" textAnchor="middle">API</text>
              </g>

              {/* --- SERVIDOR CENTRAL (GIGANTE: SCALE(2)) --- */}
              {/* Al duplicar su tamaño, ajustamos sus coordenadas (250, -10) para que su centro siga estando exactamente en el cruce de los cables (400, 250) */}
              <g transform="translate(250, -10) scale(2)">
                {/* Gabinete Central */}
                <rect x="0" y="0" width="150" height="260" rx="10" fill="url(#serverGrad)" stroke="#475569" strokeWidth="2" />
                
                {/* Rejillas Superiores */}
                <rect x="15" y="15" width="120" height="30" rx="4" fill="#020617" />
                {[...Array(5)].map((_, i) => (<line key={`vent-${i}`} x1={25 + (i * 25)} y1="20" x2={25 + (i * 25)} y2="40" stroke="#1e293b" strokeWidth="3" />))}
                
                {/* LOGO DEL EQUIPO ACTUALIZADO: IBM POWER11 */}
                <rect x="15" y="60" width="120" height="25" rx="4" fill="#020617" stroke="#334155" />
                <text x="75" y="77" fill="#e2e8f0" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="1" textAnchor="middle">IBM ISERIES</text>
                <circle cx="20" cy="72" r="3" fill="#22d3ee" filter="url(#neonGlow)" className="led-blink" />

                {/* Bahía de Discos Centrales */}
                <rect x="15" y="100" width="120" height="85" rx="4" fill="#020617" stroke="#1e293b" />
                {[...Array(3)].map((_, i) => (
                  <g key={`disk-${i}`}>
                    <rect x="25" y={110 + (i * 25)} width="100" height="12" rx="2" fill="#1e293b" />
                    <circle cx="33" cy={116 + (i * 25)} r="2.5" fill="#10b981" className={`led-${i % 2 === 0 ? 'fast' : 'random'}`} filter="url(#neonGlow)" />
                    <rect x="45" y={114 + (i * 25)} width="70" height="4" rx="1" fill="#0f172a" />
                  </g>
                ))}

                {/* Puertos de Red Inferiores */}
                <rect x="15" y="200" width="120" height="45" rx="4" fill="#020617" stroke="#1e293b" />
                {[...Array(2)].map((_, i) => (
                  <g key={`port-${i}`}>
                    <rect x="30 + (i * 50)" y="210" width="24" height="14" rx="2" fill="#334155" />
                    <rect x="34 + (i * 50)" y="214" width="16" height="6" fill="#0f172a" />
                    <circle cx={42 + (i * 50)} cy="235" r="2" fill="#f59e0b" className="led-random" />
                  </g>
                ))}
              </g>
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
};