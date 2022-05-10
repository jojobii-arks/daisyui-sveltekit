<script>
  import { onMount } from 'svelte';

  onMount(() => {
    themeChange(false);
  });

  import '../app.css';
  import { preferences } from '../stores/preferences';

  let theme = $preferences.darkMode ? 'dracula' : 'light';
  $: theme = $preferences.darkMode ? 'dracula' : 'light';
</script>

<div data-theme={theme} class="bg-base-100">
  <slot />
</div>
