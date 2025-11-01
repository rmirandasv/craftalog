import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { create as createCatalog } from '@/routes/catalogs';
import { create as createCategory } from '@/routes/categories';
import { create as createProduct } from '@/routes/products';
import { dashboard } from '@/routes';
import { type BreadcrumbItem, Product } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
  BookOpen,
  FolderTree,
  Package,
  Plus,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: dashboard().url,
  },
];

interface DashboardProps {
  stats: {
    catalogs: number;
    products: number;
    categories: number;
    total_catalog_products: number;
  };
  recentCatalogs: Array<{
    id: number;
    name: string;
    company_name: string;
    cover_image: string;
    products_count: number;
    created_at: string;
    updated_at: string;
  }>;
  recentProducts: Product[];
}

export default function Dashboard({
  stats,
  recentCatalogs,
  recentProducts,
}: DashboardProps) {
  const statCards = [
    {
      title: 'Total Catalogs',
      value: stats.catalogs,
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      description: 'PDF catalogs created',
    },
    {
      title: 'Total Products',
      value: stats.products,
      icon: Package,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950',
      description: 'Products available',
    },
    {
      title: 'Categories',
      value: stats.categories,
      icon: FolderTree,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950',
      description: 'Product categories',
    },
    {
      title: 'Catalog Products',
      value: stats.total_catalog_products,
      icon: Sparkles,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950',
      description: 'Products in catalogs',
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="space-y-6 p-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="mt-1 text-muted-foreground">
              Welcome back! Here's an overview of your catalog activity.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href={createCatalog().url}>
              <Plus className="mr-2 h-4 w-4" />
              New Catalog
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-3">
              <Button variant="outline" className="justify-start" asChild>
                <Link href={createCatalog().url}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Create Catalog
                </Link>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <Link href={createProduct().url}>
                  <Package className="mr-2 h-4 w-4" />
                  Add Product
                </Link>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <Link href={createCategory().url}>
                  <FolderTree className="mr-2 h-4 w-4" />
                  New Category
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Catalogs */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Catalogs</CardTitle>
            </CardHeader>
            <CardContent>
              {recentCatalogs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <BookOpen className="mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="text-sm font-medium">No catalogs yet</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Create your first catalog to get started
                  </p>
                  <Button asChild className="mt-4" size="sm">
                    <Link href={createCatalog().url}>
                      <Plus className="mr-2 h-4 w-4" />
                      Create Catalog
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentCatalogs.map((catalog) => (
                    <Link
                      key={catalog.id}
                      href={`/catalogs/${catalog.id}`}
                      className="flex items-start gap-4 rounded-lg border p-3 transition-colors hover:bg-accent"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted">
                        {catalog.cover_image ? (
                          <img
                            src={catalog.cover_image}
                            alt={catalog.name}
                            className="h-full w-full rounded-md object-cover"
                          />
                        ) : (
                          <BookOpen className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-medium">{catalog.name}</p>
                            {catalog.company_name && (
                              <p className="truncate text-sm text-muted-foreground">
                                {catalog.company_name}
                              </p>
                            )}
                          </div>
                          <Badge variant="secondary">
                            {catalog.products_count}{' '}
                            {catalog.products_count === 1 ? 'product' : 'products'}
                          </Badge>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Updated{' '}
                          {new Date(catalog.updated_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Products */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Products</CardTitle>
            </CardHeader>
            <CardContent>
              {recentProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Package className="mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="text-sm font-medium">No products yet</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Add products to include in your catalogs
                  </p>
                  <Button asChild className="mt-4" size="sm">
                    <Link href={createProduct().url}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Product
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-start gap-4 rounded-lg border p-3"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full rounded-md object-cover"
                          />
                        ) : (
                          <Package className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className="truncate font-medium">{product.name}</p>
                          {product.price && (
                            <Badge variant="secondary">
                              ${product.price.toFixed(2)}
                            </Badge>
                          )}
                        </div>
                        {product.category && (
                          <p className="mt-0.5 text-sm text-muted-foreground">
                            {product.category.name}
                          </p>
                        )}
                        {product.description && (
                          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                            {product.description}
                          </p>
                        )}
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
