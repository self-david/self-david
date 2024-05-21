<script>
	import ProfessionalResume from './components/ProfessionalResume.svelte'
	import IconEmail from './components/icons/Email.svelte'
	import IconLinkedIn from './components/icons/LinkedIn.svelte'
	import IconGithub from './components/icons/Github.svelte'

	window.geofeed = options => window.geolocation = options
	var json = document.createElement('script')
	json.setAttribute('src', 'https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location/geofeed')
	document.head.appendChild(json)

	const name = 'David Gutierrez Alvarez'
	const linkProps = {
		rel: 'noopener noreferrer',
		target: '_blank'
	}
</script>

<svelte:component this={ProfessionalResume} />
<main>
	<div>
		{#each [...Array(130).keys()] as idx}
			<p>{idx}</p>
		{/each}
	</div>

	<!-- <footer class="no-print" >
		<a href="mailto:david_xd1996@live.com.mx" title="Enviar un correo electrónico a {name} al correo david_xd1996@live.com.mx" {...linkProps}>
			<svelte:component this={IconEmail} />
		</a>
		<a href="https://www.linkedin.com/in/self-david/" title="Visitar el perfil de {name} en LinkedIn" {...linkProps}>
			<svelte:component this={IconLinkedIn} />
		</a>
		<a href="https://github.com/self-david" title="Visitar el perfil de {name} en GitHub" {...linkProps}>
			<svelte:component this={IconGithub} />
		</a>
	</footer> -->

	<!-- <span>
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<circle cx="12" cy="12" r="10"></circle>
			<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
			<path d="M2 12h20"></path>
		</svg>
		Guadalajara, Jalisco
	</span> -->
</main>

<style>
	main {
		display: flex;
		width: 100%;
		max-width: 1200px;
		position: sticky;
		top: 0;
	}

	footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 100%;
		padding: 1rem;
		display: flex;
		justify-content: center;
	}
</style>