import DeleteCatalogDialog from '@/components/catalogs/delete-catalog-dialog';
import DownloadPdfButton from '@/components/catalogs/download-pdf-button';
import Heading from '@/components/heading';
import Paginator from '@/components/pagination';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { create, edit, index } from '@/routes/catalogs';
import { BreadcrumbItem, Catalog, Paginated } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Building2, Edit, Plus } from 'lucide-react';

export default function CatalogsIndex({
  catalogs,
}: {
  catalogs: Paginated<Catalog>;
}) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Catalogs',
      href: index().url,
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="px-4 py-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Heading title="Catalogs" />
          <Button asChild>
            <Link href={create().url}>
              <Plus />
              Create Catalog
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">All Catalogs</CardTitle>
            <span className="text-sm text-muted-foreground">
              {catalogs.total} total
            </span>
          </CardHeader>
          <CardContent>
            {catalogs.data.length === 0 ? (
              <div className="text-sm text-muted-foreground">
                No catalogs yet.
              </div>
            ) : (
              <ul className="divide-y">
                {catalogs.data.map((catalog) => (
                  <li
                    key={catalog.id}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="flex size-16 items-center justify-center rounded-md border border-border bg-muted">
                          {catalog.company_logo ? (
                            <img
                              src={catalog.company_logo}
                              alt={catalog.company_name}
                              className="size-full rounded-md object-cover"
                            />
                          ) : (
                            <Building2 className="size-8 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 truncate leading-none font-medium">
                          <BookOpen className="size-4 text-muted-foreground" />
                          {catalog.name}
                        </div>
                        <div className="mt-1 flex items-center gap-2 truncate text-sm text-muted-foreground">
                          <Building2 className="size-3" />
                          {catalog.company_name}
                        </div>
                        {catalog.description && (
                          <div className="mt-1 truncate text-sm text-muted-foreground">
                            {catalog.description}
                          </div>
                        )}
                        <div className="mt-2 flex items-center gap-2">
                          {catalog.products && catalog.products.length > 0 && (
                            <Badge variant="secondary" className="font-normal">
                              {catalog.products.length}{' '}
                              {catalog.products.length === 1
                                ? 'product'
                                : 'products'}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-2">
                      {catalog.products && catalog.products.length > 0 && (
                        <DownloadPdfButton catalog={catalog} />
                      )}
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={edit(catalog.id).url}>
                          <Edit />
                          Edit
                        </Link>
                      </Button>
                      <DeleteCatalogDialog catalog={catalog} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Paginator links={catalogs.links} />
      </div>
    </AppLayout>
  );
}
