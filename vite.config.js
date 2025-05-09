import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // ixtiyoriy: src papkasini qisqa yo‘l bilan chaqirish uchun
    },
  },
});
