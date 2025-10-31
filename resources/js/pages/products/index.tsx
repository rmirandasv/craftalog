import Heading from '@/components/heading';
import Paginator from '@/components/pagination';
import DeleteProductDialog from '@/components/products/delete-product-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { create, edit, index } from '@/routes/products';
import { BreadcrumbItem, Paginated, Product } from '@/types';
import { Link } from '@inertiajs/react';
import { Edit, Package, Plus } from 'lucide-react';

export default function ProductsIndex({
  products,
}: {
  products: Paginated<Product>;
}) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Products',
      href: index().url,
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="px-4 py-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Heading title="Products" />
          <Button asChild>
            <Link href={create().url}>
              <Plus />
              Create Product
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">All Products</CardTitle>
            <span className="text-sm text-muted-foreground">
              {products.total} total
            </span>
          </CardHeader>
          <CardContent>
            {products.data.length === 0 ? (
              <div className="text-sm text-muted-foreground">
                No products yet.
              </div>
            ) : (
              <ul className="divide-y">
                {products.data.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="flex size-12 items-center justify-center rounded-md border border-border bg-muted">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="size-full rounded-md object-cover"
                            />
                          ) : (
                            <Package className="size-6 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate leading-none font-medium">
                          {product.name}
                        </div>
                        {product.description && (
                          <div className="mt-1 truncate text-sm text-muted-foreground">
                            {product.description}
                          </div>
                        )}
                        <div className="mt-2 flex items-center gap-2">
                          {product.price && (
                            <Badge variant="secondary" className="font-normal">
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
                    <div className="flex flex-shrink-0 items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={edit(product.id).url}>
                          <Edit />
                          Edit
                        </Link>
                      </Button>
                      <DeleteProductDialog product={product} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Paginator links={products.links} />
      </div>
    </AppLayout>
  );
}
