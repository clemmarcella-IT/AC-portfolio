import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Ignore large media files in the project root to prevent EBUSY errors
      ignored: ['**/*.mp4', '**/*.mov', '**/*.mkv', '**/*.avi', '**/*.webm'],
    },
  },
});
