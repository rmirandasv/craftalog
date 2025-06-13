<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::withCount('products')
            ->paginate(6);

        return Inertia::render(component: 'categories/index', props: [
            'categories' => $categories
        ]);
    }
}
