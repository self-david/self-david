<script>
  import { fade, fly } from 'svelte/transition'
	export let closeModal
	export let activeProject
	export let isSpanish
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class='modal-overlay' on:click={closeModal} in:fade={{ duration: 300 }} out:fade={{ duration: 200 }}>
	{#if activeProject}
		<div class='modal-content' on:click|stopPropagation={() => {}} in:fly={{ y: 20, duration: 300 }} out:fly={{ y: 20, duration: 200 }}>
			<button class='modal-close' on:click={closeModal}>×</button>
			
			<div class='modal-header'>
				<h2>{activeProject.title}</h2>
				<h3>{activeProject.subtitle}</h3>
			</div>
			
			<div class='modal-body'>
				<div class='modal-image'>
					<img src={activeProject.image || `/placeholder.svg?height=400&width=600`} alt={activeProject.title} />
				</div>
				
				<div class='modal-description'>
					<p>{activeProject.description}</p>
					
					<div class='modal-features'>
						<h4>{isSpanish ? 'Características' : 'Features'}</h4>
						<ul>
							{#each activeProject.features as feature}
								<li>{feature}</li>
							{/each}
						</ul>
					</div>
					
					<div class='modal-tech'>
						<h4>{isSpanish ? 'Tecnologías' : 'Technologies'}</h4>
						<div class='tech-badges'>
							{#each activeProject.tech as tech}
								<span class='tech-badge'>{tech}</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
			
			<div class='modal-footer'>
				<a href={activeProject.link} target='_blank' rel='noopener noreferrer' class='cta-button'>
					{isSpanish ? 'Visitar proyecto' : 'Visit project'}
				</a>
			</div>
		</div>
	{/if}
</div>


<style>
	.tech-badge {
    padding: 0.25rem 0.75rem;
    background-color: var(--primary-dark);
    color: white;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
  }

	.tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
  }
  
  .modal-content {
    background-color: var(--card-bg);
    border-radius: 0.75rem;
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }
  
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--text);
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--background-light);
  }
  
  .modal-header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--border);
  }
  
  .modal-header h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
  }
  
  .modal-header h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin: 0;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
  
  .modal-image {
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  .modal-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .modal-description p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  .modal-features, .modal-tech {
    margin-bottom: 1.5rem;
  }
  
  .modal-features h4, .modal-tech h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  
  .modal-features ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .modal-features li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9375rem;
  }
  
  .modal-features li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--secondary);
    font-weight: bold;
  }
  

  
  .modal-footer {
    padding: 1.5rem;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: center;
  }
</style>