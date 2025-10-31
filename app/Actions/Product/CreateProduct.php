<?php

namespace App\Actions\Product;

use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class CreateProduct
{
    use ProductValidator;

    public function handle(array $data): Product
    {
        Gate::authorize('create', Product::class);

        $data = $this->validate($data);

        $data = array_merge($data, [
            'user_id' => Auth::user()->id,
        ]);

        return Product::create($data);
    }
}
