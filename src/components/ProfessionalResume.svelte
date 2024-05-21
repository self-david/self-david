<script>
  import Button from "./Button.svelte"
	import IconEmail from './icons/Email.svelte'
	import IconLinkedIn from './icons/LinkedIn.svelte'
	import IconGithub from './icons/Github.svelte'
</script>

<div class='resume'>
  <div class='resume-header'>
    <img src="./profile.jpg" alt="">
    <Button size='small'>Disponible</Button>
    <Button size='small'>Abierto a Freelance</Button>
  </div>
  <div>
    <p class='say'>¡Hola! mi nombre es</p>
    <h1>David Gutiérrez Alvarez</h1>
    <p class='desc'><span class='highlighted'>Desarrollador front-end</span> con <span class='highlighted'>3 años de experiencia</span>, especializado en crear interfaces intuitivas y funcionales. Apasionado por mejorar la experiencia del usuario con soluciones técnicas innovadoras.</p>
  </div>

  <div class='resume-links'>
    <Button><IconEmail /> Correo</Button>
    <Button><IconLinkedIn /> LinkedIn</Button>
    <Button><IconGithub /> Github</Button>
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
</style>