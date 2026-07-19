'use client';
import { motion, Variants } from 'framer-motion';
import { Code2, CheckCircle, Network } from 'lucide-react';

const fadeInUp: Variants = { 
  hidden: { opacity: 0, y: 40 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
};

const staggerContainer: Variants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } } 
};

export const Servicios = () => {
  return (
    <section id="servicios" className="py-24 border-t border-slate-800/50 relative z-10 bg-[#0c1222]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="mb-16">
          <h2 className="font-mono text-cyan-400 mb-2">{"< CORE_SERVICES />"}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Servicios y Productos</h3>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* TARJETA 1: CONSTRUCCIÓN EN iSERIES */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 bg-[#0a0f1c] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors group">
            <Code2 className="h-10 w-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-bold text-white mb-4">Construcción en iSeries (AS/400)</h4>
            <p className="text-slate-400 mb-6 max-w-2xl">Desarrollo especializado para infraestructuras IBM, permitiendo la modernización y reutilización de servicios en la diversidad de canales actuales.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-[#0c1222] p-3 rounded-lg border border-slate-800"><CheckCircle className="h-5 w-5 text-emerald-400" /><span className="font-mono text-sm text-slate-300">Lenguaje Nativo (RPGLE/CL)</span></div>
              <div className="flex items-center gap-3 bg-[#0c1222] p-3 rounded-lg border border-slate-800"><CheckCircle className="h-5 w-5 text-emerald-400" /><span className="font-mono text-sm text-slate-300">Servicios Dispatcher</span></div>
            </div>
          </motion.div>

          {/* TARJETA 2: CONEXIONES */}
          <motion.div id="productos" variants={fadeInUp} className="bg-[#0a0f1c] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors group">
            <Network className="h-10 w-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold text-white mb-4">Conexiones a Sistemas</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Herramientas puente para ecosistemas distribuidos y centralizados. Garantizamos el crecimiento continuo.</p>
          </motion.div>
          
          {/* TARJETA 3: DIAGRAMA ETL MEJORADO */}
          <motion.div variants={fadeInUp} className="lg:col-span-3 bg-[#050811] border border-slate-800 rounded-2xl p-8 lg:p-10 hover:border-cyan-500/50 transition-colors overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-4">Control de Intercambio Automatizado</h4>
                <p className="text-slate-400 leading-relaxed mb-6">Permite administrar y controlar desde una <span className="text-cyan-400 font-semibold">aplicación central</span> todos los procesos de extracción, transformación y carga (ETL).</p>
                <div className="font-mono text-xs text-cyan-400/70 bg-[#0a0f1c] p-4 rounded-lg border border-slate-800 inline-block">
                  <p>{"> INIT_ETL_PROCESS"}</p>
                  <p>{"> EXTRACTING_DB_LEGACY..."}</p>
                  <p className="text-emerald-400">{"> DISTRIBUTING_TO_ENDPOINTS"}</p>
                </div>
              </div>

              {/* NUEVA ANIMACIÓN SVG (El CORE y las Hormigas) */}
              <div className="w-full h-72 bg-[#0a0f1c] rounded-xl border border-slate-800/80 relative flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 500 260" className="w-full h-full drop-shadow-lg overflow-visible">
                  <defs>
                    <filter id="glowSm"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    
                    {/* Plantilla de la Hormiga (Escalada ligeramente para ajustarse al diagrama) */}
                    <g id="miniAnt">
                      <g transform="translate(0, -10) scale(0.85)">
                        <path d="M -8,3 L -12,10 M 0,3 L -2,10 M 8,3 L 12,10" stroke="#3b82f6" fill="none" strokeWidth="1.5" strokeLinecap="round" />
                        <ellipse cx="-10" cy="0" rx="7" ry="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
                        <circle cx="0" cy="0" r="4.5" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
                        <circle cx="8" cy="2" r="3.5" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
                        <path d="M 10,-1 L 14,-5 M 10,1 L 14,-1" stroke="#22d3ee" fill="none" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="9" cy="1" r="1" fill="#22d3ee" filter="url(#glowSm)" />
                        <rect x="-4" y="-8" width="8" height="6" rx="1" fill="#10b981" filter="url(#glowSm)" />
                      </g>
                    </g>
                  </defs>

                  {/* RUTAS BASE (Cables) */}
                  <path d="M 90,130 L 220,130" fill="none" stroke="#1e293b" strokeWidth="3" />
                  <path d="M 280,120 Q 350,70 410,70" fill="none" stroke="#1e293b" strokeWidth="3" />
                  <path d="M 280,140 Q 350,190 410,190" fill="none" stroke="#1e293b" strokeWidth="3" />

                  {/* FLUJOS LUMINOSOS DE DATOS */}
                  <path d="M 90,130 L 220,130" fill="none" stroke="#818cf8" strokeWidth="2" strokeDasharray="6 12" className="animate-flow-fast" filter="url(#glowSm)" />
                  <path d="M 280,120 Q 350,70 410,70" fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="6 12" className="animate-flow" filter="url(#glowSm)" />
                  <path d="M 280,140 Q 350,190 410,190" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="6 12" className="animate-flow" filter="url(#glowSm)" />

                  {/* LAS HORMIGAS EN MOVIMIENTO */}
                  <g><use href="#miniAnt" /><animateMotion dur="2.5s" repeatCount="indefinite" path="M 90,130 L 220,130" rotate="auto" /></g>
                  <g><use href="#miniAnt" /><animateMotion dur="3s" repeatCount="indefinite" path="M 280,120 Q 350,70 410,70" rotate="auto" /></g>
                  <g><use href="#miniAnt" /><animateMotion dur="3.2s" repeatCount="indefinite" path="M 280,140 Q 350,190 410,190" rotate="auto" /></g>

                  {/* 1. NODO ORIGEN: BASE DE DATOS (DB LEGACY) */}
                  <g transform="translate(60, 130)">
                    {/* Cilindro 3D */}
                    <ellipse cx="0" cy="-18" rx="22" ry="8" fill="#0c1222" stroke="#818cf8" strokeWidth="2"/>
                    <path d="M -22,-18 L -22,18 A 22 8 0 0 0 22,18 L 22,-18" fill="#0c1222" stroke="#818cf8" strokeWidth="2"/>
                    <ellipse cx="0" cy="0" rx="22" ry="8" fill="none" stroke="#818cf8" strokeWidth="2" strokeDasharray="2 4" opacity="0.5"/>
                    <circle cx="0" cy="-18" r="3" fill="#818cf8" filter="url(#glowSm)" className="led-blink"/>
                    <text x="0" y="42" fill="#818cf8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DB_LEGACY</text>
                  </g>

                  {/* 2. NODO CENTRAL: EL CORE ETL */}
                  <g transform="translate(250, 130)">
                    {/* Anillo de protección exterior */}
                    <circle cx="0" cy="0" r="45" fill="#050811" stroke="#1e293b" strokeWidth="2" />
                    {/* Anillo de procesamiento giratorio */}
                    <circle cx="0" cy="0" r="38" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="12 6" className="animate-[spin_10s_linear_infinite]" />
                    {/* Núcleo brillante */}
                    <circle cx="0" cy="0" r="30" fill="#0c1222" stroke="#22d3ee" strokeWidth="3" filter="url(#glowSm)" />
                    {/* Pulso de energía central */}
                    <circle cx="0" cy="0" r="20" fill="#22d3ee" opacity="0.1" className="animate-pulse" />
                    <text x="0" y="4" fill="#22d3ee" fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">ETL</text>
                    <text x="0" y="65" fill="#22d3ee" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CENTRAL CORE</text>
                    {/* LEDs de procesamiento interno */}
                    <circle cx="-12" cy="12" r="2" fill="#10b981" className="led-fast" />
                    <circle cx="12" cy="-12" r="2" fill="#f59e0b" className="led-random" />
                  </g>

                  {/* 3. NODOS DESTINO: WEB & API */}
                  {/* Pantalla WEB */}
                  <g transform="translate(440, 70)">
                    <rect x="-28" y="-18" width="56" height="36" rx="4" fill="#0c1222" stroke="#a78bfa" strokeWidth="2" />
                    <line x1="-15" y1="24" x2="15" y2="24" stroke="#a78bfa" strokeWidth="2"/>
                    <line x1="0" y1="18" x2="0" y2="24" stroke="#a78bfa" strokeWidth="2"/>
                    <text x="0" y="4" fill="#a78bfa" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">WEB</text>
                    <circle cx="-18" cy="-10" r="2" fill="#a78bfa" filter="url(#glowSm)" className="led-blink"/>
                  </g>

                  {/* Nodo API REST */}
                  <g transform="translate(440, 190)">
                    <rect x="-28" y="-18" width="56" height="36" rx="6" fill="#0c1222" stroke="#10b981" strokeWidth="2" />
                    <circle cx="-14" cy="0" r="6" fill="none" stroke="#10b981" strokeWidth="1.5" />
                    <circle cx="-14" cy="0" r="2" fill="#10b981" filter="url(#glowSm)"/>
                    <path d="M -6,0 L 18,0 M 12,-6 L 18,0 L 12,6" fill="none" stroke="#10b981" strokeWidth="1.5" />
                    <text x="0" y="38" fill="#10b981" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">API_REST</text>
                  </g>
                  
                </svg>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};