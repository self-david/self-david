
<div class="experiences">
  <h2>Experiencia laboral</h2>
  <ol>
    <li>
      <div>
        <h4>Buscabot - FrontEnd developer</h4>
        <p>Marzo 2022 - Actualmente</p>
      </div>
      <span>
        Mi enfoque principal es el desarrollo front-end del sitio web, transformando todo el diseño UI/UX en código y creando la interfaz de usuario, trabajando con el modelo first-mobile.
      </span>
    </li>
    <li>
      <div>
        <h4>Hartec - Fullstack</h4>
        <p>Agosto 2021 - Marzo 2022</p>
      </div>
      <span>
        Mi trabajo consistía en desarrollar aplicaciones para clientes usando C# (. Net) e IIS (ventana) para implementar las aplicaciones.
      </span>
    </li>
    <li>
      <div>
        <h4>Geeo - Fullstack</h4>
        <p>Febrero 2019 - Agosto 2019</p>
      </div>
      <span>
        python y PyQt ...
      </span>
    </li>
  </ol>
</div>

<style>
  .experiences {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  ol {
    display: flex;
    flex-direction: column;
    /* gap: 30px; */
  }

  li {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding-bottom: 30px;
    position: relative;
  }

  li::before {
    border-left: 2px solid var(--color-weak-accent);
    content: '';
    left: -20px;
    top: -10px;
    position: absolute;
    height: 100%;
  }

  li::after {
    content: '•';
    color: var(--color-accent);
    font-size: 56px;
    position: absolute;
    left: -30px;
    top: -20px;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  h4 {
    font-size: 16px;
    color:var(--color-accent);
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: var(--color-weak-accent);
  }

  span {
    font-size: 16px;
    width: 350px;
  }

  @media (max-width: 768px) {
    li {
      flex-direction: column;
    }

    li::before {
    border-left: 2px solid var(--color-weak-accent);
    content: '';
    left: -12px;
    top: -10px;
    position: absolute;
    height: 100%;
  }

  li::after {
    content: '•';
    color: var(--color-accent);
    font-size: 42px;
    position: absolute;
    left: -20px;
    top: -10px;
  }
	}
</style>