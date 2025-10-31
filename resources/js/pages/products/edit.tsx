import Heading from '@/components/heading';
import ProductForm from '@/components/products/product-form';
import AppLayout from '@/layouts/app-layout';
import { edit, index, update } from '@/routes/products';
import { BreadcrumbItem, Product, ProductCategory } from '@/types';

export default function ProductsEdit({
  product,
  categories,
}: {
  product: Product;
  categories: ProductCategory[];
}) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Products',
      href: index().url,
    },
    {
      title: 'Edit Product',
      href: edit(product.id).url,
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="px-4 py-6">
        <Heading title="Edit Product" />
        <div className="mt-6">
          <ProductForm
            formProps={update.form.put(product.id)}
            submitLabel="Save Changes"
            categories={categories}
            defaultValues={{
              name: product.name,
              description: product.description,
              price: product.price,
              image: product.image,
              product_category_id: product.category?.id,
            }}
          />
        </div>
      </div>
    </AppLayout>
  );
}
