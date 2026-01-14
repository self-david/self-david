<script>
  export let isSpanish
</script>

<footer>
  <div class="container">
    <div class="footer-content">
      <p>© 2026 David Gutiérrez Alvarez</p>
      <p class="footer-credits">
        {isSpanish ? 'Diseñado y desarrollado con' : 'Designed and developed with'}
        <span class="heart">❤</span>
        {isSpanish ? 'usando Svelte' : 'using Svelte'}
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 2rem 0 6rem 0; /* Space for bottom nav on mobile */
    background: transparent;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    margin-top: 4rem;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    text-align: center;
    color: var(--text-secondary);
  }

  @media (min-width: 768px) {
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 0; /* No bottom nav on desktop */
    }

    footer {
      padding-bottom: 2rem;
    }
  }

  .footer-content p {
    margin: 0;
    font-size: 0.9rem;
    font-family: var(--font-body);
  }

  .heart {
    color: var(--secondary);
    display: inline-block;
    animation: heartbeat 1.5s infinite;
    text-shadow: 0 0 10px var(--secondary);
  }

  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
