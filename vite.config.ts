import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '~app': '/src/app',
            '~shared': '/src/shared',
            '~widgets': '/src/widgets',
            '~entities': '/src/entities',
            '~features': '/src/features',
        },
    },
});
