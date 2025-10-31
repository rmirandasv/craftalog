<?php

namespace App\Http\Controllers;

use App\Actions\Product\CreateProduct;
use App\Actions\Product\DeleteProduct;
use App\Actions\Product\UpdateProduct;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(): Response
    {
        Gate::authorize('viewAny', Product::class);

        $products = Product::with('category')
            ->paginate();

        return Inertia::render('products/index', [
            'products' => $products,
        ]);
    }

    public function create(): Response
    {
        Gate::authorize('create', Product::class);

        $categories = ProductCategory::all();

        return Inertia::render('products/create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request, CreateProduct $createProduct): RedirectResponse
    {
        $createProduct->handle($request->all());

        return redirect()->route('products.index');
    }

    public function edit(Product $product): Response
    {
        Gate::authorize('update', $product);

        $categories = ProductCategory::all();

        return Inertia::render('products/edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }

    public function update(Product $product, Request $request, UpdateProduct $updateProduct): RedirectResponse
    {
        $updateProduct->handle($product, $request->all());

        return redirect()->route('products.index');
    }

    public function destroy(Product $product, DeleteProduct $deleteProduct): RedirectResponse
    {
        $deleteProduct->handle($product);

        return redirect()->route('products.index');
    }
}
