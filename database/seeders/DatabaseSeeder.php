<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $categories = Category::factory()->count(12)->create();

        Brand::factory()
            ->has(Product::factory()->recycle($categories)->count(12))
            ->count(12)
            ->create();

        
    }
}
