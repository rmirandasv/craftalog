<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::query()
            ->withCount(relations: ['products'])
            ->visible()
            ->featured()
            ->take(4)
            ->get();

        $brands = Brand::query()
            ->visible()
            ->featured()
            ->take(6)
            ->get();

        $products = Product::query()
            ->visible()
            ->featured()
            ->take(4)
            ->get();

        return Inertia::render(component: 'home', props: [
            'categories' => $categories,
            'brands' => $brands,
            'products' => $products
        ]);
    }
}
