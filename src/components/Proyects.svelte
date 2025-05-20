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
        ? ['Editor de código integrado', 'Tutoriales interactivos', 'Seguimiento de progreso', 'Comunidad de aprendizaje']
        : ['Integrated code editor', 'Interactive tutorials', 'Progress tracking', 'Learning community']
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
        ? ['Compresión sin pérdida', 'Soporte para múltiples formatos', 'Procesamiento en el navegador', 'Sin límites de uso']
        : ['Lossless compression', 'Support for multiple formats', 'Browser-based processing', 'No usage limits']
    },
		{
			'id': 'portfolio',
			'title': 'Portfolio',
			'subtitle': isSpanish ? 'Sitio web profesional' : 'Professional website',
			'tech': ['Svelte', 'CSS', 'JavaScript', 'Responsive Design'],
			'description': isSpanish 
				? 'Mi sitio web personal donde muestro mis proyectos y habilidades como desarrollador front-end.'
				: 'My personal website where I showcase my projects and skills as a front-end developer.',
			'image': './portfolio.webp',
			'link': 'https://davidga.dev',
			'features': isSpanish 
				? ['Diseño responsive', 'Modo oscuro/claro', 'Multilenguaje', 'Animaciones suaves']
				: ['Responsive design', 'Dark/light mode', 'Multilanguage', 'Smooth animations']
		}
  ];
</script>

<section bind:this={sections[2]}>
	<div class='container'>
		<h2 class='section-title'>
			{isSpanish ? 'Proyectos destacados' : 'Featured Projects'}
		</h2>
		
		<div class='projects-grid'>
			{#each projects as project, i}
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<div 
					class='project-card' 
					in:fly={{ y: 30, delay: i * 150, duration: 800 }}
					on:click={() => openProjectModal(project)}
					on:keydown={(e) => e.key === 'Enter' && openProjectModal(project)}
					tabindex='0'
				>
					<div class='project-image'>
						<img src={project.image} alt={project.title} />
					</div>
					<div class='project-info'>
						<h3>{project.title}</h3>
						<h4>{project.subtitle}</h4>
						<div class='project-tech'>
							{#each project.tech as tech}
								<span class='tech-badge'>{tech}</span>
							{/each}
						</div>
						<p>{project.description}</p>
						<button class='view-project'>
							{isSpanish ? 'Ver detalles' : 'View details'}
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }
  
  .project-card {
    background-color: var(--card-bg);
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform var(--transition-speed);
    cursor: pointer;
  }
  
  .project-card:hover {
    transform: translateY(-10px);
  }
  
  .project-image {
    height: 200px;
    overflow: hidden;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-speed);
  }
  
  .project-card:hover .project-image img {
    transform: scale(1.05);
  }
  
  .project-info {
    padding: 1.5rem;
  }
  
  .project-info h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }
  
  .project-info h4 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }
  
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

	.project-info p {
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .view-project {
    background-color: transparent;
    color: var(--primary-light);
    border: 1px solid var(--primary-light);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color var(--transition-speed), color var(--transition-speed);
  }
  
  .view-project:hover {
    background-color: var(--primary);
    color: white;
  }

	/* Responsive Adjustments */
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }

	.tech-badge {
    padding: 0.25rem 0.75rem;
    background-color: var(--primary-dark);
    color: white;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
  }
</style>