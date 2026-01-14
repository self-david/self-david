<script>
  export let scrollToSection
  export let activeSection = 0
</script>

<nav class="bottom-nav glass-panel">
  <button class="nav-item" on:click={() => scrollToSection(-1)} class:active={activeSection === -1} aria-label="Home">
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
      ><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"
      ></polyline></svg
    >
  </button>

  <button class="nav-item" on:click={() => scrollToSection(0)} class:active={activeSection === 0} aria-label="Skills">
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
      ><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline
        points="2 12 12 17 22 12"
      ></polyline></svg
    >
  </button>

  <button
    class="nav-item"
    on:click={() => scrollToSection(1)}
    class:active={activeSection === 1}
    aria-label="Experience"
  >
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
      ><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path
        d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
      ></path></svg
    >
  </button>

  <button class="nav-item" on:click={() => scrollToSection(2)} class:active={activeSection === 2} aria-label="Projects">
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
      ><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg
    >
  </button>

  <button class="nav-item" on:click={() => scrollToSection(3)} class:active={activeSection === 3} aria-label="Contact">
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
      ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline
        points="22,6 12,13 2,6"
      ></polyline></svg
    >
  </button>
</nav>

<style>
  .bottom-nav {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1.5rem;
    padding: 1rem 2rem;
    z-index: 1000;
    border-radius: 50px;
    /* glass-panel styles are inherited/composed but defined here for specificity if needed */
    background: rgba(15, 12, 41, 0.6); /* Slightly darker for visibility */
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .nav-item {
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-item:hover {
    color: var(--text);
    background: rgba(255, 255, 255, 0.1);
  }

  .nav-item.active {
    color: var(--primary);
    background: rgba(157, 125, 250, 0.2);
    box-shadow: 0 0 15px var(--primary-glow);
  }

  /* Desktop hidden */
  @media (min-width: 769px) {
    .bottom-nav {
      display: none;
    }
  }

  /* Mobile adjustments */
  @media (max-width: 480px) {
    .bottom-nav {
      bottom: 1rem;
      padding: 0.75rem 1.5rem;
      gap: 1rem;
      width: 90%;
      justify-content: space-between;
    }
  }
</style>
