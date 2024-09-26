import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                /* 'resources/js/crm.js', */
            ],
            refresh: true,
            https: true
        }),
    ],
    build: {
        base: 'https://portafolioda.up.railway.app/', 
        outDir: 'public/build',
        assetsDir: 'assets',  
    }, 

    
});
