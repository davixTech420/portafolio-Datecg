import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    base: 'https://portafolioda.up.railway.app/public/build/', 
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                /* 'resources/js/crm.js', */
            ],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'public/build',  
        
    }, 
});
