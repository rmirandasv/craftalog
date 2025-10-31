import DeleteCategoryDialog from '@/components/categories/delete-category-dialog';
import Heading from '@/components/heading';
import Paginator from '@/components/pagination';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { create, edit, index } from '@/routes/categories';
import { BreadcrumbItem, Paginated, ProductCategory } from '@/types';
import { Link } from '@inertiajs/react';
import { Edit, Plus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Categories',
    href: index().url,
  },
];

export default function CategoriesIndex({
  categories,
}: {
  categories: Paginated<ProductCategory>;
}) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="px-4 py-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Heading title="Categories" />
          <Button asChild>
            <Link href={create().url}>
              <Plus />
              Create Category
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">All Categories</CardTitle>
            <span className="text-sm text-muted-foreground">
              {categories.total} total
            </span>
          </CardHeader>
          <CardContent>
            {categories.data.length === 0 ? (
              <div className="text-sm text-muted-foreground">
                No categories yet.
              </div>
            ) : (
              <ul className="divide-y">
                {categories.data.map((category) => (
                  <li
                    key={category.id}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="min-w-0">
                      <div className="leading-none font-medium">
                        {category.name}
                      </div>
                      {category.description && (
                        <div className="truncate text-sm text-muted-foreground">
                          {category.description}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={edit(category.id).url}>
                          <Edit />
                          Edit
                        </Link>
                      </Button>
                      <DeleteCategoryDialog category={category} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Paginator links={categories.links} />
      </div>
    </AppLayout>
  );
}
