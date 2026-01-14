<script>
  import { fly } from 'svelte/transition'
  export let isSpanish
  export let sections

  $: experience = [
    {
      company: 'Buscabot',
      role: 'FrontEnd developer',
      period: isSpanish ? 'Marzo 2022 - Junio 2024' : 'March 2022 - June 2024',
      description: isSpanish
        ? 'Mi enfoque principal es el desarrollo front-end del sitio web, transformando todo el diseño UI/UX en código y creando la interfaz de usuario, trabajando con el modelo mobile-first.'
        : 'My main focus is the front-end development of the website, transforming all UI/UX design into code and creating the user interface, working with the mobile-first model.',
    },
    {
      company: 'Hartec',
      role: 'Fullstack',
      period: isSpanish ? 'Agosto 2021 - Marzo 2022' : 'August 2021 - March 2022',
      description: isSpanish
        ? 'Mi trabajo consistía en desarrollar aplicaciones para clientes usando C# (.Net) e IIS para implementar las aplicaciones.'
        : 'My work consisted of developing applications for clients using C# (.Net) and IIS to implement the applications.',
    },
    {
      company: 'Geeo',
      role: 'Fullstack',
      period: isSpanish ? 'Febrero 2019 - Agosto 2019' : 'February 2019 - August 2019',
      description: isSpanish
        ? 'Desarrollé un sistema de registro de materiales para la empresa utilizando Supabase para la base de datos, Python para el backend y PySide para la interfaz gráfica.'
        : 'I developed a material registration system for the company using Supabase for the database, Python for the backend and PySide for the graphical interface.',
    },
  ]
</script>

<section bind:this={sections[1]}>
  <div class="container">
    <h2 class="section-title">
      {isSpanish ? 'Experiencia laboral' : 'Work Experience'}
    </h2>

    <div class="timeline">
      {#each experience as job, i}
        <div class="timeline-item" in:fly={{ x: i % 2 === 0 ? -50 : 50, delay: i * 150, duration: 800 }}>
          <div class="timeline-dot">
            <div class="dot-inner"></div>
            <div class="dot-glow"></div>
          </div>
          <div class="timeline-content glass-panel">
            <h3>{job.company} - <span>{job.role}</span></h3>
            <div class="timeline-period">{job.period}</div>
            <p>{job.description}</p>
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

  .timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  /* Central Line */
  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: linear-gradient(to bottom, transparent, var(--primary), var(--secondary), transparent);
    transform: translateX(-50%);
    box-shadow: 0 0 15px var(--primary);
  }

  .timeline-item {
    position: relative;
    margin-bottom: 4rem;
    width: 100%;
  }

  /* Dots */
  .timeline-dot {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dot-inner {
    width: 12px;
    height: 12px;
    background: var(--text);
    border-radius: 50%;
    z-index: 2;
  }

  .dot-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--primary);
    border-radius: 50%;
    filter: blur(5px);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .timeline-content {
    position: relative;
    width: calc(50% - 50px);
    padding: 2rem;
    /* glass-panel handles bg */
    border: 1px solid var(--glass-border);
    transition: transform 0.3s ease;
  }

  .timeline-content:hover {
    transform: translateY(-5px);
    border-color: var(--secondary);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  /* Position alternating items */
  .timeline-item:nth-child(odd) .timeline-content {
    margin-left: auto;
  }

  /* Arrows */
  .timeline-content::after {
    content: '';
    position: absolute;
    top: 10px;
    width: 15px;
    height: 15px;
    background-color: rgba(255, 255, 255, 0.05); /* Match glass bg roughly or verify */
    /* Since glass bg is transparent, matching it exactly for the arrow is hard. 
       Let's use a border arrow instead or skip it for a modern detached look. 
       Detached look is cleaner for glass. I'll remove the arrow. */
    display: none;
  }

  /* Typography */
  .timeline-content h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text);
  }

  .timeline-content h3 span {
    color: var(--secondary);
    font-weight: 400;
  }

  .timeline-period {
    font-size: 0.875rem;
    color: var(--primary);
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .timeline-content p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .timeline::before {
      left: 30px;
    }

    .timeline-dot {
      left: 30px;
    }

    .timeline-content {
      width: calc(100% - 80px);
      margin-left: 80px !important;
    }
  }
</style>
