<script>
  import { fly } from 'svelte/transition'
	export let isSpanish
	export let sections

	$: skills = [
    {
      category: isSpanish ? 'Lenguajes' : 'Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      category: isSpanish ? 'Frameworks & Librerías' : 'Frameworks & Libraries',
      items: ['Svelte', 'React', 'Next js', 'Node.js', 'Express']
    },
    {
      category: isSpanish ? 'Herramientas & Otros' : 'Tools & Others',
      items: ['Git', 'Github', 'Figma', 'Responsive Design', 'UI/UX Design', 'RESTful APIs']
    }
  ];
</script>

<section bind:this={sections[0]}>
	<div class='container'>
		<h2 class='section-title'>
			{isSpanish ? 'Habilidades' : 'Skills'}
		</h2>

		<div class='skills-categories'>
			{#each skills as skill, i}
				<div  class='skill-category'  in:fly={{ y: 20, delay: i * 150, duration: 800 }}>
					<h3 class='category-title'>{skill.category}</h3>
					<div class='skills-list'>
						{#each skill.items as skillName, j}
							<div class='skill-tag' style='animation-delay: {j * 0.1}s'>
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
	.skills-categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

	.skill-category {
    flex: 1 1 300px;
    background-color: var(--background-color);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
		background-color: var(--card-bg);
  }

  .skill-category:hover {
    transform: translateY(-5px);
  }

	.category-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--text-color);
    text-align: center;
  }

	.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .skill-tag {
    font-size: 1rem;
    padding: 8px 15px;
    background-color: var(--primary-color);
    color: var(--light-text-color);
    border-radius: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    animation: tagEntrance 0.5s ease forwards;
    /* opacity: 0; */
  }

  .skill-tag:hover {
    background-color: var(--primary-color-dark);
    transform: scale(1.1);
  }

	  /* Responsive adjustments */
  @media (max-width: 768px) {
    .skills-categories {
      flex-direction: column;
      align-items: center;
    }

    .skill-category {
      width: 80%;
    }
  }
</style>