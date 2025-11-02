<?php

namespace App\Actions\Catalog;

use App\Models\Catalog;
use Illuminate\Support\Facades\Gate;

class UpdateCatalog
{
    use CatalogValidator;

    public function handle(Catalog $catalog, array $data): void
    {
        Gate::authorize('update', $catalog);

        $data = $this->validate($data);

        // Set default colors if not provided
        if (! isset($data['colors']) || empty($data['colors'])) {
            $data['colors'] = [
                'primary' => '#1e40af',
                'secondary' => '#6b7280',
                'accent' => '#3b82f6',
                'text' => '#1f2937',
                'background' => '#f9fafb',
            ];
        }

        // Set default products per page if not provided
        if (! isset($data['products_per_page']) || empty($data['products_per_page'])) {
            $data['products_per_page'] = 3;
        }

        if (isset($data['cover_image'])) {
            $data['cover_image'] = $data['cover_image']->store('catalogs', 'public');
        }

        $catalog->update($data);

        if (isset($data['products'])) {
            $catalog->products()->sync($data['products']);
        } else {
            $catalog->products()->detach();
        }
    }
}
