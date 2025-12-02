import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const rootDir = dirname(fileURLToPath(import.meta.url));
const srcPath = resolve(rootDir, 'src');

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#components': resolve(srcPath, 'components'),
      '#constants': resolve(srcPath, 'constants'),
      '#store': resolve(srcPath, 'store'),
      '#hoc': resolve(srcPath, 'hoc'),
      '#windows': resolve(srcPath, 'windows'),
    },
  },
});
