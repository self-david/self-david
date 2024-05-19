<script>
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

<main>
	<div class="info" >
		<h1 >{name}</h1>
		<h2 >Desarrollador Front-end con 3 años de experiencia</h2>
		<span >
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10"></circle>
				<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
				<path d="M2 12h20"></path>
			</svg>
			Guadalajara, Jalisco
		</span>

		<footer class="no-print" >
			<a href="mailto:david_xd1996@live.com.mx" title="Enviar un correo electrónico a {name} al correo david_xd1996@live.com.mx" {...linkProps}>
				<svelte:component this={IconEmail} />
			</a>
			<a href="https://www.linkedin.com/in/self-david/" title="Visitar el perfil de {name} en LinkedIn" {...linkProps}>
				<svelte:component this={IconLinkedIn} />
			</a>
			<a href="https://github.com/self-david" title="Visitar el perfil de {name} en GitHub" {...linkProps}>
				<svelte:component this={IconGithub} />
			</a>
		</footer>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>