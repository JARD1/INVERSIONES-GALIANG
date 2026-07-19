export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#050811] py-8 pb-28 md:pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-white font-bold mb-2">Inversiones Galiang C.A.</p>
        <p className="font-mono text-xs text-slate-500 mb-4">RIF: J-29575004-2 | Centro de Desarrollo de Software</p>
        <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Galiang. Todos los derechos reservados. Sistema en línea.</p>
      </div>
    </footer>
  );
};