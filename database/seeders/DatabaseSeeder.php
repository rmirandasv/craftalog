<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $brands = Brand::factory([
            'is_visible' => true,
        ])
        ->state(new Sequence(
            ['is_featured' => true],
            ['is_featured' => false],
        ))
        ->count(12)
        ->create()
        ->pluck('id')
        ->toArray();

        Category::factory([
            'is_visible' => true, 
        ])
        ->state(new Sequence(
            ['is_featured' => true],
            ['is_featured' => false],
        ))
        ->has(Product::factory([
                'is_visible' => true,
            ])
            ->state(new Sequence(
                fn (Sequence $sequence) => [
                    'brand_id' => Arr::random($brands),
                    'is_featured' => Arr::random([true, false])
                ]
            ))
            ->count(12)
        )
        ->count(12)
        ->create();
    }
}
