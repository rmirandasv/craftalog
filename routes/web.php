<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');

Route::get('/contact', function () {
    return Inertia::render('contact');
});

Route::get('/brands', function () {
    return Inertia::render('brands/index');
});

Route::get('/products', function () {
    return Inertia::render('products/index');
});

Route::get('/products/{product:slug}', function (Product $product) {
    return Inertia::render('products/show');
});