import CatalogFormWithPreview from '@/components/catalogs/catalog-form-with-preview';
import Heading from '@/components/heading';
import AppLayout from '@/layouts/app-layout';
import { create, index, store } from '@/routes/catalogs';
import { BreadcrumbItem, Product } from '@/types';

export default function CreateCatalog({ products }: { products: Product[] }) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Catalogs',
      href: index().url,
    },
    {
      title: 'Create Catalog',
      href: create().url,
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="px-4 py-6">
        <Heading title="Create Catalog" />
        <CatalogFormWithPreview
          formProps={store.form()}
          submitLabel="Create Catalog"
          products={products}
        />
      </div>
    </AppLayout>
  );
}
