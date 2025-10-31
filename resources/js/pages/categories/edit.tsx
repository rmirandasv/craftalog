import CategoryForm from '@/components/categories/category-form';
import Heading from '@/components/heading';
import AppLayout from '@/layouts/app-layout';
import { edit, index, update } from '@/routes/categories';
import { BreadcrumbItem, ProductCategory } from '@/types';

export default function EditCategory({
  category,
}: {
  category: ProductCategory;
}) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Categories',
      href: index().url,
    },
    {
      title: 'Edit Category',
      href: edit(category.id).url,
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="px-4 py-6">
        <Heading title="Edit Category" />
        <div className="mt-6">
          <CategoryForm
            formProps={update.form.put(category.id)}
            submitLabel="Save Changes"
            defaultValues={{
              name: category.name,
              description: category.description,
            }}
          />
        </div>
      </div>
    </AppLayout>
  );
}
