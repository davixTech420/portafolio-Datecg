<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (config('app.env') === 'production') {
            $scheme = request()->getScheme();
            if ($scheme === 'http') {
                URL::forceScheme('http');
            } elseif ($scheme === 'https') {
                URL::forceScheme('https');
            }
        }

        //
    }
}
