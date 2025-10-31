<?php

namespace App\Actions\ProductCategory;

use App\Models\ProductCategory;
use Illuminate\Support\Facades\Gate;

class DeleteProductCategory
{
    public function handle(ProductCategory $productCategory): void
    {
        Gate::authorize('delete', $productCategory);

        $productCategory->delete();
    }
}
