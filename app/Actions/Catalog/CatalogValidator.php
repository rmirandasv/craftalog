<?php

namespace App\Actions\Catalog;

use Illuminate\Support\Facades\Validator;

trait CatalogValidator
{
    public function validate(array $data): array
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'company_name' => 'nullable|string|max:255',
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'description' => 'nullable|string|max:255',
            'products' => 'nullable|array',
            'products.*' => 'nullable|integer|exists:products,id',
            'colors' => 'nullable|array',
            'colors.primary' => 'nullable|string|max:7',
            'colors.secondary' => 'nullable|string|max:7',
            'colors.accent' => 'nullable|string|max:7',
            'colors.text' => 'nullable|string|max:7',
            'colors.background' => 'nullable|string|max:7',
            'products_per_page' => 'nullable|integer|min:1',
        ])->validate();
    }
}
