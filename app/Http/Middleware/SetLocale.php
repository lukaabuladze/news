<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $locale = $request->lang ?? 'ka';
        unset($request['lang']);
        if(!in_array($locale, ['ka', 'en', 'ru'])) $locale = 'ka';
        app()->setlocale($locale);

        return $next($request);
    }
}
