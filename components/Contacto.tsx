'use client';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Send } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

export const Contacto = () => {
  return (
    <section id="contacto" className="py-24 border-t border-slate-800/50 bg-[#0a0f1c] relative z-10 overflow-hidden">
      
      {/* Fondo de Cuadrícula Tecnológica */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Efecto de TV antigua (Scanlines) */
        .scanlines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
        }
        
        /* Animación de la hormiga patrullando */
        @keyframes antPatrol {
          0%    { left: 5%; transform: scaleX(1); }
          49.9% { left: 85%; transform: scaleX(1); }
          50%   { left: 85%; transform: scaleX(-1); }
          99.9% { left: 5%; transform: scaleX(-1); }
          100%  { left: 5%; transform: scaleX(1); }
        }
        
        /* Brillo de fósforo verde (Texto Base) */
        .text-phosphor {
          color: #39ff14;
          text-shadow: 0 0 5px rgba(57, 255, 20, 0.4);
        }
        
        /* NUEVO: Brillo de Alta Intensidad (Datos Relevantes) */
        .text-phosphor-highlight {
          color: #ffffff;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.9), 0 0 15px rgba(57, 255, 20, 0.9);
          font-weight: 700;
          letter-spacing: 0.5px;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LADO IZQUIERDO: FORMULARIO MODERNO */}
          <motion.div variants={fadeInUp} className="bg-[#050811] border border-slate-800 rounded-2xl p-8 relative shadow-2xl z-20">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="h-5 w-5 text-cyan-400" /> Nuevo Requerimiento
              </h3>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span className="text-[10px] font-mono text-emerald-500 tracking-widest">ENCRYPTED</span>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="group">
                <label className="block text-xs font-mono text-slate-500 mb-2 group-focus-within:text-cyan-400 transition-colors">IDENTIFICACIÓN</label>
                <input type="text" placeholder="Nombre / Empresa" className="w-full bg-[#0a0f1c] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-slate-700" />
              </div>
              <div className="group">
                <label className="block text-xs font-mono text-slate-500 mb-2 group-focus-within:text-cyan-400 transition-colors">CANAL_DE_RETORNO</label>
                <input type="email" placeholder="Email corporativo" className="w-full bg-[#0a0f1c] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-slate-700" />
              </div>
              <div className="group">
                <label className="block text-xs font-mono text-slate-500 mb-2 group-focus-within:text-cyan-400 transition-colors">PAYLOAD (Mensaje)</label>
                <textarea rows={4} maxLength={500} placeholder="Describe tus necesidades de integración o desarrollo..." className="w-full bg-[#0a0f1c] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all resize-none placeholder:text-slate-700"></textarea>
              </div>
              <button type="button" className="w-full group relative bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 font-bold py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all flex items-center justify-center gap-2 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2"><Send className="h-4 w-4" /> Transmitir al CORE</span>
                <div className="absolute inset-0 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
              </button>
            </form>
          </motion.div>

          {/* LADO DERECHO: EMULADOR DE TERMINAL AS/400 (5250) */}
          <motion.div variants={fadeInUp} className="flex flex-col justify-center perspective-1000">
            <h2 className="font-mono text-cyan-400 mb-2">{"< INITIATE_HANDSHAKE />"}</h2>
            <h3 className="text-3xl font-bold text-white mb-8">Punto de Acceso del Sistema</h3>

            <div className="bg-[#1e232e] p-3 md:p-5 rounded-t-xl rounded-b-md shadow-2xl border-t border-l border-slate-600 border-r-2 border-b-4 border-slate-900">
              
              <div className="bg-[#0f1218] p-2 rounded-lg border border-black shadow-[inset_0_0_20px_rgba(0,0,0,1)] relative overflow-hidden">
                
                <div className="bg-[#051005] h-[340px] md:h-[320px] rounded relative overflow-hidden flex flex-col shadow-[inset_0_0_30px_rgba(57,255,20,0.15)]">
                  
                  <div className="absolute inset-0 scanlines opacity-40 pointer-events-none z-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#39ff14]/5 to-transparent opacity-50 pointer-events-none z-20 animate-pulse"></div>

                  {/* CONTENIDO TEXTUAL AS/400 OPTIMIZADO PARA LECTURA */}
                  <div className="p-4 md:p-5 font-mono text-[11px] md:text-xs text-phosphor leading-relaxed z-10 relative h-full flex flex-col">
                    <div>
                      <p className="opacity-70">IBM iSeries 5250 Emulation - Session A</p>
                      <p className="mb-4 opacity-70">===================================================</p>
                      
                      <p className="mb-4 text-[#39ff14]">&gt; DSPCUSTINFO OBJ(*GALIANG) OUTPUT(*DISPLAY)</p>
                      
                      {/* DATOS ALINEADOS Y RESALTADOS */}
                      <div className="pl-0 md:pl-2 space-y-3 w-full uppercase">
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="opacity-70 w-36 flex-shrink-0">PERFIL ...:</span>
                          <span className="text-phosphor-highlight text-[13px] md:text-[14px]">DUSTIN SANCHEZ</span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="opacity-70 w-36 flex-shrink-0">TELEFONO .:</span>
                          <span className="text-phosphor-highlight text-[13px] md:text-[14px]">0426-907.04.12</span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="opacity-70 w-36 flex-shrink-0">EMAIL ....:</span>
                          {/* Lowercase para el email, facilita muchísimo la lectura */}
                          <span className="text-phosphor-highlight text-[13px] md:text-[14px] lowercase">glgsoluciones@gmail.com</span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-2 mt-2">
                          <span className="opacity-70 w-36 flex-shrink-0">UBICACION :</span>
                          <div className="text-phosphor-highlight border-l-2 border-[#39ff14]/40 pl-3 leading-tight text-[11px] md:text-[12px]">
                            ESQ. SOCIEDAD A TRAPOSO<br />
                            EDIF ZINGG, PISO 3, LOCAL 309<br />
                            CARACAS, VENEZUELA 1010
                          </div>
                        </div>

                      </div>

                      <p className="mt-5 text-emerald-400 opacity-90 animate-pulse">*** COMANDO COMPLETADO ***</p>
                      <p className="mt-1">_ <span className="animate-pulse inline-block w-2 h-3 bg-[#39ff14] align-middle"></span></p>
                    </div>

                    {/* HORMIGA VERDE PATRULLANDO */}
                    <div className="absolute bottom-2 w-full left-0 h-8 pointer-events-none opacity-80">
                      <div className="absolute top-0" style={{ animation: 'antPatrol 12s linear infinite' }}>
                        <svg viewBox="0 0 30 20" className="w-12 h-8 drop-shadow-[0_0_2px_rgba(57,255,20,0.8)]">
                          <g transform="translate(15, 10)">
                            <path d="M -6,2 L -10,8 M 0,2 L -2,8 M 6,2 L 10,8" stroke="#39ff14" fill="none" strokeWidth="1" />
                            <ellipse cx="-8" cy="0" rx="6" ry="3" fill="none" stroke="#39ff14" strokeWidth="1" />
                            <circle cx="0" cy="0" r="3.5" fill="none" stroke="#39ff14" strokeWidth="1" />
                            <circle cx="7" cy="1" r="2.5" fill="none" stroke="#39ff14" strokeWidth="1" />
                            <path d="M 8,-1 L 11,-4 M 8,1 L 11,-1" stroke="#39ff14" fill="none" strokeWidth="1" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botones/Leds del monitor */}
              <div className="flex justify-between items-center px-4 pt-3 pb-1">
                <div className="text-[8px] font-mono text-slate-500 tracking-widest">IBM 5250 DISPLAY</div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_5px_#39ff14] animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
              </div>
            </div>

            {/* TECLADO FÍSICO ABSTRACTO */}
            <div className="w-[85%] mx-auto bg-[#1a1f29] h-16 rounded-b-xl border-x-4 border-b-8 border-[#11141a] shadow-xl p-2 perspective-500 flex flex-col gap-[2px] mt-[1px]">
              <div className="grid grid-cols-12 gap-1 h-3 px-2">
                {[...Array(12)].map((_, i) => <div key={`k1-${i}`} className="bg-[#2a3142] rounded-sm shadow-[0_2px_0_#0f1218]"></div>)}
              </div>
              <div className="grid grid-cols-12 gap-1 h-3 px-1">
                <div className="col-span-2 bg-[#2a3142] rounded-sm shadow-[0_2px_0_#0f1218]"></div>
                {[...Array(9)].map((_, i) => <div key={`k2-${i}`} className="bg-[#2a3142] rounded-sm shadow-[0_2px_0_#0f1218]"></div>)}
                <div className="col-span-1 bg-[#2a3142] rounded-sm shadow-[0_2px_0_#0f1218]"></div>
              </div>
              <div className="grid grid-cols-12 gap-1 h-3 px-4">
                <div className="col-span-3 bg-[#232938] rounded-sm shadow-[0_2px_0_#0f1218]"></div>
                <div className="col-span-6 bg-[#2a3142] rounded-sm shadow-[0_2px_0_#0f1218]"></div>
                <div className="col-span-3 bg-[#232938] rounded-sm shadow-[0_2px_0_#0f1218]"></div>
              </div>
            </div>

          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};