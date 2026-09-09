// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.calogerogebbia.it', // <-- INSERISCI QUI IL TUO DOMINIO REALE (es. https://calogerogebbia.com)
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});