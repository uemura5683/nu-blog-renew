import { defineConfig } from 'vite';
import { resolve } from 'path';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  scripts: {
    "build": "vite build",
    "preview": "vite preview"
  },
  publicDir: 'public',
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        business: resolve(__dirname, 'business.html'),
        profile: resolve(__dirname, 'profile.html')
      }
    }
  },
});
