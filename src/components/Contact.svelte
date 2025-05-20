<script>
	export let isSpanish
	export let sections


</script>

<section bind:this={sections[4]}>
	<div class='container'>
		<h2 class='section-title'>
			{isSpanish ? 'Contacto' : 'Contact'}
		</h2>
		
		<div class='contact-content'>
			<div class='contact-text'>
				<p>
					{#if isSpanish}
						¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para trabajos freelance y colaboraciones.
					{:else}
						Do you have a project in mind? Let's talk! I'm available for freelance work and collaborations.
					{/if}
				</p>
			</div>
			
			<div class='contact-cta'>
				<a href='mailto:david_xd1996@live.com.mx' class='cta-button'>
					{isSpanish ? 'Envíame un mensaje' : 'Send me a message'}
				</a>
			</div>
		</div>
	</div>
</section>

<style>
  .contact-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }
  
  .contact-text {
    margin-bottom: 2rem;
  }
  
  .contact-text p {
    font-size: 1.125rem;
    line-height: 1.7;
  }
</style>