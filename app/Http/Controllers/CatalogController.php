<?php

namespace App\Http\Controllers;

use App\Actions\Catalog\CreateCatalog;
use App\Actions\Catalog\DeleteCatalog;
use App\Actions\Catalog\UpdateCatalog;
use App\Models\Catalog;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class CatalogController extends Controller
{
    public function index(): Response
    {
        Gate::authorize('viewAny', Catalog::class);

        $catalogs = Catalog::with('products')->paginate();

        return Inertia::render('catalogs/index', [
            'catalogs' => $catalogs,
        ]);
    }

    public function create(): Response
    {
        Gate::authorize('create', Catalog::class);

        $products = Product::all();

        return Inertia::render('catalogs/create', [
            'products' => $products,
        ]);
    }

    public function store(Request $request, CreateCatalog $createCatalog): RedirectResponse
    {
        $createCatalog->handle($request->all());

        return redirect()->route('catalogs.index');
    }

    public function edit(Catalog $catalog): Response
    {
        Gate::authorize('update', $catalog);

        $products = Product::all();
        $catalog->load('products');

        return Inertia::render('catalogs/edit', [
            'catalog' => $catalog,
            'products' => $products,
        ]);
    }

    public function update(Catalog $catalog, Request $request, UpdateCatalog $updateCatalog): RedirectResponse
    {
        $updateCatalog->handle($catalog, $request->all());

        return redirect()->route('catalogs.index');
    }

    public function destroy(Catalog $catalog, DeleteCatalog $deleteCatalog): RedirectResponse
    {
        $deleteCatalog->handle($catalog);

        return redirect()->route('catalogs.index');
    }
}
