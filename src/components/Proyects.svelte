<script>
  import { fly } from 'svelte/transition'
  export let isSpanish
  export let sections
  export let openProjectModal

  $: projects = [
    {
      id: 'codax',
      title: 'Codax',
      subtitle: isSpanish ? 'Lenguaje de programación' : 'Programming Language',
      tech: ['React', 'Electron'],
      description: isSpanish
        ? 'Una plataforma de aprendizaje de programación en español que te lleva de la mano desde principiante.'
        : 'A programming learning platform in Spanish that guides you from beginner level.',
      image: './codax.webp',
      link: 'https://codax.davidga.dev/',
      features: isSpanish
        ? [
            'Editor de código integrado',
            'Tutoriales interactivos',
            'Seguimiento de progreso',
            'Comunidad de aprendizaje',
          ]
        : ['Integrated code editor', 'Interactive tutorials', 'Progress tracking', 'Learning community'],
    },
    {
      id: 'liteimage',
      title: 'LiteImage',
      subtitle: isSpanish ? 'Reduce el peso de las imágenes' : 'Reduce image size',
      tech: ['React'],
      description: isSpanish
        ? 'Una aplicación web que te ayuda a reducir el peso de tus imágenes de forma totalmente gratuita.'
        : 'A web application that helps you reduce the size of your images completely free.',
      image: './liteimage.webp',
      link: 'https://liteimage.pro',
      features: isSpanish
        ? [
            'Compresión sin pérdida',
            'Soporte para múltiples formatos',
            'Procesamiento en el navegador',
            'Sin límites de uso',
          ]
        : ['Lossless compression', 'Support for multiple formats', 'Browser-based processing', 'No usage limits'],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      subtitle: isSpanish ? 'Sitio web profesional' : 'Professional website',
      tech: ['Svelte', 'CSS', 'JavaScript', 'Responsive Design'],
      description: isSpanish
        ? 'Mi sitio web personal donde muestro mis proyectos y habilidades como desarrollador front-end.'
        : 'My personal website where I showcase my projects and skills as a front-end developer.',
      image: './portfolio.webp',
      link: 'https://davidga.dev',
      features: isSpanish
        ? ['Diseño responsive', 'Modo oscuro/claro', 'Multilenguaje', 'Animaciones suaves']
        : ['Responsive design', 'Dark/light mode', 'Multilanguage', 'Smooth animations'],
    },
    {
      id: 'sin-filtros',
      title: 'Sin Filtros',
      subtitle: isSpanish ? 'Juego de fiesta móvil' : 'Mobile party game',
      tech: ['React Native', 'Expo', 'AsyncStorage', 'React Navigation'],
      description: isSpanish
        ? 'Un juego de fiesta móvil con múltiples niveles de intensidad, cartas personalizadas y modo multijugador para romper el hielo en cualquier reunión.'
        : 'A mobile party game with multiple intensity levels, custom cards, and multiplayer mode to break the ice at any gathering.',
      image: './sin-filtros.webp',
      link: 'https://github.com/self-david/self-david/releases/download/untagged-6d11c1ab27f4bcae6356/Sin-Filtros-v1.0.0-release.apk', // Reemplaza con tu enlace real
      features: isSpanish
        ? [
            'Cuatro niveles de intensidad progresiva',
            'Sistema de cartas personalizadas por categorías',
            // 'Modo multijugador con salas P2P',
            'Historial de partidas con estadísticas detalladas',
            'Sistema de puntuación con deshacer acciones',
            'Interfaz moderna con gradientes y animaciones',
          ]
        : [
            'Four progressive intensity levels',
            'Custom card system with categories',
            // 'Multiplayer mode with P2P rooms',
            'Game history with detailed statistics',
            'Scoring system with undo actions',
            'Modern interface with gradients and animations',
          ],
    },
  ]
</script>

<section bind:this={sections[2]}>
  <div class="container">
    <h2 class="section-title">
      {isSpanish ? 'Proyectos destacados' : 'Featured Projects'}
    </h2>

    <div class="projects-grid">
      {#each projects as project, i}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div
          class="project-card glass-panel"
          in:fly={{ y: 50, delay: i * 150, duration: 800 }}
          on:click={() => openProjectModal(project)}
          on:keydown={e => e.key === 'Enter' && openProjectModal(project)}
          tabindex="0"
        >
          <div class="project-image">
            <img src={project.image} alt={project.title} />
            <div class="overlay"></div>
          </div>
          <div class="project-info">
            <div class="header-group">
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
            </div>

            <div class="project-tech">
              {#each project.tech as tech}
                <span class="tech-badge glass-badge">{tech}</span>
              {/each}
            </div>

            <p>{project.description}</p>

            <div class="card-footer">
              <button class="view-project">
                {isSpanish ? 'Ver detalles' : 'View details'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  ><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg
                >
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    padding: 4rem 0;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2.5rem;
  }

  .project-card {
    /* glass-panel class handles base bg/blur */
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid var(--glass-border);
  }

  .project-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border-color: var(--primary);
  }

  .project-card:hover .project-image img {
    transform: scale(1.1);
  }

  .project-image {
    height: 220px;
    overflow: hidden;
    position: relative;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(15, 12, 41, 0.9), transparent);
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .overlay {
    opacity: 0.4;
  }

  .project-info {
    padding: 1.5rem 2rem 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .header-group {
    margin-bottom: 1rem;
  }

  .project-info h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    background: linear-gradient(to right, #fff, #cbd5e1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .project-info h4 {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--secondary);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tech-badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-secondary);
  }

  .project-info p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: var(--text-secondary);
    flex-grow: 1;
  }

  .card-footer {
    margin-top: auto;
  }

  .view-project {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    color: var(--primary);
    border: none;
    padding: 0;
    font-weight: 600;
    cursor: pointer;
    transition: gap 0.3s ease;
    font-family: var(--font-body);
    font-size: 1rem;
  }

  .view-project:hover {
    gap: 0.8rem;
    color: var(--white);
    text-shadow: 0 0 10px var(--primary);
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>
