<script>
	import ProfessionalResume from './components/ProfessionalResume.svelte'
	import Experiences from './components/Experiences.svelte'
	import Skills from './components/Skills.svelte'
	import Educations from './components/Educations.svelte'
	import AboutMe from './components/AboutMe.svelte'

	window.geofeed = options => window.geolocation = options
	var json = document.createElement('script')
	json.setAttribute('src', 'https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location/geofeed')
	document.head.appendChild(json)
</script>

<ProfessionalResume />

<main>
	<Experiences />
	<Skills />
	<Educations />
	<AboutMe />
	<div>
		{#each [...Array(50).keys()] as idx}
			<p>{idx}</p>
		{/each}
	</div>


</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 100%;
		max-width: 1200px;
		padding-top: 100px;
	}

	@media (max-width: 1200px) {
		main {
			padding-top: 30px;
		}
	}

	@media (max-width: 768px) {
		main {
			/* background-color: red; */
		}
	}
</style>