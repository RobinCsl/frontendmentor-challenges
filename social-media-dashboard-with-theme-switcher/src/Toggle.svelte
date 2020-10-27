<script lang="ts">
  let checked: boolean = false;
  function toggleTheme() {
    checked = !checked;
    window.document.body.classList.toggle("light-mode");
  }
</script>

<style type="postcss">
  :global(:root) {
    --color-bg-toggle: linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    --background: hsl(230, 17%, 14%);
    --top-background-pattern: hsl(232, 19%, 15%);
    --card-background: hsl(228, 28%, 20%);
    --card-background-hover: hsl(228, 28%, 30%);
    --primary: hsl(0, 0%, 100%);
    --secondary: hsl(228, 34%, 66%);
    --scale: 0.175rem;
  }
  :global(body.light-mode) {
    --color-bg-toggle: linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    --background: hsl(0, 0%, 100%);
    --top-background-pattern: hsl(225, 100%, 98%);
    --card-background: hsl(227, 47%, 96%);
    --card-background-hover: hsl(227, 47%, 90%);
    --primary: hsl(230, 17%, 14%);
    --secondary: hsl(228, 12%, 44%);
  }

  button {
    width: calc(16 * var(--scale));
    height: calc(8 * var(--scale));
  }

  .slider {
    @apply absolute top-0 left-0 right-0 bottom-0 rounded-full transition-transform duration-300;
    background: var(--color-bg-toggle);
  }
  .slider:before {
    @apply absolute rounded-full bg-background duration-300 transition-transform;
    height: calc(6 * var(--scale));
    width: calc(6 * var(--scale));
    left: var(--scale);
    bottom: var(--scale);
    content: "";
  }
  .slider:hover:before {
    @apply bg-card-background-hover;
  }
  .slider:active {
    @apply shadow-outline;
  }

  button[aria-label="light mode"] .slider {
    background: var(--secondary);
  }
  button[aria-label="light mode"] .slider:hover {
    background: var(--color-bg-toggle);
  }
  button[aria-label="light mode"] .slider:before {
    -webkit-transform: translateX(calc(8 * var(--scale)));
    -ms-transform: translateX(calc(8 * var(--scale)));
    transform: translateX(calc(8 * var(--scale)));
  }
</style>

<button
  class="relative inline-block w-16 h-8 border-none outline-none focus:outline-none group"
  type="button"
  on:click={toggleTheme}
  aria-label={checked ? 'light mode' : 'dark mode'}>
  <span class="slider group-focus:shadow-outline active:shadow-outline" />
</button>
