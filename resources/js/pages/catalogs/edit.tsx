import CatalogFormWithPreview from '@/components/catalogs/catalog-form-with-preview';
import Heading from '@/components/heading';
import AppLayout from '@/layouts/app-layout';
import { edit, index, update } from '@/routes/catalogs';
import { BreadcrumbItem, Catalog, Product } from '@/types';

export default function CatalogsEdit({
  catalog,
  products,
}: {
  catalog: Catalog;
  products: Product[];
}) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Catalogs',
      href: index().url,
    },
    {
      title: 'Edit Catalog',
      href: edit(catalog.id).url,
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="px-4 py-6">
        <Heading title="Edit Catalog" className="mb-6" />
        <CatalogFormWithPreview
          formProps={update.form.put(catalog.id)}
          submitLabel="Save Changes"
          products={products}
          defaultValues={{
            name: catalog.name,
            company_name: catalog.company_name,
            cover_image: catalog.cover_image,
            description: catalog.description,
            productIds: catalog.products?.map((p) => p.id) || [],
            colors: catalog.colors,
            products_per_page: catalog.products_per_page,
          }}
        />
      </div>
    </AppLayout>
  );
}
