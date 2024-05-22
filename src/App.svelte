<script>
	import ProfessionalResume from './components/ProfessionalResume.svelte'
	import Experiences from './components/Experiences.svelte';

	window.geofeed = options => window.geolocation = options
	var json = document.createElement('script')
	json.setAttribute('src', 'https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location/geofeed')
	document.head.appendChild(json)
</script>

<svelte:component this={ProfessionalResume} />
<main>
	<Experiences />
	<div>
		{#each [...Array(130).keys()] as idx}
			<p>{idx}</p>
		{/each}
	</div>


</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1200px;
		padding-top: 100px;
	}

	@media (max-width: 768px) {
		main {
			background-color: red;
		}
	}
</style>