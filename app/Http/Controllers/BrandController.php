<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::withCount('products')
            ->paginate(6);

        return Inertia::render(component: 'brands/index', props: [
            'brands' => $brands,
        ]);
    }
}
