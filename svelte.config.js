import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
let config;

const buildingForGithubPages = true;
const yourRepoName = 'daisyui-sveltekit';
const dev = process.env.NODE_ENV === 'development';

if (!buildingForGithubPages) {
  config = {
    kit: {
      adapter: adapter(),
      methodOverride: {
        allowed: ['PATCH', 'DELETE']
      }
    }
  };
} else {
  config = {
    kit: {
      adapter: adapterStatic({
        pages: 'build',
        assets: 'build'
      }),
      prerender: {
        default: true
      },
      paths: {
        base: dev ? '' : '/' + yourRepoName
      }
    },
    preprocess: [
      preprocess({
        postcss: true
      })
    ]
  };
}

export default config;
