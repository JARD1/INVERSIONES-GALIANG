'use client';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

export const Empresa = () => {
  return (
    <section id="empresa" className="py-24 border-t border-slate-800/50 bg-[#0c1222]/80 relative z-10 backdrop-blur-sm overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes assemblyLine {
          0%   { transform: translate(40px, 150px) scale(0.5); opacity: 0; }
          5%   { transform: translate(40px, 150px) scale(1); opacity: 1; }
          12.5% { transform: translate(90px, 110px) rotate(45deg); }
          20%  { transform: translate(140px, 150px) rotate(90deg); }
          25%  { transform: translate(140px, 150px) rotate(90deg); }
          35%  { transform: translate(195px, 110px) rotate(135deg); }
          45%  { transform: translate(250px, 150px) rotate(180deg); }
          50%  { transform: translate(250px, 150px) rotate(180deg); }
          60%  { transform: translate(305px, 110px) rotate(225deg); }
          70%  { transform: translate(360px, 150px) rotate(270deg); }
          75%  { transform: translate(360px, 150px) rotate(270deg); }
          80%  { transform: translate(405px, 130px) rotate(315deg); }
          85%  { transform: translate(450px, 175px) rotate(360deg) scale(1); opacity: 1; }
          90%  { transform: translate(450px, 175px) rotate(360deg) scale(1.5); opacity: 0; }
          100% { transform: translate(40px, 150px) rotate(0deg) scale(0.5); opacity: 0; }
        }

        @keyframes smileHappy {
          0%, 65% { opacity: 0; }
          70%, 90% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes smileNeutral {
          0%, 65% { opacity: 1; }
          70%, 90% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes workingAnt {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        @keyframes armMove {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-30deg); }
        }

        @keyframes beltScroll {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -20; }
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div variants={fadeInUp} className="z-20">
            <h2 className="font-mono text-cyan-400 mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" /> {"< EMPRESA />"}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Sobre Nosotros</h3>
            
            {/* TEXTO RESTAURADO EXACTAMENTE COMO LO PEDISTE */}
            <p className="text-slate-400 mb-6 leading-relaxed">
              Inversiones Galiang, c.a. es mucho más que un simple grupo de profesionales, provee soluciones integrales, ayudan a sus clientes a definir, diseñar y buscar resultados efectivos a sus necesidades de optimización de procesos.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Aproximación completa a nuestros Clientes proporcionándole productos y servicios con un impacto claro y altamente positivo para el negocio en términos de diferenciación.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-[#0a0f1c] border border-slate-700/50 rounded-2xl overflow-hidden flex flex-col h-[380px]">
              <div className="p-6 pb-2 border-b border-slate-800/50 bg-[#050811] z-10 relative">
                <h4 className="text-xl font-bold text-white flex justify-between items-center">
                  <span>Fábrica de Soluciones IT</span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">STATUS: OPTIMAL</span>
                </h4>
              </div>

              <div className="flex-1 w-full relative bg-[#0a0f1c]">
                <svg viewBox="0 0 500 280" className="w-full h-full overflow-visible">
                  <defs>
                    <filter id="glowAnts"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    
                    <g id="workerAnt">
                      <g transform="scale(1.6)">
                        <path d="M -8,5 L -14,14 M 0,5 L -3,14 M 8,5 L 14,14" stroke="#3b82f6" fill="none" strokeWidth="1.5" strokeLinecap="round" />
                        <ellipse cx="-12" cy="0" rx="9" ry="5" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
                        <circle cx="0" cy="0" r="5.5" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
                        <circle cx="10" cy="2" r="4.5" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
                        
                        {/* CASCO DE OBRERO */}
                        <path d="M 5,0 C 5,-5 15,-5 15,0 L 17.5,0 L 17.5,1.5 L 5,1.5 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
                        <path d="M 10,-3 L 10,1" stroke="#ca8a04" strokeWidth="1" opacity="0.5" />
                        
                        <circle cx="11" cy="2" r="1.5" fill="#22d3ee" filter="url(#glowAnts)" />
                        <g style={{ animation: 'armMove 1.5s infinite ease-in-out', transformOrigin: '3px 0px' }}>
                          <path d="M 3,0 C 8,-8 15,-8 18,2" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                      </g>
                    </g>

                    <g id="dataBox">
                      <g transform="translate(-8, -8)">
                        <rect x="0" y="0" width="16" height="16" rx="2" fill="#0f172a" stroke="#10b981" strokeWidth="2" filter="url(#glowAnts)" />
                        <path d="M 4,8 L 12,8 M 8,4 L 8,12" stroke="#10b981" strokeWidth="1.5" />
                      </g>
                    </g>
                  </defs>

                  <g opacity="0.15">
                    <g transform="translate(100, 100)" className="animate-[spin_15s_linear_infinite]">
                      <circle cx="0" cy="0" r="40" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="15 10" />
                      <circle cx="0" cy="0" r="34" fill="#0a0f1c" />
                      <circle cx="0" cy="0" r="15" fill="none" stroke="#3b82f6" strokeWidth="4" />
                    </g>
                    <g transform="translate(380, 70)" className="animate-[spin_20s_linear_infinite_reverse]">
                      <circle cx="0" cy="0" r="60" fill="none" stroke="#22d3ee" strokeWidth="15" strokeDasharray="20 15" />
                      <circle cx="0" cy="0" r="52" fill="#0a0f1c" />
                      <circle cx="0" cy="0" r="20" fill="none" stroke="#22d3ee" strokeWidth="5" />
                    </g>
                  </g>

                  <path d="M 0,200 L 500,200" stroke="#1e293b" strokeWidth="6" />
                  <path d="M 0,200 L 500,200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 10" style={{ animation: 'beltScroll 1s linear infinite' }} />

                  <g transform="translate(40, 160)">
                    <rect x="-25" y="-40" width="50" height="80" rx="4" fill="#050811" stroke="#334155" strokeWidth="2" />
                    <rect x="-15" y="-30" width="30" height="15" rx="2" fill="#0f172a" stroke="#22d3ee" />
                    <circle cx="0" cy="10" r="10" fill="none" stroke="#22d3ee" strokeWidth="2" />
                    <circle cx="0" cy="10" r="3" fill="#22d3ee" filter="url(#glowAnts)" className="animate-pulse" />
                    <text x="0" y="-45" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">GENERADOR</text>
                  </g>

                  <g transform="translate(140, 180)"><g style={{ animation: 'workingAnt 1.5s infinite ease-in-out' }}><use href="#workerAnt" /></g></g>
                  <g transform="translate(250, 180)"><g style={{ animation: 'workingAnt 1.5s infinite ease-in-out -0.5s' }}><use href="#workerAnt" /></g></g>
                  <g transform="translate(360, 180)"><g style={{ animation: 'workingAnt 1.5s infinite ease-in-out -1s' }}><use href="#workerAnt" /></g></g>

                  <g transform="translate(450, 160)">
                    <rect x="-30" y="-45" width="60" height="90" rx="6" fill="#050811" stroke="#10b981" strokeWidth="2" />
                    <text x="0" y="-55" fill="#10b981" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CLIENTE</text>
                    <rect x="-20" y="-35" width="40" height="40" rx="4" fill="#0f172a" />

                    <g style={{ animation: 'smileNeutral 2s infinite' }}>
                      <circle cx="-8" cy="-15" r="2" fill="#64748b" />
                      <circle cx="8" cy="-15" r="2" fill="#64748b" />
                      <path d="M -5,-5 L 5,-5" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                    </g>

                    <g style={{ animation: 'smileHappy 2s infinite' }}>
                      <path d="M -12,-15 Q -8,-20 -4,-15" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" filter="url(#glowAnts)" />
                      <path d="M 4,-15 Q 8,-20 12,-15" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" filter="url(#glowAnts)" />
                      <path d="M -6,-5 Q 0,2 6,-5" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" filter="url(#glowAnts)" />
                    </g>
                    
                    <rect x="-15" y="15" width="30" height="8" rx="2" fill="#020617" stroke="#334155" />
                    <line x1="-10" y1="19" x2="10" y2="19" stroke="#0a0f1c" strokeWidth="2" />
                  </g>

                  <g style={{ animation: 'assemblyLine 6s infinite linear' }}><use href="#dataBox" /></g>
                  <g style={{ animation: 'assemblyLine 6s infinite linear -2s' }}><use href="#dataBox" /></g>
                  <g style={{ animation: 'assemblyLine 6s infinite linear -4s' }}><use href="#dataBox" /></g>

                </svg>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};