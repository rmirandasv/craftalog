<?php

use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
});

Route::get('/categories', function () {
    return Inertia::render('categories/index');
});

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