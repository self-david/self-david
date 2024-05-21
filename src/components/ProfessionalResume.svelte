<script>
  import Button from "./Button.svelte"
	import IconEmail from './icons/Email.svelte'
	import IconLinkedIn from './icons/LinkedIn.svelte'
	import IconGithub from './icons/Github.svelte'

  const openLink = url => window.open(url, "_blank")
</script>

<div class='resume'>
  <div class='resume-header'>
    <img src="./profile.jpg" alt="">
    <Button size='small' on:click={() => openLink('https://www.linkedin.com/in/self-david')}>Disponible</Button>
    <Button size='small' on:click={() => openLink('https://www.linkedin.com/in/self-david')}>Abierto a Freelance</Button>
  </div>
  <div>
    <p class='say'>¡Hola! mi nombre es</p>
    <h1>David Gutiérrez Alvarez</h1>
    <p class='desc'><span class='highlighted'>Desarrollador front-end</span> con <span class='highlighted'>3 años de experiencia</span>, especializado en crear interfaces intuitivas y funcionales. Apasionado por mejorar la experiencia del usuario con soluciones técnicas innovadoras.</p>
  </div>

  <div class='resume-links'>
    <Button on:click={() => openLink('mailto:david_xd1996@live.com.mx')}><IconEmail /> Correo</Button>
    <Button on:click={() => openLink('https://www.linkedin.com/in/self-david')}><IconLinkedIn /> LinkedIn</Button>
    <Button on:click={() => openLink('https://github.com/self-david')}><IconGithub /> Github</Button>
  </div>
</div>

<style>
  .resume {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
    position: sticky;
    top: 0;
    height: 100vh;
    max-width: 500px;
  }



  .resume-header {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    width: 64px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-right: 8PX;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
  }

  .say, .desc {
    font-size: 20px;
  }

  .highlighted {
    color: var(--color-accent);
    font-weight: 700;
  }

  .resume-links {
    display: flex;
    gap: 25px;
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    .resume {
      flex-direction: column;
      height: auto;
      position: relative;
	  }

    h1 {
      font-size: 30px;
      white-space: nowrap;
    }

    .say, .desc {
      font-size: 16px;
    }

    .resume-links {
      display: flex;
      gap: 0;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
    }
  }
</style>