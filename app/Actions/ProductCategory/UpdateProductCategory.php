<?php

namespace App\Actions\ProductCategory;

use App\Models\ProductCategory;
use Illuminate\Support\Facades\Gate;

class UpdateProductCategory
{
    use ProductCategoryValidator;

    public function handle(ProductCategory $productCategory, array $data): void
    {
        Gate::authorize('update', $productCategory);

        $data = $this->validate($data);

        $productCategory->update($data);
    }
}
