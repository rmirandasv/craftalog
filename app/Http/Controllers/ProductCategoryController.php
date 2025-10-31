<?php

namespace App\Http\Controllers;

use App\Actions\ProductCategory\CreateProductCategory;
use App\Actions\ProductCategory\DeleteProductCategory;
use App\Actions\ProductCategory\UpdateProductCategory;
use App\Models\ProductCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class ProductCategoryController extends Controller
{
    public function index(): Response
    {
        Gate::authorize('viewAny', ProductCategory::class);

        $categories = ProductCategory::paginate();

        return Inertia::render('categories/index', [
            'categories' => $categories,
        ]);
    }

    public function create(): Response
    {
        Gate::authorize('create', ProductCategory::class);

        return Inertia::render('categories/create');
    }

    public function store(Request $request, CreateProductCategory $createProductCategory): RedirectResponse
    {
        Gate::authorize('create', ProductCategory::class);

        $createProductCategory->handle($request->all());

        return redirect()->route('categories.index');
    }

    public function edit(ProductCategory $category): Response
    {
        Gate::authorize('update', $category);

        return Inertia::render('categories/edit', [
            'category' => $category,
        ]);
    }

    public function update(ProductCategory $category, Request $request, UpdateProductCategory $updateProductCategory): RedirectResponse
    {
        $updateProductCategory->handle($category, $request->all());

        return redirect()->route('categories.index');
    }

    public function destroy(ProductCategory $category, DeleteProductCategory $deleteProductCategory): RedirectResponse
    {
        $deleteProductCategory->handle($category);

        return redirect()->route('categories.index');
    }
}
