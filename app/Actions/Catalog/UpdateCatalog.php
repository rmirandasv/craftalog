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

        $catalog->update($data);

        if (isset($data['products'])) {
            $catalog->products()->sync($data['products']);
        } else {
            $catalog->products()->detach();
        }
    }
}
