<?php

namespace App\Providers;

use App\Services\Maps\Maps;
use App\Services\Trip\Trip;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton("Maps", function ($app) {
            return new Maps();
        });
        $this->app->singleton("Trip", function ($app) {
            return new Trip();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
