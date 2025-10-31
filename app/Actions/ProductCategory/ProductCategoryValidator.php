<?php

namespace App\Actions\ProductCategory;

use Illuminate\Support\Facades\Validator;

trait ProductCategoryValidator
{
    public function validate(array $data): array
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ])->validate();
    }
}
