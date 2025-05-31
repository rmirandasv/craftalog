<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $page = Page::where('slug', 'home')->first();

        return Inertia::render(component: 'home', props: [
            'page' => $page,
        ]);
    }
}
