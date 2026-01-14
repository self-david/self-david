<script>
  import { onMount, tick } from 'svelte'
  import { writable } from 'svelte/store'
  import ProfessionalResume from './components/ProfessionalResume.svelte'
  import Footer from './components/Footer.svelte'
  import Skills from './components/Skills.svelte'
  import Experiences from './components/Experiences.svelte'
  import Proyects from './components/Proyects.svelte'
  import Contact from './components/Contact.svelte'
  import Modal from './components/Modal.svelte'
  import BottomNav from './components/BottomNav.svelte'

  // Stores
  const theme = writable(localStorage.getItem('theme') || 'dark')
  const language = writable(localStorage.getItem('lang') || 'es')

  // Reactive declarations
  $: isSpanish = $language === 'es'

  // Intersection Observer for animations
  let sections = [] // 0: Skills, 1: Experiences, 2: Projects, 3: Contact
  let observer
  let activeSection = -1 // -1 for Home/Hero

  onMount(() => {
    document.documentElement.setAttribute('data-theme', $theme)

    // Observer for animations (low threshold)
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observer for Active Section (high threshold)
    const navObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Determine which section index this is
            const index = sections.indexOf(entry.target)
            if (index !== -1) {
              activeSection = index
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' },
    )

    // Observe all sections
    sections.forEach(section => {
      if (section) {
        observer.observe(section)
        navObserver.observe(section)
      }
    })

    // Special observer for Hero to set activeSection = -1
    // We can assume if scrollY is top, it's home.
    const scrollHandler = () => {
      if (window.scrollY < 300) {
        activeSection = -1
      }
    }
    window.addEventListener('scroll', scrollHandler)

    return () => {
      if (observer) {
        sections.forEach(section => {
          if (section) {
            observer.unobserve(section)
            navObserver.unobserve(section)
          }
        })
      }
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  // Watch theme changes
  $: {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', $theme)
    }
  }

  // Active project for modal
  let activeProject = null
  let modalOpen = false

  function openProjectModal(project) {
    activeProject = project
    modalOpen = true
  }

  function closeModal() {
    modalOpen = false
    setTimeout(() => {
      activeProject = null
    }, 300)
  }

  async function scrollToSection(index) {
    if (index === -1) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      activeSection = -1
      return
    }

    // Wait for sections to be bound if they aren't somehow
    await tick()

    if (sections[index]) {
      // Calculate offset for fixed header if needed, but scrolling to center is usually fine or use scrollIntoView options
      // sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Better control with window.scrollTo for offsets
      const y = sections[index].getBoundingClientRect().top + window.pageYOffset - 100 // 100px offset for headers
      window.scrollTo({ top: y, behavior: 'smooth' })
      activeSection = index
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="app" class:light={$theme === 'light'}>
  <div class="bg-gradient">
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="bg-orb bg-orb-3"></div>
  </div>

  <ProfessionalResume {isSpanish} {language} {theme} />

  <main>
    <!-- Skills Section -->
    <Skills {isSpanish} {sections} />

    <!-- Experience Section -->
    <Experiences {isSpanish} {sections} />

    <!-- Projects Section -->
    <Proyects {isSpanish} {sections} {openProjectModal} />

    <!-- Contact Section -->
    <Contact {isSpanish} {sections} {openProjectModal} />
  </main>

  <Footer {isSpanish} />

  <!-- Project Modal -->
  {#if modalOpen}
    <Modal {isSpanish} {closeModal} {activeProject} />
  {/if}

  <BottomNav {scrollToSection} {activeSection} />
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
