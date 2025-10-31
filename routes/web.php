<?php

use App\Http\Controllers\CatalogController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource(
        'categories',
        ProductCategoryController::class
    )->except('show');

    Route::resource(
        'products',
        ProductController::class
    )->except('show');

    Route::resource(
        'catalogs',
        CatalogController::class
    )->except('show');
});

require __DIR__.'/settings.php';
