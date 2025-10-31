<?php

namespace App\Actions\Product;

use App\Models\Product;
use Illuminate\Support\Facades\Gate;

class UpdateProduct
{
    use ProductValidator;

    public function handle(Product $product, array $data): void
    {
        Gate::authorize('update', $product);

        $data = $this->validate($data);

        if (isset($data['image'])) {
            $data['image'] = $data['image']->store('products', 'public');
        }

        $product->update($data);
    }
}
