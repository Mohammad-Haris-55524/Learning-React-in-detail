import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // You can customize Ant Design variables here
          '@primary-color': '#1DA57A', // Example of customizing primary color
        },
      },
    },
  },
});
