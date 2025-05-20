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
        ? 'Mi enfoque principal es el desarrollo front-end del sitio web, transformando todo el diseño UI/UX en código y creando la interfaz de usuario, trabajando con el modelo first-mobile.'
        : 'My main focus is the front-end development of the website, transforming all UI/UX design into code and creating the user interface, working with the mobile-first model.'
    },
    {
      company: 'Hartec',
      role: 'Fullstack',
      period: isSpanish ? 'Agosto 2021 - Marzo 2022' : 'August 2021 - March 2022',
      description: isSpanish 
        ? 'Mi trabajo consistía en desarrollar aplicaciones para clientes usando C# (.Net) e IIS (ventana) para implementar las aplicaciones.'
        : 'My work consisted of developing applications for clients using C# (.Net) and IIS (window) to implement the applications.'
    },
    {
      company: 'Geeo',
      role: 'Fullstack',
      period: isSpanish ? 'Febrero 2019 - Agosto 2019' : 'February 2019 - August 2019',
      description: isSpanish 
        ? 'Desarrollé un sistema de registro de materiales para la empresa utilizando Supabase para la base de datos, Python para el backend y PySide para la interfaz gráfica.'
        : 'I developed a material registration system for the company using Supabase for the database, Python for the backend and PySide for the graphical interface.'
    }
  ];
</script>

<section bind:this={sections[1]}>
	<div class='container'>
		<h2 class='section-title'>
			{isSpanish ? 'Experiencia laboral' : 'Work Experience'}
		</h2>
		
		<div class='timeline'>
			{#each experience as job, i}
				<div class='timeline-item' in:fly={{ x: i % 2 === 0 ? -20 : 20, delay: i * 150, duration: 800 }}>
					<div class='timeline-dot'></div>
					<div class='timeline-content'>
						<h3>{job.company} - <span>{job.role}</span></h3>
						<div class='timeline-period'>{job.period}</div>
						<p>{job.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: var(--primary);
    transform: translateX(-50%);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
    width: 100%;
  }
  
  .timeline-dot {
    position: absolute;
    top: 0;
    left: 50%;
    width: 20px;
    height: 20px;
    background-color: var(--primary);
    border-radius: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  
  .timeline-content {
    position: relative;
    width: calc(50% - 40px);
    padding: 1.5rem;
    background-color: var(--card-bg);
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .timeline-item:nth-child(odd) .timeline-content {
    margin-left: auto;
  }
  
  .timeline-item:nth-child(odd) .timeline-content::before {
    content: '';
    position: absolute;
    top: 10px;
    left: -10px;
    width: 20px;
    height: 20px;
    background-color: var(--card-bg);
    transform: rotate(45deg);
  }
  
  .timeline-item:nth-child(even) .timeline-content::before {
    content: '';
    position: absolute;
    top: 10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: var(--card-bg);
    transform: rotate(45deg);
  }
  
  .timeline-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .timeline-content h3 span {
    color: var(--primary-light);
  }
  
  .timeline-period {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }
  
  .timeline-content p {
    font-size: 0.9375rem;
    line-height: 1.6;
  }

	@media (max-width: 768px) {
    .timeline::before {
      left: 20px;
    }
    
    .timeline-dot {
      left: 20px;
    }
    
    .timeline-content {
      width: calc(100% - 60px);
      margin-left: 40px !important;
    }
    
    .timeline-item:nth-child(odd) .timeline-content::before,
    .timeline-item:nth-child(even) .timeline-content::before {
      left: -10px;
      right: auto;
    }
  }
</style>