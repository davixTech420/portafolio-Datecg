import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
            https: true,
        }),
    ],
    build: {
        base: './', 
        outDir: 'public/build',
        assetsDir: 'assets',  
    }, 

    
});
