import { writable } from 'svelte/store';

export const preferences = writable({
  darkMode: false
});
