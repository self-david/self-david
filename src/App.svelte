<script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'
	import ProfessionalResume from './components/ProfessionalResume.svelte'
	import Footer from './components/Footer.svelte'
	import Skills from './components/Skills.svelte'
	import Experiences from './components/Experiences.svelte'
	import Proyects from './components/Proyects.svelte'
	import Contact from './components/Contact.svelte'
	import Modal from './components/Modal.svelte'

  // Stores
  const theme = writable(localStorage.getItem('theme') || 'dark');
  const language = writable(localStorage.getItem('lang') || 'es');
  
  // Reactive declarations
  $: isSpanish = $language === 'es';
  
  // Intersection Observer for animations
  let sections = [];
  let observer;
  
  onMount(() => {
    document.documentElement.setAttribute('data-theme', $theme);
    
    // Set up intersection observer for scroll animations
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all sections
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      if (observer) {
        sections.forEach(section => {
          if (section) observer.unobserve(section);
        });
      }
    };
  });
  
  // Watch theme changes
  $: {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', $theme);
    }
  }
  

  
  // Projects data
  $: projects = [
    {
      id: 'codax',
      title: 'Codax',
      subtitle: isSpanish ? 'Lenguaje de programación' : 'Programming Language',
      tech: ['React', 'Electron'],
      description: isSpanish 
        ? 'Una plataforma de aprendizaje de programación en español que te lleva de la mano desde principiante.'
        : 'A programming learning platform in Spanish that guides you from beginner level.',
      image: '/images/codax.png',
      link: '#',
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
      image: '/images/liteimage.png',
      link: '#',
      features: isSpanish 
        ? ['Compresión sin pérdida', 'Soporte para múltiples formatos', 'Procesamiento en el navegador', 'Sin límites de uso']
        : ['Lossless compression', 'Support for multiple formats', 'Browser-based processing', 'No usage limits']
    }
  ];
  
  // Testimonials data
  $: testimonials = [
    {
      name: 'Laura Martínez',
      role: isSpanish ? 'Directora de Producto en TechCorp' : 'Product Director at TechCorp',
      text: isSpanish 
        ? 'David transformó nuestra visión en una interfaz intuitiva y atractiva. Su atención al detalle y capacidad para resolver problemas complejos hizo que nuestro proyecto fuera un éxito.'
        : 'David transformed our vision into an intuitive and attractive interface. His attention to detail and ability to solve complex problems made our project a success.',
      image: '/placeholder.svg?height=80&width=80'
    },
    {
      name: 'Carlos Rodríguez',
      role: isSpanish ? 'CEO de StartupX' : 'CEO at StartupX',
      text: isSpanish 
        ? 'Trabajar con David fue una experiencia excepcional. Entendió perfectamente nuestras necesidades y entregó un producto que superó nuestras expectativas. Altamente recomendado.'
        : 'Working with David was an exceptional experience. He perfectly understood our needs and delivered a product that exceeded our expectations. Highly recommended.',
      image: '/placeholder.svg?height=80&width=80'
    }
  ];
  
  // Active project for modal
  let activeProject = null;
  let modalOpen = false;
  
  function openProjectModal(project) {
    activeProject = project;
    modalOpen = true;
  }
  
  function closeModal() {
    modalOpen = false;
    setTimeout(() => {
      activeProject = null
    }, 300);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class='app' class:light={$theme === 'light'}>
	<ProfessionalResume isSpanish={isSpanish} language={language} theme={theme} />
  
  <main>
    <!-- Skills Section -->
		<Skills isSpanish={isSpanish} sections={sections} />
    
    <!-- Experience Section -->
		<Experiences isSpanish={isSpanish} sections={sections} />
    
    <!-- Projects Section -->
		<Proyects isSpanish={isSpanish} sections={sections} openProjectModal={openProjectModal} />
    
    <!-- Testimonials Section -->
    <!-- <section bind:this={sections[3]}>
      <div class='container'>
        <h2 class='section-title'>
          {isSpanish ? 'Testimonios' : 'Testimonials'}
        </h2>
        
        <div class='testimonials-grid'>
          {#each testimonials as testimonial, i}
            <div 
              class='testimonial-card' 
              in:fly={{ y: 20, delay: i * 150, duration: 800 }}
            >
              <div class='testimonial-content'>
                <svg class='quote-icon' xmlns='http://www.w3.org/2000/svg' width='42' height='42' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'><path d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'></path><path d='M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'></path></svg>
                <p>{testimonial.text}</p>
                <div class='testimonial-author'>
                  <img src={testimonial.image || '/placeholder.svg'} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section> -->
    
    <!-- Contact Section -->
		<Contact isSpanish={isSpanish} sections={sections} openProjectModal={openProjectModal} />
  </main>
  
	<Footer isSpanish={isSpanish} />
  
  <!-- Project Modal -->
  {#if modalOpen}
		<Modal isSpanish={isSpanish} closeModal={closeModal} activeProject={activeProject} />
  {/if}
</div>

<style>
  main {
    flex: 1;
  }
  
  /* section {
    padding: 5rem 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  } */
  
  /* section.visible {
    opacity: 1;
    transform: translateY(0);
  } */
  
  /* Testimonials Section */
  /* .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .testimonial-card {
    background-color: var(--card-bg);
    border-radius: 0.75rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .quote-icon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    opacity: 0.1;
    color: var(--primary);
  }
  
  .testimonial-content p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .testimonial-author img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .testimonial-author h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  } */
  
  /* .testimonial-author span {
    font-size: 0.875rem;
    color: var(--text-secondary);
  } */
</style>