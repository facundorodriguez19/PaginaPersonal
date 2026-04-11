export const blogPosts = [
  {
    id: 1,
    title: "Cómo construí FlowLog: mi primera app en JavaScript puro",
    slug: "como-construi-flowlog",
    category: "JavaScript",
    categoryColor: "#f7df1e",
    excerpt: "El proceso completo de crear una aplicación web sin frameworks: arquitectura, decisiones técnicas, y lo que aprendí en el camino.",
    content: `
      <h3>El inicio del desafío</h3>
      <p>Todo comenzó con una pregunta simple: "¿Realmente necesito React para una aplicación de gestión de tareas?". La respuesta corta es no, pero el camino para construirla desde cero fue mucho más enriquecedor de lo que esperaba.</p>
      
      <h3>Arquitectura de la aplicación</h3>
      <p>Para FlowLog, decidí utilizar un patrón de diseño basado en componentes, pero implementado con clases puras de JavaScript. Cada sección de la UI es una clase que tiene su propio método <code>render()</code> y maneja sus propios estados internos.</p>
      
      <ul>
        <li><strong>Estado Centralizado:</strong> Creé un pequeño almacén de estado (Store) inspirado en Redux pero simplificado.</li>
        <li><strong>DRY (Don't Repeat Yourself):</strong> Creé una clase base para los componentes que maneja la inserción en el DOM.</li>
        <li><strong>Event Delegation:</strong> En lugar de agregar eventos a cada elemento, usé delegación en el contenedor principal para mejorar el rendimiento.</li>
      </ul>

      <h3>Lecciones aprendidas</h3>
      <p>Entender cómo funciona realmente el DOM y la gestión de eventos sin la abstracción de un framework me dio una base mucho más sólida para cuando decida volver a usar herramientas como React o Astro.</p>
    `,
    readTime: "8 min",
    date: "2024-11-15",
    coverGradient: "linear-gradient(135deg, #1a1a2e, #16213e)"
  },
  {
    id: 2,
    title: "WordPress vs Desarrollo a Medida: cuándo usar cada uno",
    slug: "wordpress-vs-desarrollo-a-medida",
    category: "WordPress",
    categoryColor: "#21759b",
    excerpt: "Una guía práctica para entender cuándo conviene WordPress y cuándo necesitás código propio. Con ejemplos reales de mis proyectos.",
    content: `
      <h3>La eterna duda del desarrollador</h3>
      <p>Muchos desarrolladores novatos ven a WordPress como algo "menos profesional", mientras que muchos clientes lo ven como la única solución. La verdad está en el medio: es una herramienta, y como toda herramienta, tiene su caso de uso ideal.</p>
      
      <h3>Cuándo elegir WordPress</h3>
      <p>Si el proyecto requiere una gestión de contenidos constante por parte del cliente, un blog robusto o una tienda online estándar (WooCommerce), WordPress es imbatible por su ecosistema y facilidad de uso inicial.</p>
      
      <h3>Cuándo ir por desarrollo a medida</h3>
      <p>Si la lógica de negocios es única, el rendimiento es crítico o se requiere una UI/UX altamente personalizada que no encaja en una plantilla, el desarrollo a medida (usando frameworks como Next.js o Astro) es el camino a seguir.</p>

      <p>En mi experiencia personal, he rescatado proyectos que estaban atrapados en temas pesados de WordPress migrándolos a Headless CMS, combinando lo mejor de ambos mundos.</p>
    `,
    readTime: "6 min",
    date: "2024-10-28",
    coverGradient: "linear-gradient(135deg, #0d1b2a, #1b4f72)"
  },
  {
    id: 3,
    title: "5 errores que cometí en mis primeros proyectos freelance",
    slug: "errores-primeros-proyectos-freelance",
    category: "Freelance",
    categoryColor: "#00d4aa",
    excerpt: "Lecciones aprendidas a los golpes sobre presupuestos, contratos, clientes y comunicación. Para que no cometas los mismos errores.",
    content: `
      <h3>Aprendiendo por el camino difícil</h3>
      <p>Ser freelance es mucho más que programar. Es ser vendedor, gestor de proyectos, contador y soporte técnico. Aquí van los 5 errores que más me costaron tiempo y dinero.</p>
      
      <ol>
        <li><strong>No cobrar un adelanto:</strong> Nunca empieces a trabajar sin una seña. Define el compromiso del cliente.</li>
        <li><strong>Subestimar el tiempo de revisión:</strong> El código puede estar listo en una semana, pero el feedback del cliente puede llevar tres.</li>
        <li><strong>Scope Creep (Alcance infinito):</strong> No definir exactamente qué incluye el proyecto lleva a trabajar gratis en "pequeños ajustes".</li>
        <li><strong>Mala comunicación:</strong> No explicar los términos técnicos hace que el cliente se sienta perdido y desconfíe.</li>
        <li><strong>No documentar:</strong> El "yo me acuerdo de esto" dura dos meses. Escribe documentación para ti y para el cliente.</li>
      </ol>

      <p>Si estás empezando, no te asustes. Cometerás errores, pero lo importante es que sean errores nuevos cada vez.</p>
    `,
    readTime: "5 min",
    date: "2024-09-10",
    coverGradient: "linear-gradient(135deg, #0a0a0a, #1a0a1a)"
  },
  {
    id: 4,
    title: "Por qué elegí Astro para mi nuevo portfolio personal",
    slug: "por-que-elegi-astro",
    category: "Desarrollo",
    categoryColor: "#ff5d01",
    excerpt: "Velocidad, islas de interactividad y una experiencia de desarrollo increíble. Te cuento por qué Astro es el rey de los sitios estáticos.",
    content: `
      <h3>La búsqueda del framework ideal</h3>
      <p>Después de años probando diferentes herramientas, desde Next.js hasta generadores más simples, encontré en Astro el equilibrio perfecto entre simplicidad y potencia.</p>
      
      <h3>Carga ultra-rápida por defecto</h3>
      <p>Astro utiliza una arquitectura de 'islas', lo que significa que envía cero JavaScript al cliente por defecto. Solo las partes interactivas (como mi nuevo modal de blog) cargan el JS necesario.</p>
      
      <ul>
        <li><strong>Rendimiento:</strong> Puntuaciones de 100 en Lighthouse sin esfuerzo extremo.</li>
        <li><strong>Flexibilidad:</strong> Puedo usar componentes de cualquier framework si lo necesito.</li>
        <li><strong>DX (Developer Experience):</strong> El sistema de routing basado en archivos y el tipado con TypeScript lo hacen un placer para trabajar.</li>
      </ul>

      <p>Si estás pensando en renovar tu casa digital, dale una oportunidad a Astro. No te vas a arrepentir.</p>
    `,
    readTime: "4 min",
    date: "2024-12-05",
    coverGradient: "linear-gradient(135deg, #2a0a0a, #4a1a0a)"
  }
];
