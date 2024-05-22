<script>
  import Button from "./Button.svelte"
	import IconEmail from './icons/Email.svelte'
	import IconGithub from './icons/Github.svelte'

  const openLink = url => window.open(url, "_blank")
</script>

<div class="proyects">
  <h2>Proyectos destacados</h2>

  <div class='card'>
    <!-- <img src="" alt=""> -->
    <div class="img"></div>
    <div class="card-desc">
      <h3>Codax - Lenguanje de programación</h3>
      <div class="tags">
        <p>React</p>
        <p>Electron</p>
      </div>
      <p>Es una plataforma de aprendizaje de programación en español que te lleva de la mano desde principiante y da el primer paso hacia una emocionante carrera.</p>
      <div class='card-links'>
        <Button on:click={() => openLink('https://dummycode.qahub.dev/')}><IconGithub /> Sitio web</Button>
        <!-- <Button on:click={() => openLink('https://github.com/self-david')}><IconEmail /> Github</Button> -->
      </div>
    </div>
  </div>

  <div class='card'>
    <img src="./liteimage.webp" alt="">
    <div class="card-desc">
      <h3>LiteImage - Reduce el peso de las imágenes</h3>
      <div class="tags">
        <p>React</p>
      </div>
      <p>Es una aplicacion web que te ayuda a reducir el peso de tus imágenes. Toltalmente gratuita.</p>
      <div class='card-links'>
        <Button on:click={() => openLink('https://liteimage.pro')}><IconGithub /> Sitio web</Button>
        <!-- <Button on:click={() => openLink('https://github.com/self-david')}><IconEmail /> Github</Button> -->
      </div>
    </div>
  </div>
</div>


<style>
  .proyects {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-accent);
  }

  .card {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
  }

  .card-desc {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
  }

  .card-links {
    display: flex;
    justify-content: space-between;
  }

  .tags {
    display: flex;
    gap: 10px;
  }

  .img, img {
    width: 320px;
    height: 200px;
    background-color: var(--color-weak-accent);
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    .proyects {
      gap: 40px;
    }
    .card {
      flex-direction: column;
      gap: 10px;
    }

    .img, img {
      width: 100%;
    }
    img {
      height: auto;
    }
  }
</style>