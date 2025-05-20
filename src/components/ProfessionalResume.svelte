<script>
  import { fade } from 'svelte/transition'
	const name = 'David Gutiérrez Alvarez'
	export let isSpanish
	export let language
	export let theme

  function toggleTheme() {
    $theme = $theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', $theme);
  }

  function toggleLanguage() {
    $language = $language === 'es' ? 'en' : 'es'
    localStorage.setItem('lang', $language);
  }
</script>

<header>
	<div class='container'>
		<nav>
			<div class='logo'>
				<span>DG</span>
			</div>
			<div class='nav-controls'>
				<button class='theme-toggle' on:click={toggleTheme} aria-label={isSpanish ? 'Cambiar tema' : 'Toggle theme'}>
					{#if $theme === 'dark'}
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='5'></circle><line x1='12' y1='1' x2='12' y2='3'></line><line x1='12' y1='21' x2='12' y2='23'></line><line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line><line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line><line x1='1' y1='12' x2='3' y2='12'></line><line x1='21' y1='12' x2='23' y2='12'></line><line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line><line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line></svg>
					{:else}
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path></svg>
					{/if}
				</button>
				<button class='lang-toggle' on:click={toggleLanguage}>
					{$language === 'es' ? 'EN' : 'ES'}
				</button>
			</div>
		</nav>
		
		<div class='hero'>
			<div class='profile-container'>
				<div class='profile-image'>
					<img src='./profile.jpg' alt={name} />
				</div>
				<div class='status-badges'>
					<span class='badge available'>{isSpanish ? 'Disponible' : 'Available'}</span>
					<span class='badge freelance'>{isSpanish ? 'Abierto a Freelance' : 'Open to Freelance'}</span>
				</div>
			</div>
			
			<div class='intro' in:fade={{ duration: 800, delay: 200 }}>
				<h1>
					{#if isSpanish}
						¡Hola! mi nombre es
					{:else}
						Hi! my name is
					{/if}
					<span class='name'>{name}</span>
				</h1>
				<h2>
					{#if isSpanish}
						Desarrollador front-end con <span class='highlight'>4 años de experiencia</span>
					{:else}
						Front-end developer with <span class='highlight'>4 years of experience</span>
					{/if}
				</h2>
				<p>
					{#if isSpanish}
						especializado en crear interfaces intuitivas y funcionales. Apasionado por mejorar la experiencia del usuario con soluciones técnicas innovadoras.
					{:else}
						specialized in creating intuitive and functional interfaces. Passionate about improving the user experience with innovative technical solutions.
					{/if}
				</p>
				
				<div class='social-links'>
					<a href='mailto:david_xd1996@live.com.mx' class='social-link email' aria-label='Email'>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path><polyline points='22,6 12,13 2,6'></polyline></svg>
					</a>
					<a href='https://linkedin.com/in/self-david' target='_blank' rel='noopener noreferrer' class='social-link linkedin' aria-label='LinkedIn'>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path><rect x='2' y='9' width='4' height='12'></rect><circle cx='4' cy='4' r='2'></circle></svg>
					</a>
					<a href='https://github.com/self-david' target='_blank' rel='noopener noreferrer' class='social-link github' aria-label='GitHub'>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path></svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</header>



<style>
	.logo {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  .logo span {
    background: linear-gradient(135deg, var(--primary-light), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--primary-light);
  }

  /* Header Styles */
  header {
    padding: 2rem 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

	.nav-controls {
    display: flex;
    gap: 1rem;
  }

	.theme-toggle, .lang-toggle {
    background: none;
    border: none;
    color: var(--text);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--transition-speed);
  }
  
  .theme-toggle:hover, .lang-toggle:hover {
    background-color: var(--background-light);
  }

	.lang-toggle {
    font-weight: 600;
    font-size: 0.875rem;
  }

	  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  @media (min-width: 768px) {
    .hero {
      flex-direction: row;
      text-align: left;
      gap: 4rem;
    }
  }

	.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--primary);
    margin-bottom: 1rem;
  }
  
  .profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .status-badges {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .badge {
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
  }
  
  .badge.available {
    background-color: var(--success);
    color: white;
  }
  
  .badge.freelance {
    background-color: var(--primary);
    color: white;
  }

	.intro h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .intro .name {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary-light), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0.5rem 0;
  }
  
  .intro h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }

  .intro p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    .intro .name {
      font-size: 2rem;
    }
  }

	@media (max-width: 480px) {
    .intro .name {
      font-size: 1.75rem;
    }
	}

	.highlight {
    color: var(--primary-light);
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--background-light);
    color: var(--text);
    transition: transform var(--transition-speed), background-color var(--transition-speed);
  }
  
  .social-link:hover {
    transform: translateY(-3px);
    background-color: var(--primary);
    color: white;
  }
</style>