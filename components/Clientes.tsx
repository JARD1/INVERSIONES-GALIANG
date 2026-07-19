'use client';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = { 
  hidden: { opacity: 0, y: 40 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
};

export const Clientes = () => {
  // Enlaces directos configurados
  const clientLogos = [
    "https://i.ibb.co/bDgqdLs/1.jpg", 
    "https://i.ibb.co/SwvZKLMw/2.jpg", 
    "https://i.ibb.co/s9kr1WFJ/3.jpg", 
    "https://i.ibb.co/KxFBfZTk/4.jpg", 
  ];

  // Duplicamos el array para crear la ilusión de scroll infinito sin cortes
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clientes" className="py-20 border-t border-slate-800/50 bg-[#050811] relative z-10 overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 4)); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
          <h2 className="font-mono text-cyan-400 mb-2">{"< TRUSTED_NODES />"}</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Infraestructuras que confían en nosotros</h3>
        </motion.div>
        
        {/* Contenedor con máscaras de gradiente a los lados para difuminar la entrada/salida */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="relative w-full flex items-center overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          {/* El track que se mueve infinitamente */}
          <div className="flex w-[calc(250px*8)] animate-scroll">
            {marqueeLogos.map((logoUrl, index) => (
              <div key={index} className="w-[250px] flex-shrink-0 px-3">
                
                {/* Tarjeta ampliada (h-32) y padding mínimo (p-2) para maximizar el logo */}
                <div className="flex items-center justify-center h-32 bg-[#0a0f1c] border border-slate-800/80 rounded-xl hover:border-cyan-500/50 hover:bg-[#0c1222] transition-all duration-300 group cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] overflow-hidden p-2">
                  
                  <img 
                    src={logoUrl} 
                    alt={`Logo Cliente ${index + 1}`}
                    // Eliminada la opacidad y los filtros. Ahora ocupan el 100% del espacio disponible
                    className="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};