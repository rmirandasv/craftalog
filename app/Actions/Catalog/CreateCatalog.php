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

        // Set default colors if not provided
        if (!isset($data['colors']) || empty($data['colors'])) {
            $data['colors'] = [
                'primary' => '#1e40af',
                'secondary' => '#6b7280',
                'accent' => '#3b82f6',
                'text' => '#1f2937',
                'background' => '#f9fafb',
            ];
        }

        // Set default products per page if not provided
        if (!isset($data['products_per_page']) || empty($data['products_per_page'])) {
            $data['products_per_page'] = 3;
        }

        $coverImagePath = null;
        if (isset($data['cover_image'])) {
            $coverImagePath = $data['cover_image']->store('catalogs', 'public');
            unset($data['cover_image']);
        }

        $data = array_merge($data, [
            'user_id' => Auth::user()->id,
        ]);

        $catalog = Catalog::create($data);

        if ($coverImagePath) {
            $catalog->update(['cover_image' => $coverImagePath]);
        }

        if (isset($data['products'])) {
            $catalog->products()->attach($data['products']);
        }

        return $catalog;
    }
}
