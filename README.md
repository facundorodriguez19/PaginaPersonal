# Portfolio Freelance - Facundo

Este es mi portfolio profesional desarrollado con **Astro 4.x** y **Tailwind CSS**. Un sitio estático ultrarrápido, optimizado para SEO y con un diseño premium.

## 🚀 Tecnologías

- **Framework**: Astro 4.x
- **Estilos**: Tailwind CSS v3
- **Tipografía**: Bebas Neue & DM Sans
- **Iconos**: Lucide (SVG inline)
- **Animaciones**: IntersectionObserver + CSS Transitions

## 🛠️ Instalación y Uso Local

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir `http://localhost:4321` en el navegador.

## 📦 Despliegue

El sitio está configurado para desplegarse automáticamente en **Vercel** mediante GitHub Actions cada vez que se hace un push a la rama `main`.

## 📂 Estructura del Proyecto

- `/src/pages`: Páginas del sitio (`index`, `proyectos`, `servicios`, `blog`, `contacto`).
- `/src/components`: Componentes reutilizables de UI.
- `/src/layouts`: Componente `BaseLayout` con SEO y estructura raíz.
- `/src/data`: Archivos de datos JS para facilitar la actualización de contenido.
- `/src/styles`: Estilos globales y variables CSS.
- `/public`: Assets estáticos (imágenes, favicon).

## 📝 Actualización de Contenido

- **Proyectos**: Editar `src/data/projects.js`.
- **Servicios**: Editar `src/data/services.js`.
- **Blog**: Editar `src/data/blog-posts.js`.

---
Hecho con ☕ y código por Facundo.
