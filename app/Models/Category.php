<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'is_visible',
        'is_featured',
        'image',
    ];

    protected function casts(): array
    {
        return [
            'is_visible' => 'boolean',
            'is_featured' => 'boolean',
        ];
    }

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'category_product');
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
