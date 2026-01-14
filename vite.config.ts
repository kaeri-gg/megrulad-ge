import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { cwd } from 'node:process';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: 'public',
  server: {
    host: 'localhost',
    port: 4096,
    strictPort: true,
    open: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@styles': cwd() + '/src/styles',
      '@assets': cwd() + '/assets',
      '@public': cwd() + '/public',
      '@tests': cwd() + '/tests',
      '@src': cwd() + '/src',
    },
  },
  base: './',
  build: {
    chunkSizeWarningLimit: 700,
    reportCompressedSize: true,
    sourcemap: true,
    assetsDir: '.',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: 'index.html',
      },
    },
  },
});
