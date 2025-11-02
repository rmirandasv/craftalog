import DownloadPdfButton from '@/components/catalogs/download-pdf-button';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { edit, index } from '@/routes/catalogs';
import { BreadcrumbItem, Catalog } from '@/types';
import { Link } from '@inertiajs/react';
import { Building2, Edit, Package } from 'lucide-react';

export default function CatalogShow({ catalog }: { catalog: Catalog }) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Catalogs',
      href: index().url,
    },
    {
      title: catalog.name,
      href: '',
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="px-4 py-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="flex size-24 items-center justify-center rounded-xl border-2 border-border bg-muted">
              {catalog.cover_image ? (
                <img
                  src={catalog.cover_image}
                  alt={catalog.name}
                  className="size-full rounded-xl object-cover"
                />
              ) : (
                <Building2 className="size-12 text-muted-foreground" />
              )}
            </div>
            <Heading title={catalog.name} />
          </div>
          <div className="flex items-center gap-2">
            {catalog.products && catalog.products.length > 0 && (
              <DownloadPdfButton catalog={catalog} />
            )}
            <Button variant="ghost" size="sm" asChild>
              <Link href={edit(catalog.id).url}>
                <Edit />
                Edit
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">
                  Company
                </div>
                <div className="text-base">{catalog.company_name}</div>
              </div>
              {catalog.description && (
                <div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Description
                  </div>
                  <div className="text-base">{catalog.description}</div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Products
                  </div>
                  <div className="text-base font-semibold">
                    {catalog.products?.length || 0}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Created
                  </div>
                  <div className="text-base">
                    {new Date(catalog.created_at).toLocaleDateString('es-ES')}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Products</CardTitle>
            </CardHeader>
            <CardContent>
              {!catalog.products || catalog.products.length === 0 ? (
                <div className="text-sm text-muted-foreground">
                  No products in this catalog yet.
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {catalog.products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative overflow-hidden rounded-lg border bg-card transition-colors hover:bg-accent"
                    >
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <Package className="size-12 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="font-medium">{product.name}</div>
                        {product.description && (
                          <div className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                            {product.description}
                          </div>
                        )}
                        <div className="mt-3 flex items-center gap-2">
                          {product.price && (
                            <Badge
                              variant="secondary"
                              className="font-semibold"
                            >
                              ${product.price.toFixed(2)}
                            </Badge>
                          )}
                          {product.category && (
                            <Badge variant="outline" className="font-normal">
                              {product.category.name}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
