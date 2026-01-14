<script>
  import { fly } from 'svelte/transition'
  export let isSpanish
  export let sections

  $: skills = [
    {
      category: isSpanish ? 'Lenguajes' : 'Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      category: isSpanish ? 'Frameworks & Librerías' : 'Frameworks & Libraries',
      items: ['Svelte', 'React', 'Next js', 'Node.js', 'Express'],
    },
    {
      category: isSpanish ? 'Herramientas & Otros' : 'Tools & Others',
      items: ['Git', 'Github', 'Figma', 'Responsive Design', 'UI/UX Design', 'RESTful APIs'],
    },
    {
      category: isSpanish ? 'Soft Skills' : 'Soft Skills',
      items: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile/Scrum'],
    },
  ]
</script>

<section bind:this={sections[0]}>
  <div class="container">
    <h2 class="section-title">
      {isSpanish ? 'Habilidades' : 'Skills'}
    </h2>

    <div class="skills-categories">
      {#each skills as skill, i}
        <div class="skill-category glass-panel" in:fly={{ y: 20, delay: i * 150, duration: 800 }}>
          <h3 class="category-title">{skill.category}</h3>
          <div class="skills-list">
            {#each skill.items as skillName, j}
              <div class="skill-tag glass-badge" style="animation-delay: {j * 0.1}s">
                {skillName}
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    padding: 4rem 0;
  }

  .skills-categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  .skill-category {
    flex: 1 1 300px;
    padding: 2.5rem;
    transition: transform 0.3s ease;
    /* glass-panel handles bg */
  }

  .skill-category:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: var(--primary-glow);
  }

  .category-title {
    font-size: 1.5rem;
    margin-bottom: 25px;
    color: var(--primary);
    text-align: center;
    font-weight: 700;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .skill-tag {
    font-size: 0.95rem;
    padding: 10px 18px;
    color: var(--text);
    /* glass-badge handles base styles but we override specific colors if needed */
    transition: all 0.3s ease;
    animation: tagEntrance 0.5s ease forwards;
    cursor: default;
  }

  .glass-badge {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    backdrop-filter: blur(5px);
  }

  .skill-tag:hover {
    background: var(--primary);
    color: white;
    transform: scale(1.05);
    box-shadow: 0 0 15px var(--primary-glow);
    border-color: var(--primary);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .skills-categories {
      flex-direction: column;
      align-items: center;
    }

    .skill-category {
      width: 100%;
      padding: 1.5rem;
    }
  }
</style>
