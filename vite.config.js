/* import { defineConfig } from 'vite';
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
S
    
});
 */
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      // ... other configurations ...
      host: 'portafolioda.up.railway.app',
      https: true,
      base: 'https://portafolioda.up.railway.app',
    }),
  ],
  server: {
    host: 'portafolioda.up.railway.app',
    hmr: { host: 'portafolioda.up.railway.app' },
  },
  build: {
    outDir: 'public/build',
    assetsDir: 'assets',
  },
});