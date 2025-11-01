<?php

namespace App\Actions\Catalog;

use App\Models\Catalog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class CreateCatalog
{
    use CatalogValidator;

    public function handle(array $data): Catalog
    {
        Gate::authorize('create', Catalog::class);

        $data = $this->validate($data);

        $data = array_merge($data, [
            'user_id' => Auth::user()->id,
        ]);

        $catalog = Catalog::create($data);

        if (isset($data['products'])) {
            $catalog->products()->attach($data['products']);
        }

        if (isset($data['cover_image'])) {
            $catalog->cover_image = $data['cover_image']->store('catalogs', 'public');
        }

        return $catalog;
    }
}
