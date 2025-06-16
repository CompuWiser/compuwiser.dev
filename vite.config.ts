import path from 'path';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      quoteStyle: 'single',
      semicolons: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['@tanstack/react-router'],
        },
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      // https://github.com/webpack/loader-utils#interpolatename
      // https://v2.vitejs.dev/config/#css-modules
      generateScopedName: '[folder]--[local]--[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
