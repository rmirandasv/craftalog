<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(relations: ['brand', 'categories'])
            ->paginate(12);

        $categories = Category::all();

        $brands = Brand::all();

        return Inertia::render(component: 'products/index', props: [
            'products' => $products,
            'categories' => $categories,
            'brands' => $brands,
        ]);
    }
}
