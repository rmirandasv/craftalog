<?php

namespace App\Actions\Product;

use App\Models\Product;
use Illuminate\Support\Facades\Gate;

class DeleteProduct
{
    public function handle(Product $product): void
    {
        Gate::authorize('delete', $product);

        $product->delete();
    }
}
