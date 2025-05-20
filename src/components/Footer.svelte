<script>
	export let isSpanish
</script>

<footer>
	<div class='container'>
		<div class='footer-content'>
			<p>© 2024 David Gutiérrez Alvarez</p>
			<p class='footer-credits'>
				{isSpanish ? 'Diseñado y desarrollado con' : 'Designed and developed with'} 
				<span class='heart'>❤</span> 
				{isSpanish ? 'usando Svelte' : 'using Svelte'}
			</p>
		</div>
	</div>
</footer>

<style>
  footer {
    padding: 2rem 0;
    background-color: var(--background-light);
    margin-top: 3rem;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }
  
  @media (min-width: 768px) {
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  
  .footer-content p {
    margin: 0;
    font-size: 0.9375rem;
  }
  
  .heart {
    color: #ef4444;
    display: inline-block;
    animation: heartbeat 1.5s infinite;
  }
  
  @keyframes heartbeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
</style>