<script>
  export let isSpanish
  export let sections
</script>

<section bind:this={sections[4]}>
  <div class="container">
    <h2 class="section-title">
      {isSpanish ? 'Contacto' : 'Contact'}
    </h2>

    <div class="contact-content glass-panel">
      <div class="contact-text">
        <p>
          {#if isSpanish}
            ¿Tienes un proyecto en mente? <strong>¡Hablemos!</strong><br />
            Estoy disponible para trabajos freelance y colaboraciones.
          {:else}
            Do you have a project in mind? <strong>Let's talk!</strong><br />
            I'm available for freelance work and collaborations.
          {/if}
        </p>
      </div>

      <div class="contact-cta">
        <a href="mailto:david_xd1996@live.com.mx" class="neon-btn">
          {isSpanish ? 'Envíame un mensaje' : 'Send me a message'}
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
            class="send-icon"
            ><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg
          >
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding: 4rem 0 8rem 0; /* Extra padding at bottom for nav */
  }

  .contact-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border: 1px solid var(--glass-border);
  }

  .contact-text p {
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .contact-text strong {
    color: var(--text);
    font-size: 1.5rem;
  }

  .neon-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    box-shadow: 0 10px 20px rgba(157, 125, 250, 0.3);
    transition: all 0.3s ease;
  }

  .neon-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(52, 211, 153, 0.4);
    filter: brightness(1.1);
  }

  .send-icon {
    transition: transform 0.3s ease;
  }

  .neon-btn:hover .send-icon {
    transform: translate(3px, -3px);
  }

  @media (max-width: 768px) {
    .contact-content {
      padding: 2rem;
      margin: 0 1rem;
    }

    .neon-btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
