module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dracula'],
    darkTheme: 'dracula'
  }
};