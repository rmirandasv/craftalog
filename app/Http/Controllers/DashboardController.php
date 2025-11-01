<?php

namespace App\Http\Controllers;

use App\Models\Catalog;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user();

        $stats = [
            'catalogs' => Catalog::where('user_id', $user->id)->count(),
            'products' => Product::where('user_id', $user->id)->count(),
            'categories' => ProductCategory::where('user_id', $user->id)->count(),
            'total_catalog_products' => Catalog::where('user_id', $user->id)
                ->withCount('products')
                ->get()
                ->sum('products_count'),
        ];

        $recentCatalogs = Catalog::where('user_id', $user->id)
            ->with('products')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($catalog) {
                return [
                    'id' => $catalog->id,
                    'name' => $catalog->name,
                    'company_name' => $catalog->company_name,
                    'cover_image' => $catalog->cover_image,
                    'products_count' => $catalog->products->count(),
                    'created_at' => $catalog->created_at,
                    'updated_at' => $catalog->updated_at,
                ];
            });

        $recentProducts = Product::where('user_id', $user->id)
            ->with('category')
            ->latest()
            ->take(5)
            ->get();

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'recentCatalogs' => $recentCatalogs,
            'recentProducts' => $recentProducts,
        ]);
    }
}
