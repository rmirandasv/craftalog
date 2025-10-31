<?php

namespace App\Actions\ProductCategory;

use App\Models\ProductCategory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class CreateProductCategory
{
    use ProductCategoryValidator;

    public function handle(array $data): ProductCategory
    {
        Gate::authorize('create', ProductCategory::class);

        $data = $this->validate($data);

        $data = array_merge($data, [
            'user_id' => Auth::user()->id,
        ]);

        return ProductCategory::create($data);
    }
}
