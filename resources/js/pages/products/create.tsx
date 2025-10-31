import Heading from '@/components/heading';
import ProductForm from '@/components/products/product-form';
import AppLayout from '@/layouts/app-layout';
import { create, index, store } from '@/routes/products';
import { BreadcrumbItem, Product, ProductCategory } from '@/types';

export default function ProductsCreate({
  categories,
}: {
  categories: ProductCategory[];
  products: Product[];
}) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Products',
      href: index().url,
    },
    {
      title: 'Create Product',
      href: create().url,
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="px-4 py-6">
        <Heading title="Create Product" />
        <div className="mt-6">
          <ProductForm
            formProps={store.form()}
            submitLabel="Create Product"
            categories={categories}
          />
        </div>
      </div>
    </AppLayout>
  );
}
