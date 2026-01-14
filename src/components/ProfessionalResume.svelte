<script>
  import { fade, fly } from 'svelte/transition'
  const name = 'David Gutiérrez Alvarez'
  export let isSpanish
  export let language
  export let theme

  function toggleTheme() {
    $theme = $theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', $theme)
  }

  function toggleLanguage() {
    $language = $language === 'es' ? 'en' : 'es'
    localStorage.setItem('lang', $language)
  }
</script>

<header class="glass-header">
  <div class="container nav-container">
    <div class="logo">
      <span>DG</span>
    </div>
    <div class="nav-controls">
      <button
        class="theme-toggle glass-btn"
        on:click={toggleTheme}
        aria-label={isSpanish ? 'Cambiar tema' : 'Toggle theme'}
      >
        {#if $theme === 'dark'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line
              x1="12"
              y1="21"
              x2="12"
              y2="23"
            ></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line
              x1="18.36"
              y1="18.36"
              x2="19.78"
              y2="19.78"
            ></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line
              x1="4.22"
              y1="19.78"
              x2="5.64"
              y2="18.36"
            ></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg
          >
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
          >
        {/if}
      </button>
      <button class="lang-toggle glass-btn" on:click={toggleLanguage}>
        {$language === 'es' ? 'EN' : 'ES'}
      </button>
    </div>
  </div>
</header>

<section class="hero-section">
  <div class="container">
    <div class="hero-content">
      <div class="profile-wrapper" in:fly={{ y: 20, duration: 1000 }}>
        <div class="profile-image-container">
          <img src="./profile.jpg" alt={name} class="profile-img" />
          <div class="ring-glow"></div>
        </div>
        <div class="status-badges">
          <span class="glass-badge available">{isSpanish ? 'Disponible' : 'Available'}</span>
          <span class="glass-badge freelance">{isSpanish ? 'Abierto a Freelance' : 'Open to Freelance'}</span>
        </div>
      </div>

      <div class="intro-text" in:fade={{ duration: 1000, delay: 200 }}>
        <h1 class="greeting">
          {#if isSpanish}
            ¡Hola! Soy
          {:else}
            Hi! I'm
          {/if}
        </h1>
        <h2 class="name-title">
          {name}
        </h2>
        <h3 class="role-title">
          {#if isSpanish}
            Frontend Developer <span class="highlight">+4 Años Exp</span>
          {:else}
            Frontend Developer <span class="highlight">+4 Years Exp</span>
          {/if}
        </h3>
        <p class="bio">
          {#if isSpanish}
            Especializado en crear <strong>interfaces inmersivas</strong> y experiencias de usuario memorables. Transformo
            diseños complejos en código limpio y performante.
          {:else}
            Specialized in creating <strong>immersive interfaces</strong> and memorable user experiences. I transform complex
            designs into clean, performant code.
          {/if}
        </p>

        <div class="social-links">
          <a href="mailto:david_xd1996@live.com.mx" class="glass-icon email" aria-label="Email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline
                points="22,6 12,13 2,6"
              ></polyline></svg
            >
          </a>
          <a
            href="https://linkedin.com/in/self-david"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-icon linkedin"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect
                x="2"
                y="9"
                width="4"
                height="12"
              ></rect><circle cx="4" cy="4" r="2"></circle></svg
            >
          </a>
          <a
            href="https://github.com/self-david"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-icon github"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path></svg
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Header */
  .glass-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 1rem 0;
    background: linear-gradient(to bottom, rgba(15, 12, 41, 0.8), transparent);
    backdrop-filter: blur(2px);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo span {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(157, 125, 250, 0.5);
  }

  .nav-controls {
    display: flex;
    gap: 1rem;
  }

  .glass-btn {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    color: var(--text);
    padding: 0.5rem;
    border-radius: 50%; /* Circular buttons */
    cursor: pointer;
    transition: all 0.3s ease;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(var(--glass-blur));
  }

  .lang-toggle.glass-btn {
    width: auto;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.8rem;
  }

  .glass-btn:hover {
    background: var(--glass-highlight);
    box-shadow: 0 0 15px var(--primary-glow);
    transform: translateY(-2px);
    border-color: var(--primary);
  }

  /* Hero Section */
  .hero-section {
    min-height: 90vh; /* Almost full screen */
    display: flex;
    align-items: center;
    padding-top: 80px; /* Space for header */
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }

  @media (min-width: 900px) {
    .hero-content {
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
      gap: 5rem;
    }

    .profile-wrapper {
      order: 2; /* Image on right on desktop */
    }

    .intro-text {
      order: 1;
      max-width: 600px;
    }
  }

  /* Profile Image with Neon Glow */
  .profile-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .profile-image-container {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    z-index: 2;
  }

  .profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 2;
  }

  .ring-glow {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    z-index: 1;
    filter: blur(20px);
    opacity: 0.6;
    animation: pulse-glow 3s infinite alternate;
  }

  @keyframes pulse-glow {
    from {
      transform: scale(0.95);
      opacity: 0.5;
    }
    to {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }

  /* Badges */
  .status-badges {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .glass-badge {
    background: var(--glass-bg);
    backdrop-filter: blur(5px);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid var(--glass-border);
    color: var(--text-secondary);
    letter-spacing: 0.05em;
  }

  .glass-badge.available {
    border-color: var(--secondary);
    color: var(--secondary);
    box-shadow: 0 0 10px rgba(52, 211, 153, 0.2);
  }

  /* Typography */
  .greeting {
    font-size: 1.5rem;
    color: var(--primary);
    margin-bottom: 0px;
    font-weight: 500;
  }

  .name-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #fff, #cbd5e1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .role-title {
    font-size: 1.5rem;
    color: var(--text-secondary);
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  .highlight {
    color: var(--secondary);
    font-weight: 600;
  }

  .bio {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .bio strong {
    color: var(--text);
    font-weight: 600;
  }

  /* Social Links */
  .social-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }

  @media (min-width: 900px) {
    .social-links {
      justify-content: flex-start;
    }

    .name-title {
      font-size: 4.5rem;
    }
  }

  .glass-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .glass-icon:hover {
    background: var(--glass-highlight);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-color: var(--primary);
    color: var(--primary);
  }
</style>
