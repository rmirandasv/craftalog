<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/contact', function () {
    return Inertia::render('contact');
});

Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');

Route::get('/brands', [BrandController::class, 'index'])->name('brands.index');

Route::get('/products', [ProductController::class, 'index'])->name('products.index');

Route::get('/products/{product:slug}', function (Product $product) {
    return Inertia::render('products/show');
});