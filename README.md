# ⚡ Inversiones Galiang C.A. - Landing Page B2B

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Plataforma corporativa de alto rendimiento desarrollada para **Inversiones Galiang, C.A.**, orientada a ofrecer soluciones integrales de IT, modernización del ecosistema iSeries (AS/400) y flujos de optimización de procesos (ETL).

El diseño destaca por una interfaz "Retro-Futurista" corporativa, combinando elementos visuales de infraestructura *legacy* (como terminales IBM 5250) con componentes modernos, animaciones SVG de alta fluidez y física de movimiento.

---

## ✨ Características Principales

- 🖥️ **Emulador de Terminal AS/400 (5250):** Componente de contacto que recrea una pantalla CRT clásica con *scanlines*, fósforo verde y campos de alta intensidad.
- ⚙️ **Animaciones Industriales SVG:** 
  - Servidor central IBM Power11 escalado.
  - Cinta transportadora animada con física de saltos parabólicos.
  - Hormigas mecánicas simulando procesos de recolección de datos ETL.
- 📱 **Navegación Dinámica:** 
  - *Desktop:* Glassmorphism con efectos de scroll y botones de estado tipo consola.
  - *Mobile:* Menú inferior con **Scroll-Spy** integrado vía `IntersectionObserver`, resaltando la sección activa con indicadores neón.
- ♾️ **Infinite Marquee (Clientes):** Carrusel de logotipos de clientes de carga dinámica usando URLs optimizadas (1:1 aspect ratio), con animaciones de pausa en hover.
- 💬 **Floating Action Button (WhatsApp):** Integración directa de mensajería con *tooltips* interactivos y URLs seguras codificadas (`encodeURIComponent`).

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular en Next.js (App Router):

```text
├── app/
│   ├── layout.tsx         # Configuración global, SEO y metadatos
│   ├── page.tsx           # Ensamblaje de la Landing Page
│   ├── favicon.ico        # Icono corporativo
│   └── globals.css        # Estilos globales y animaciones custom
├── components/
│   ├── Navbar.tsx         # Navegación Desktop con scroll detect
│   ├── MobileNav.tsx      # Navegación Mobile con IntersectionObserver
│   ├── Hero.tsx           # Portada principal con servidor SVG
│   ├── Empresa.tsx        # Sección "Sobre Nosotros" con animación ETL
│   ├── Servicios.tsx      # Core de servicios IT
│   ├── Clientes.tsx       # Infinite scroll de logos (ImgBB)
│   ├── Contacto.tsx       # Emulador IBM 5250 + Formulario
│   └── WhatsAppButton.tsx # FAB interactivo
└── public/
    └── logo.png           # Assets estáticos
```

## 🚀 Instalación y Despliegue

Sigue estos pasos para levantar el entorno de desarrollo local:

1. **Clonar el repositorio**
   ```bash
   git clone [https://github.com/JARD1/INVERSIONES-GALIANG.git](https://github.com/JARD1/INVERSIONES-GALIANG.git)
   cd INVERSIONES-GALIANG
   ```
2.  **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
Abre http://localhost:3000 en tu navegador para ver el resultado.

4. **Construcción para Producción (Build)**

  ´´´bash
  npm run build
  npm run start
  ´´´

## 🎨 Decisiones de Diseño (UX/UI)
Paleta de Colores: Basada en tonos oscuros (#050811, #0a0f1c) para reducir la fatiga visual, acentuada con Cian (#22d3ee) y Esmeralda (#10b981) para imitar luces de estado de servidores y terminales.

Tipografía: Combinación de fuentes Sans-serif (Geist) para legibilidad en textos largos y Monospace (Geist Mono) para etiquetas, estatus de sistema y emulaciones de código.

Rendimiento: Uso intensivo de SVG nativo y CSS puro para animaciones complejas, evitando sobrecargar el DOM con librerías de canvas de terceros.

## 👨‍💻 Desarrollo y Arquitectura
Desarrollado y estructurado por Jorge Diaz Ruiz - Arquitectura Full-Stack y Diseño de Interfaces.
Impulsado por JForge / WebCore.

Inversiones Galiang C.A. - Conectando la robustez del pasado con la agilidad del futuro.
