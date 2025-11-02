<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Catalog extends Model
{
    protected $fillable = [
        'name',
        'company_name',
        'cover_image',
        'description',
        'user_id',
        'colors',
        'products_per_page',
    ];

    protected $casts = [
        'colors' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(
            Product::class,
            'catalog_products',
            'catalog_id',
            'product_id'
        )->withTimestamps();
    }

    public function coverImage(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value ? asset('storage/'.$value) : null,
        );
    }
}
