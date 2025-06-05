<?php

namespace App\Http\Middleware;

use App\Models\Brand;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'categories' => Cache::remember(
                key: 'navigation.categories',
                ttl: 30,
                callback: fn () => Category::orderBy(column: 'created_at', direction: 'desc')
                    ->take(5)
                    ->get(),
            ),
            'brands' => Cache::remember(
                key: 'navigation.brands',
                ttl: 30,
                callback: fn () => Brand::orderBy(column: 'created_at', direction: 'desc')
                    ->take(5)
                    ->get(),
            ),
        ];
    }
}
