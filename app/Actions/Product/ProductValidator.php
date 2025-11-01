<?php

namespace App\Actions\Product;

use Illuminate\Support\Facades\Validator;

trait ProductValidator
{
    public function validate(array $data): array
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,JPG|max:4000',
            'product_category_id' => 'nullable|exists:product_categories,id',
        ])->validate();
    }
}
