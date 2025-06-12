<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\BelongsToRelationship;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

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
        'attributes',
        'brand_id',
        'categpry_id',
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

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    #[Scope]
    public function visible(Builder $query): Builder
    {
        return $query->where('is_visible', true);
    }

    #[Scope]
    public function featured(Builder $query): Builder
    {
        return $query->where('is_featured', true);
    }
}
