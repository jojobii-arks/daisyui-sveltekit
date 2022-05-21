<script>
  import '../tailwind.css';
  import { preferences } from '../stores/preferences';

  let theme = $preferences.darkMode ? 'dracula' : 'light';
  $: theme = $preferences.darkMode ? 'dracula' : 'light';
</script>

<div data-theme={theme} class="prose min-h-screen min-w-full ">
  <slot />
</div>
