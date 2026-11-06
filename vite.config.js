import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Указываем Vite, какие расширения файлов искать автоматически при импортах
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
});