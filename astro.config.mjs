import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nokuchimbetete.vercel.app',
  markdown: {
    // Off on purpose: smartypants rewrites punctuation in the stories
    // (e.g. "I say...I say....." collapses into ellipsis characters).
    // Curly quotes are typed directly into the markdown instead.
    smartypants: false,
  },
});
