import React from 'react';
import { NetworkBackground } from '../components/NetworkBackground';
import { Navbar } from '../components/Navbar';
import { MobileNav } from '../components/MobileNav';
import { Hero } from '../components/Hero';
import { Empresa } from '../components/Empresa';
import { Clientes } from '../components/Clientes';
import { Servicios } from '../components/Servicios';
import { Contacto } from '../components/Contacto';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-300 font-sans selection:bg-cyan-500/30 pb-20 md:pb-0 relative">
      
      <NetworkBackground />
      <Navbar />
      
      {/* Contenido Principal */}
      <main>
        <Hero />
        <Empresa />
        <Clientes />
        <Servicios />
        <Contacto />
        <WhatsAppButton />
      </main>

      <Footer />
      <MobileNav />
      
    </div>
  );
}