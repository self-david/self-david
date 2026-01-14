<script>
  import { fade, fly } from 'svelte/transition'
  export let closeModal
  export let activeProject
  export let isSpanish
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal-overlay" on:click={closeModal} in:fade={{ duration: 300 }} out:fade={{ duration: 200 }}>
  {#if activeProject}
    <div
      class="modal-content glass-panel"
      on:click|stopPropagation={() => {}}
      in:fly={{ y: 20, duration: 300 }}
      out:fly={{ y: 20, duration: 200 }}
    >
      <button class="modal-close" on:click={closeModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg
        >
      </button>

      <div class="modal-header">
        <h2>{activeProject.title}</h2>
        <h3>{activeProject.subtitle}</h3>
      </div>

      <div class="modal-body">
        <div class="modal-image">
          <img src={activeProject.image || `/placeholder.svg?height=400&width=600`} alt={activeProject.title} />
        </div>

        <div class="modal-description">
          <p>{activeProject.description}</p>

          <div class="modal-features">
            <h4>{isSpanish ? 'Características' : 'Features'}</h4>
            <ul>
              {#each activeProject.features as feature}
                <li>{feature}</li>
              {/each}
            </ul>
          </div>

          <div class="modal-tech">
            <h4>{isSpanish ? 'Tecnologías' : 'Technologies'}</h4>
            <div class="tech-badges">
              {#each activeProject.tech as tech}
                <span class="tech-badge glass-badge">{tech}</span>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <a href={activeProject.link} target="_blank" rel="noopener noreferrer" class="cta-button neon-btn">
          {isSpanish ? 'Visitar proyecto' : 'Visit project'}
        </a>
      </div>
    </div>
  {/if}
</div>

<style>
  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 1rem;
  }

  .modal-content {
    /* glass-panel handles base styles */
    background: rgba(15, 12, 41, 0.95); /* darker background for readability */
    border: 1px solid var(--glass-border);
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: var(--text);
    cursor: pointer;
    z-index: 10;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s;
  }

  .modal-close:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  .modal-header {
    padding: 2rem;
    border-bottom: 1px solid var(--glass-border);
    background: linear-gradient(to right, rgba(255, 255, 255, 0.03), transparent);
  }

  .modal-header h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    background: linear-gradient(to right, #fff, #cbd5e1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .modal-header h3 {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--secondary);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .modal-body {
    padding: 2rem;
  }

  .modal-image {
    margin-bottom: 2rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
  }

  .modal-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  .modal-description p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: var(--text-secondary);
  }

  .modal-features h4,
  .modal-tech h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary);
  }

  .modal-features ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .modal-features li {
    position: relative;
    padding-left: 2rem;
    font-size: 1rem;
    color: var(--text);
  }

  .modal-features li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--secondary);
    font-weight: bold;
    background: rgba(52, 211, 153, 0.1);
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.8rem;
  }

  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .tech-badge {
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .glass-badge {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text);
  }

  .modal-footer {
    padding: 2rem;
    border-top: 1px solid var(--glass-border);
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
  }

  .neon-btn {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.05em;
    box-shadow: 0 10px 20px rgba(157, 125, 250, 0.3);
    transition: all 0.3s ease;
  }

  .neon-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(157, 125, 250, 0.5);
    filter: brightness(1.1);
  }
</style>
