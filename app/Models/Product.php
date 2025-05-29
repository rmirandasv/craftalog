<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'short_description',
        'sku',
        'price',
        'compare_at_price',
        'cost_price',
        'quantity',
        'qr_code',
        'is_featured',
        'is_visible',
        'images',
        'attributes'
    ];

    protected function casts(): array
    {
        return [
            'sku' => 'decimal',
            'compare_at_price' => 'decimal',
            'cost_price' => 'decimal',
            'quantity' => 'integer',
            'is_featured' => 'boolean',
            'is_visible' => 'boolean',
            'images' => 'array',
            'attributes' => 'array'
        ];
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_product');
    }
}
