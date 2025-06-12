<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::with(relations: ['brand', 'category'])
            ->when($request->has('categories'), function (Builder $query) use ($request) {
                $query->whereIn('category_id', $request->array('categories'));
            })
            ->when($request->has('brands'), function (Builder $query) use ($request) {
                $query->whereIn('brand_id', $request->array('brands'));
            })
            ->paginate(12);

        $categories = Category::all();

        $brands = Brand::all();

        return Inertia::render(component: 'products/index', props: [
            'products' => $products,
            'categories' => $categories,
            'brands' => $brands,
        ]);
    }

    public function show(Product $product)
    {
        return Inertia::render(component: 'products/show', props: [
            'product' => $product->load(relations: ['categories', 'brand']),
        ]);
    }
}
