<?php

namespace App\Actions\Catalog;

use App\Models\Catalog;
use Illuminate\Support\Facades\Gate;

class DeleteCatalog
{
    public function handle(Catalog $catalog): void
    {
        Gate::authorize('delete', $catalog);

        $catalog->delete();
    }
}
