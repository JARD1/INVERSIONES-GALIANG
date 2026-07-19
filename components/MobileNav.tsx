'use client';
import { useState, useEffect, useRef } from 'react';
import { Building2, Users, BriefcaseBusiness, Mail, Zap } from 'lucide-react';

// 1. Definimos las secciones de forma dinámica para facilitar la lógica de resaltado
const navItems = [
  { id: 'empresa', label: 'EMPRESA', icon: Building2 },
  { id: 'clientes', label: 'CLIENTES', icon: Users },
  // Usamos Zap para CORE, representa energía/procesamiento (ETL)
  { id: 'servicios', label: 'CORE', icon: Zap }, 
  { id: 'contacto', label: 'CONTACTO', icon: Mail },
];

export const MobileNav = () => {
  // 2. Estado para guardar qué sección está activa
  const [activeSection, setActiveSection] = useState<'empresa' | 'clientes' | 'servicios' | 'contacto' | null>(null);

  // 3. Lógica Scroll-Spy con Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null, // Usa el viewport del dispositivo
      // Detecta la sección cuando cruza el 40% de la pantalla (ajustable)
      rootMargin: '-40% 0px -60% 0px', 
      threshold: 0, // Se dispara en cuanto entra un píxel
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Si la sección entra en el visor, la seteamos como activa
          setActiveSection(entry.target.id as any);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observamos los elementos HTML reales que tienen estos IDs en la página principal
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    // Limpieza al desmontar el componente
    return () => observer.disconnect();
  }, []);

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#0a0f1c]/90 backdrop-blur-lg border-t border-slate-800/50 z-50 px-4 py-1 shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
      <div className="flex justify-between items-center max-w-md mx-auto h-16">
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex flex-col items-center gap-1.5 flex-1 h-full justify-center active:scale-95 transition-all duration-300 ${
                isActive ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-200'
              }`}
            >
              {/* Icono más grande para mejor tap-target */}
              <Icon className={`h-6 w-6 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} strokeWidth={isActive ? 2 : 1.5} />
              
              {/* Texto Monospace */}
              <span className={`text-[9px] font-mono tracking-wider transition-opacity duration-300 ${isActive ? 'font-bold opacity-100' : 'font-medium opacity-80'}`}>
                {item.label}
              </span>

              {/* 4. EL HIGHLIGHT VISUAL: Un punto neón debajo del item activo */}
              {isActive && (
                <div className="absolute bottom-1 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              )}
            </a>
          );
        })}

      </div>
    </div>
  );
};