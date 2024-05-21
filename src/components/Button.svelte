<script>
  export let size = 'medium';
</script>

<button class={size}>
  <slot />
</button>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 16px;
    border-radius: 18px;
    background-color: var(--color-dark);
    color: #FFF;
    border: 1px solid var(--color-gray);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-gray);
  }

  .small {
    height: 28px;
    font-size: 14px;
  }

  .medium {
    height: 36px;
    font-size: 16px;
  }
</style>