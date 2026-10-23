import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://darkcirclepooh.github.io',
  base: '/my_profile',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
